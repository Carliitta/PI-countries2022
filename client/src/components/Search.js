import {Link} from "react-router-dom"
import s from "./search.module.css"
import { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  { searchCountries , getAllCountries} from "../actions";
import { useHistory } from "react-router-dom";

export default function Search(){

  const [search, setSearch] = useState('')
  
  //dispatch para ejecutar nuestras acciones
  const dispatch = useDispatch();

   function onInputChange(e){
    e.preventDefault();
    setSearch(e.target.value)//obtengo el valor ingresado
  }
  const handleSubmit = e => {
  e.preventDefault();
  dispatch(searchCountries(search))
 
  }
  const history= useHistory()
 function inicio() {
  history.push("/home")
  /*  window.location.reload() */
 }


  return (
   <div >

     <nav className={s.containerNav}>
   
       <Link className={s.linkhome} to ="/home" onClick={inicio}>Countries</Link>
       <form className={s.form} onSubmit={handleSubmit} >

       <input  className={s.input} type="text" placeholder='Search country..' value={search} onChange={onInputChange} />
       <input className={s.inputButton}type="submit" value="Search" /> 

       </form>
    
       <div className={s.links}>
       <Link className={s.link} to ="/createActivity">Create Activity </Link>
      
       </div>
     </nav>
     
   </div>
   
  )
}