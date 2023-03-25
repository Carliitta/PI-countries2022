import React, { useState, useEffect } from 'react';

import s from "./Paginado.module.css"

export default function Paginado({ postPag,countries, paginado,pagina}) {
   
     const pageNumbrers = []
     for (let i = 1; i <= Math.ceil(countries/postPag); i++) {
         pageNumbrers.push(i)   
     }
     return(
         <nav className={s.paginadoContainer}>
             <ul className ={s.ul}>
             {
                pageNumbrers.map((number,i) =>(//hago un map al array con los numeros y creo una lista con cada uno
                    <li key={i}>{/* con un link que al dar click setea el valor con el numero que presionamos y os lleva a esa pagina */}
                        <a  className={pagina===number ? 'active' : ""}  onClick={()=> paginado(number)}> {number} </a> 
                        
                    </li> 
                ))}
             </ul>
         </nav>
     )
 
};
