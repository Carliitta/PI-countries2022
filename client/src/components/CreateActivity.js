import { useEffect ,useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import {getActivities, getAllCountries, postActivity} from "../actions/index"
import { useHistory } from "react-router-dom";
import s from "./activityCreate.module.css"
import Search from "./Search";
import Activities from "./Activities";


  export default function ActivityCreate() {

    const history = useHistory();
    const countries= useSelector((state=> state.countries))
    ////////////////////////////////////////////////////////
    const [input, setInput] = useState({
      name: "",
      duration: "",
      difficulty: "",
      season: "",
      idCountry:[]
    });
    const [error, seterror] = useState("");


    //*ordeno los paises alfabeticamente//////////////////////////

   countries.sort((a,b) =>{
    if(a.name < b.name){
      return -1;
    }
    if(a.name > b.name){
        return 1;
    }
    return 0;
    })

//* validaciones : ///////////////////////////////////////////////

  const validateInput=(input)=>{
  if(!input.name.length)  return "name is required"
  if(!input.duration.length)  return "duration is required"
  if(input.duration <0 ||input.duration >25 )  return "duration must be greater than 0 and less than 25"
  if(!input.difficulty.length)  return "difficulty is required"
  if(!input.season.length)  return "season is required"
  if(!input.idCountry.length)  return "country is required"
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(getActivities())
    // seterror(validateInput(input))

  }, [input])//setea el error cada vez que tengamos un cambio en el estado 
  
  function onSubmit(e) {
      e.preventDefault()
    // si el estado error no tiene algun elemento(las key del estado input[name,duration...])  le mandamos un alert 
    if (input.name === "" ||
    input.duration === "" ||
    input.difficulty === "" ||
    input.season === "" ||
    input.idCountry.length === 0) return alert('Debe llenar los campos');
      
      dispatch(postActivity(input)) //creamos la actividad 
      alert("Activity created successfully!")
      setInput({ name: "", duration: "", difficulty: "", season: "" ,  idCountry:[""]}); //reseateamos loas casillas 

      history.push('/home') //redirigir 
 
  }
  function onChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
  })
  seterror(
    validateInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  );
  }
  function handleSelect(e) {
    setInput({ ...input, idCountry: [...input.idCountry, e.target.value] });
  }

  function handleDelete(i) {
    setInput({
      ...input,
      idCountry: input.idCountry.filter((el) => el !== i),
    });
  }


   return(
    <>
    <Search></Search>
   
    <div className={s.containerform}>

    <div  className={s.container}>
      <h2 className={s.title}> Create Activity </h2>
      <form  className={s.form} onSubmit={onSubmit}>
    
        <input className={s.input} name="name" type="text" placeholder="Name activity.."  value={input.name} onChange={onChange}></input>
        <p> {error.name && error.name}</p>
        
        <input className={s.input} name="duration" type="number" placeholder="Duration in hours.."  value={input.duration} onChange={onChange}></input> 
        <p> {error.duration && error.duration}</p>
        
        <label className={s.label}>Difficulty:</label>
        <input className={s.radio}type="range" name="difficulty" min="1" max="5"  value={input.difficulty}onChange={onChange} ></input>
        <p> {error.difficulty && error.difficulty}</p>
    
          <select className={s.select}  name="season" value={input.season} onChange={onChange}> 
            <option className={s.op} >season</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autum</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>
          <p> {error.season && error.season}</p>
          <select   className={s.select} onChange={(e) => handleSelect(e)}>
          <option>county</option>
          {countries.map((v) => (
                  <option  key={v.id} value={v.id}>{v.name}</option>
                ))}

          </select>
          <p> {error.idCountry && error.idCountry}</p>
          <div className={s.textArea}>
              {input.idCountry.map((country) => (
                <div >
                  <input key={country.id} className='btnDelete' type='button' value='X' onClick={() => handleDelete(country)}/> 
                  <p >{country}</p>
                </div>
              ))}
            </div>   
        <button className={s.btn__submit} type="submit"> Create activity</button>
      </form>
    </div>
    <Activities/>
    </div>
    </>
   )
};
