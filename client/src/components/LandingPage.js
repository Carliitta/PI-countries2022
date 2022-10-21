import React from 'react';
import  { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import s from './LandingPage.module.css'


export default  function LandingPage() {

   return (
    <div className={s.container}>
    <div className={s.world}>
        <h1 >Countries</h1> 
        <Link to ='/home'>
        <button className={s.btnHome}>Home</button>
        </Link>
      </div>

    </div>
   )
 }

