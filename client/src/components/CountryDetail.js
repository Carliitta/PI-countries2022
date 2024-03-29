import { useState, useEffect } from "react"
import { useDispatch ,useSelector} from "react-redux"
import { useParams } from "react-router-dom"
import { clearDetail, CountriesDetail} from "../actions"
import s from "./detail.module.css"
import flecha from "../img/volver.png"
import Search from "./Search"
import { Link } from "react-router-dom"
export default function CountryDetail() {
  const detail = useSelector((state)=> state.detail)

  
  let {id}= useParams()
  let dispatch= useDispatch()
  
  useEffect(() => {
    dispatch(CountriesDetail(id))
    return ()=>{
      dispatch(clearDetail())
    }
    
  },[])


  if(detail.length===0)
  return(
    <div className={s.loadingDiv}>

      <p className={s.spinner}></p>
      <p className={s.loadingp}>Loading...</p>
    </div>
  )

    return (
      <>
 
    <div className={s.detail}>
      <div>
      <Link to={"/home"}>
        <img id={s.linkVolver}  src={flecha} alt="volver" />
        </Link>
      </div>
         <div className={s.container}>
          
            <div className={s.items}>
            <h2 className={s.name}>{detail.name}</h2> 
            <img className={s.img} src={ detail.flag} alt="not image"/>
              <h5>{detail.id}</h5> 
              <h5> <b>Continent:</b> { detail.continent}</h5> 
              <h5><b>Capital:</b> { detail.capital}</h5>
              <h5><b>Population:</b> { detail.population}</h5>
              <h5><b>Area:</b> {detail.area} km2</h5>
              <h5><b>Subregion:</b> {detail.subregion}</h5>
          
              </div> 
                <h3 className={s.titAct}>Activities:</h3>
            {detail.activities.length?
             detail.activities.map(e=>{
              return (
              <div className={s.actcontainer}>
              
                <h5><b>Activity:</b> {e.name}</h5>
                <h5><b>Difficulty:</b> {e.difficulty}</h5>
                <h5><b>Duration:</b> {e.duration} hs</h5>
                <h5><b>Season:</b> {e.season}</h5>   
              </div>
              )
            }) : <div> <h3 className={s.dontact}>There are no registered activities</h3></div>
            }
             </div>
      </div>

    </>     
    )
};
