import { useDispatch,useSelector } from "react-redux"
import React, { useState, useEffect } from 'react';
import { getActivities } from "../actions";
import s from "./activity.module.css"
export default function Activities() {
  // const activities = useSelector((state) => state.activities);
   const [activity, setActivity]= useState([])
   const dispatch= useDispatch()
  // dispatch(getActivities())

  useEffect(() => {
  
    fetch('http://localhost:3001/activities') //por ahora dejo asi porque no me toma de la otra forma con el selector  
   .then(response=>response.json())
   .then(data=> setActivity(data))
  }, [])
  
  return (
    <div className={s.activityListContainer}>
    <h3 className={s.title}>List Activities:</h3>
    {activity.map(act=> (
      <div className={s.list} key={act.id}>
      <p className={s.p}>  ActivityName: {act.name}</p>
      <p  className={s.p}> Season:  {act.season}</p>
      <p  className={s.p}>Duration: {act.duration} </p>
      <p  className={s.p}>Difficulty: {act.difficulty}</p>
      {/* <p> country: {act.idCountry}</p> */}
      </div>
    )
    )}
    </div>
  );

};
