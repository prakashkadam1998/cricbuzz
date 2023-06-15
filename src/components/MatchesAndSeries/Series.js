import React from 'react'

export default function Series() {
  return (
    <div>
      <div>
      <nav>
          <a className='ps-4 nav-text fs-5' href='/cricket-match/live-scores'>Current Matches</a>
          <a className='ps-4 nav-text fs-5 ' href='/cricket-schedule/series'>Current & Future Series</a>
          <a className='ps-4 nav-text fs-5' href='/cricket-schedule/upcoming-series/'>Matches By Day</a>
          <a className='ps-4 nav-text fs-5' href='/cricket-team'>Teams</a>
          <a className='ps-4 nav-text fs-5' href='/cricket-scorecard-archives'>Series Archive</a>

        </nav><hr></hr>
      </div>

    <div className='mx-4'>
      <div>
        <div>
          <h2 className=''>Cricket Schedule</h2>
        </div>


        <div>
          <div className=''>
            <nav className=' mb-3' >
              <a href='' class="badge rounded-pill text-bg-success text-decoration-none">International</a>
              <a href='' class="badge rounded-pill text-bg-success text-decoration-none ms-3">Domestic & Others</a>
              <a href='' class="badge rounded-pill text-bg-success text-decoration-none ms-3">T20 Leagues</a>
              <a href='' class="badge rounded-pill text-bg-success text-decoration-none ms-3">Women</a>
            </nav>
          </div>
        </div>
      </div>


      <div>
        <div className='row bg-grey p-2'>
          <div className='col-xl-3'>Month</div>
          <div className='col-xl-9'>Series Name</div>
        </div>

        <div className='row pt-2'>
          <div className='col-xl-3'>January 2023</div>
          <div className='col-xl-9 row'>
            <div className='col-xl-9 py-2'>
              <a className='text-decoration-none text-black'  href=''>SEA Games Mens Twenty20 Cricket Competition 2023</a>
              <div>May 04 - May 07</div>
            </div><hr></hr>
          </div>
        </div>  

        <div className='row'>
          <div className='col-xl-3'>April 2023</div>
          <div className='col-xl-9 row'>
            <div className='col-xl-9  py-2'>
              <a className='text-decoration-none text-black'  href=''>Gibraltar T20I Tri-Series 2023</a>
              <div>May 04 - May 07</div>
            </div><hr></hr>

            <div className='col-xl-9 py-2'>
              <a className='text-decoration-none text-black'  href=''>Ireland v Bangladesh in England, 2023</a>
              <div>May 04 - May 07</div>
            </div><hr></hr>
            <div className='col-xl-9 py-2'>
              <a className='text-decoration-none text-black' href=''>ICC World Test Championship Final 2023</a>
              <div>May 04 - May 07</div><hr></hr>
            </div>
          </div>
        </div>
        </div>
      </div>


    </div>
  )
}
