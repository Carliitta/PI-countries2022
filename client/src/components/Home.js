import React from 'react';
import { useState, useEffect } from 'react';
import s from "./Home.module.css"
import {Link} from 'react-router-dom'
import Search from "./Search"
import { useDispatch, useSelector } from 'react-redux'
import {getActivities, getAllCountries,Sort} from "../actions/"
import Card from './Card';
import Paginado from './Paginado';
import Filters from './Filters';


export default function Home(){
     const countries = useSelector((state) => state.countriesFilt)
     const dispatch = useDispatch()
    //*paginado//
     const [pag,setPag] = useState(1)
     const [postPag] = useState(10)

     const lastCountry = pag * postPag;
     const firstCountry = lastCountry - postPag;
     const currentCountry = countries.slice(firstCountry, lastCountry);


     const paginado = (pageNumber) => {
      setPag(pageNumber);
    };
    //*fin*//

  useEffect(() => {
   dispatch(getAllCountries())
   //dispatch(getActivities())
  }, [])
  
  
  if(countries.length===0)
  return(
    <div className={s.loadingDiv}>
      <p className={s.spinner}></p>
      <p className={s.loadingp}>Loading...</p>
    </div>
  )
 return (
  <div  >
    <div>
    <Search  setPagina={setPag}/>
    </div>
    <Filters setPagina={setPag}/>
    <Paginado
        postPag={postPag}
        pagina={pag}
        countries={countries.length}
        paginado={paginado}
      />

    <div className={s.container}>
     <div className={s.grid}>
        {currentCountry.map(c=>(
         <Link key={c.id} className={s.link} to={"/" + c.id}>
            <Card 
            name={ c.name}
            flag={ c.flag}
            continent={ c.continent} 
            />
          </Link>
      )
      )}
     </div>
  
    </div>
  
  </div> 
 )
}