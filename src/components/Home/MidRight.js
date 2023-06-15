import React from 'react'
import Videos from './Videos'
import Specials from './Specials'

export default function MidRight() {
  return (
    <div className='col-xl-3'>
        <Videos/>
        <Specials/>
    </div>
  )
}
