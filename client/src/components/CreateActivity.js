import { useEffect ,useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import {getActivities, getAllCountries, postActivity} from "../actions/index"
import { useHistory } from "react-router-dom";
import s from "./activityCreate.module.css"
import Search from "./Search";
import Activities from "./Activities";




  export default function ActivityCreate() {

    const dispatch = useDispatch()
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
    const [errors, setErrors] = useState({})
  


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
 const validate = (input) => {
  let errors = {};
 if(!input.name.length)   errors.name = "name is required"
 if(!input.duration.length)  errors.duration =  "duration is required"
 if(!input.difficulty.length)  errors.difficulty ="difficulty is required"
 if(!input.season.length)  errors.season = "season is required"
 if(!input.idCountry.length)  errors.idCountry= "country is required"
 return errors

 }
   

  useEffect(() => {

    dispatch(getAllCountries())
    dispatch(getActivities())
  

  }, [input])//setea el error cada vez que tengamos un cambio en el estado 
  
  function onSubmit(e) {
      e.preventDefault();

     if (!Object.keys(errors).length) { //verifica si hay propiedades en el estado de error
       dispatch(postActivity(input)) //creamos la actividad 
       alert("Activity created successfully!")
       setInput({ name: "", duration: "", difficulty: "", season: "" ,  idCountry:[]}); //reseateamos loas casillas 
     
       history.push('/home') //redirigir 
      
     } else {
      alert("debes rellenar todos los campos ")
     }

  }
      
  function onChange(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
 
  }
  
  function handleSelect(e) {
    setInput({ ...input, idCountry: [...input.idCountry, e.target.value] });
   
  }
///eliminar pais
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
    
        <input className={s.input} name="name" type="text" placeholder="Name activity.."  value={input.name} onChange={onChange} ></input>
        {errors.name &&  <p className={s.err}> {errors.name}</p>}
   
        <input className={s.input} name="duration" type="number" placeholder="Duration in hours.."  value={input.duration} onChange={onChange}></input> 
         {errors.duration &&  <p className={s.err}> {errors.duration}</p>}
        
        <label className={s.label}>Difficulty:</label>
        <input className={s.radio}type="range" name="difficulty" min="1" max="5"  value={input.difficulty}onChange={onChange} ></input>
        {errors.difficulty && <p className={s.err}> {errors.difficulty}</p>}
    
        <select   className={s.select} onChange={(e) => handleSelect(e)}>
          <option >{"Select a contry-->"}</option>
          {countries.map((c,i) => (
                  <option  key={i} value={c.id}>{c.name}</option>
                ))}

          </select>
        
          <div className={s.textArea}>
              {input.idCountry.map((country,i) => (
                <div key={i} >
                  <input  className='btnDelete' type='button' value='X' onClick={() => handleDelete(country)}/> 
                  <p  >{country}</p>
                </div>
              ))}
            </div>   
            {errors.idCountry &&  <p className={s.err}> {errors.idCountry}</p>}
          <select className={s.select}  name="season" value={input.season} onChange={onChange}> 
            <option className={s.op} >{"select a season -->"}</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autum</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>
          {errors.season && <p className={s.err}> {errors.season}</p>}
        
        <button className={s.btn__submit} type="submit"> Create activity</button>
      </form>
    </div>
    <Activities/>
    </div>
    </>
   )
 
  }


