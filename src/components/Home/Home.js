import React from 'react'

import './Home.css';
import HomeMatches from './HomeMatches';
import Navbar3 from './Navbar3';
import Mid from './Mid';
export default function Home() {
  return (
    <div className='home-background '>
       
        <HomeMatches/>
        <Navbar3/>
        <Mid/>
        
    </div>
  )
}
