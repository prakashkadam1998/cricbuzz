import React from 'react'
import Photos from './Photos'
import Schedule from './Schedule'
import LatestNews from './LatestNews'

export default function MidLeft() {
  return (
    <div className='col-xl-3'>
        <LatestNews/>
        <Photos/>
        <Schedule/>
    </div>
  )
}
