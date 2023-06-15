import React from 'react'
import MidLeft from './MidLeft'
import MidRight from './MidRight'
import MidCenter from './MidCenter'

export default function Mid() {
  return (
    <div className='row'>
       <MidLeft/>
       <MidCenter/>
       <MidRight/>
    </div>
  )
}
