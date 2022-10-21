import React, { useState, useEffect } from 'react';

import s from "./Paginado.module.css"

export default function Paginado({ postPag,countries, paginado}) {

     const pageNumbrers = []
     for (let i = 1; i <= Math.ceil(countries/postPag); i++) {
         pageNumbrers.push(i)   
     }
     return(
         <nav className={s.paginadoContainer}>
             <ul className ={s.ul}>
                {
                 pageNumbrers.map(number =>(
                     <li key={number}>
                         <a className ={s.numeroPaginado} onClick={()=>paginado(number)}> {number} </a>  
                     </li> 
                 ))}
             </ul>
         </nav>
     )
 


};
