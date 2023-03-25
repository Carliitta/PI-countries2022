import { Dispatch,useEffect} from "react"
import { useDispatch ,useSelector} from "react-redux"
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import s from "./filters.module.css"
import Paginado from "./Paginado";

import {getAllCountries, orderByContinent, Sort, orderByPopulation, orderByActivities} from "../actions"
export default function Filters({setPagina}) {
const activity= useSelector(state=> state.activities)
 const dispatch = useDispatch()
 let history = useHistory ();

function orderAZ(e){
   dispatch(Sort(e.target.value))
   history.push("/home") //para que actualice
   setPagina(1)
 }
 function orderContinent(e) {
  dispatch(orderByContinent(e.target.value))
  history.push("/home") //para que actualice
  setPagina(1)
 }
 function orderPopulation(e) {
  dispatch(orderByPopulation(e.target.value))
  history.push("/home") //para que actualice
  setPagina(1)
 }
 function orderActivities(e) {
  dispatch(orderByActivities(e.target.value))
  history.push("/home") //para que actualice
  setPagina(1)
 }
  return(
    <div >
      <div className={s.containerFilters}>
      <h3  className={s.title}>Filter for: </h3>
      <select className={s.filterAndOrder}
          onChange={ 
           orderAZ
          }
        >
          <option>A ⇵ Z</option>
          <option value="ASCENDENTE"> A-Z </option>
          <option value="DESCENDENTE"> Z-A </option>
        </select>
        <select className={s.filterAndOrder}
          onChange={ 
            orderContinent
          }
        >
          <option hidden="true">Continent</option>
          <option value="All">All</option>
          <option value="North America">North America </option>
          <option value="South America"> South America</option>
          <option value="Asia"> Asia</option>
          <option value="Africa"> Africa</option>
          <option value="Europe"> Europa</option>
          <option value="Oceania"> Oceania </option>
          <option value="Antarctica"> Antartida</option>
        
        </select>
        <select className={s.filterAndOrder}
          onChange={ 
          orderPopulation
          }
        >
          <option hidden="true">Population</option>
          <option value="MAX"> Less pop </option>
          <option value="MIN"> More pop </option>
        </select>
        <select className={s.filterAndOrder}
          onChange={ 
          orderActivities
          }
        >
          <option hidden="true">Activities</option>
          {
            activity.map( e=> <option key={e.id} value={e.name}> {e.name }</option>)
          }
         
        </select>
      </div>
     
    </div>
  )
};
