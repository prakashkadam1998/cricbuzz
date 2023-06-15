import React from 'react'

export default function Photos() {
  return (
    <div className=' pt-2'>
    <div className=' bg-white ps-3'>
      <h3 className='text-success ps-3 pt-3'>LATEST PHOTOS</h3>
      <div className='px-3'>
        <a className='nws-ancr' href=''>
          <img src='https://www.cricbuzz.com/a/img/v1/165x95/i1/c299959/match-35-gt-vs-mi-ipl-2023.jpg'></img>
          <div >Match 35: GT vs MI, IPL 2023</div>
          <span className='nws-time'>Tue, Apr 25 2023</span>
        </a>
      </div>
    </div>
    </div>
  )
}
