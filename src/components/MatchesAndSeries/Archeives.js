import React from 'react'

export default function Archeives() {
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



      <div className='row'>
        <div className='col-xl-8'>
          <div >
            <h1>Cricket Match Archives</h1>
            <h1>2023</h1>
          </div>


          <div className='row '>
            <div className='col-xl-3'>International</div>
            <div className='col-xl-9'>
              <div>
                <a href='' className='links'>Ireland tour of Sri Lanka, 2023</a>
                &nbsp;<span className='text-grey'>Apr 16 - Apr 28</span>
              </div><hr></hr>
              <div>
                <a className='links'>New Zealand tour of Pakistan</a>
                &nbsp;<span className='text-grey'>Apr 10 - Apr 11</span>
              </div><hr></hr>
              <div>
                <a className='links'>Gibraltar tour of Portugal, 2023</a>
                &nbsp;<span className='text-grey'>Mar 21 - Mar 25</span>
              </div><hr></hr>
            </div>
          </div>
        </div>
        <div className='col-xl-3 border-start'>
          <h6>ALL SEASONS</h6>
          <hr></hr>
          <div>
            <div>2021-2023</div>
            <div className='mt-2'> 
            <a className='bg-grey text-decoration-none text-black p-1'>2021</a>
            <a className='bg-grey ms-3 text-decoration-none text-black p-1'>2022</a>
            <a className='bg-grey ms-3 text-decoration-none text-black p-1'>2033</a>
            </div>
          </div>

          <div className='mt-3'>
            <div>2011-2020</div>
            <div className='mt-2'> 
            <a className='bg-grey text-decoration-none text-black p-1'>2011</a>
            <a className='bg-grey ms-3 text-decoration-none text-black p-1'>2012</a>
            <a className='bg-grey ms-3 text-decoration-none text-black p-1'>2033</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
