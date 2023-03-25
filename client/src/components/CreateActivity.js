import { useEffect ,useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import {getActivities, getAllCountries, postActivity} from "../actions/index"
import { useHistory } from "react-router-dom";
import s from "./activityCreate.module.css"
import Search from "./Search";
import Activities from "./Activities";
import swal from 'sweetalert';
import volver from "../img/volver.png"
import { Link } from "react-router-dom";
  export default function ActivityCreate() {

    const history = useHistory();
    const countries= useSelector((state=> state.countries))
    const activities= useSelector((state=> state.activities))
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
    let error={}
    if (input.name.length > 0) {
      let actExists = activities.filter(e => e.name.toLowerCase() === input.name.toLowerCase());
      if(actExists.length > 0 ) error.name ="The activity already exists";
  }
  if(!input.name.length)  error.name= "name is required"
  if(!input.duration.length)  error.duration= "duration is required"
  if(input.duration <1 ||input.duration >24 )  error.duration= "duration must be greater than 1 and less than 24"
  if(!input.difficulty.length)  error.difficulty= "difficulty is required"
  if(!input.season.length)  error.season= "season is required"
  if(input.idCountry.length ==0)  error.idCountry= "country is required"
  return error
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
    input.idCountry.length ==="")  {
      swal({
        title: "¡Error!",
        text: "You must complete all fields",
        icon: "error",
        button: "OK",
      });
    }else{
      dispatch(postActivity(input)) //creamos la actividad 
      swal({
        title: "¡Activity created successfully!",
        text: "",
        icon: "success",
        button: "OK",
      });
      setInput({ name: "", duration: "", difficulty: "", season: "" ,  idCountry:[]}); //reseateamos loas casillas 
    }
    //history.push('/home') //redirigir 
 
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
   {/*  <Search></Search> */}
   
    <div className={s.containerform}>
    <Link to ={"/home"}>
      <img className={s.imgBack} src={volver} alt="back"  />
    </Link>
    <div  className={s.container}>
      <h2 className={s.title}> Create Activity </h2>
      <form  className={s.form} onSubmit={onSubmit}>
    
        <input className={s.input} name="name" type="text" placeholder="Name activity.."  value={input.name} onChange={onChange}></input>
        {error.name && <p style={{color:"red", fontWeight:"bold"}}>{error.name}</p>}
        
        <input className={s.input} name="duration" type="number" min="1" pattern="^[0-9]+" placeholder="Duration in hours.."  value={input.duration} onChange={onChange}></input> 
        {error.duration && <p style={{color:"red", fontWeight:"bold"}}>{error.duration}</p>}
        
        <label className={s.label}>Difficulty:</label>
        <input className={s.radio}type="range" name="difficulty" min="1" max="5"  value={input.difficulty}onChange={onChange} ></input>
        {error.difficulty && <p style={{color:"red", fontWeight:"bold"}}>{error.difficulty}</p>}
    
          <select className={s.select}  name="season" value={input.season} onChange={onChange}> 
            <option className={s.op} >season</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autum</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>
          {error.season && <p style={{color:"red", fontWeight:"bold"}}>{error.season}</p>}
          <select   className={s.select} onChange={(e) => handleSelect(e)}>
          <option>county</option>
          {countries.map((v) => (
                  <option  key={v.id} value={v.id}>{v.name}</option>
                ))}
          </select>
        
          <div className={s.textArea}>
              {input.idCountry.map((country,i) => (
                <div  key={i}>
                  <input key={country.id} className={s.btnDelete} type='button' value='X' onClick={() => handleDelete(country)}/> 
                  <p className={s.inputTextarea} >{country}</p>
                </div>
              ))}
            </div> 
         {/*    {error.idCountry && <p style={{color:"red", fontWeight:"bold"}}>{error.idCountry}</p>}  */} 
        <button className={s.btn__submit} type="submit"> Create activity</button>
      </form>
    </div>
  {/*   <Activities/> */}
    </div>
    </>
   )
};
