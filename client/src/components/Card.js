import { Link } from "react-router-dom"
import s from "./card.module.css"
export default function Card({id,name,flag,continent}) {


  return (
    <div className={s.all}>
      <div className={s.container}>
        <h2 className={s.name}>{name}</h2>
        <img className={s.img} src={flag} alt="sin imagen"/>
        <div  className={s.parrafos}>
          <p> Continent: {continent}</p>
        </div>
      </div>
 </div>
  )
  
};
