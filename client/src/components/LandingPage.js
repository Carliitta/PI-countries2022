import React from 'react';
import  { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import s from './LandingPage.module.css'


export default  function LandingPage() {

   return (
    <div className={s.container}>
    <div className={s.world}>
        <Link className={s.linkHome} to ='/home'>
        <h1 >Countries</h1> 
        </Link>
      
      </div>

    </div>
   )
 }

