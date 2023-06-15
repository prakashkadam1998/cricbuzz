import React from 'react'

export default function MatchesByDay() {
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


      <div>
        <div>
          <h2 className='ps-4'>Cricket Schedule</h2>
        </div>
        <div>
          <div className='ms-2'>
            <nav className='ps-2 mb-3' >
              <a href='' class="badge rounded-pill text-bg-success text-decoration-none">International</a>
              <a href='' class="badge rounded-pill text-bg-success text-decoration-none ms-3">Domestic & Others</a>
              <a href='' class="badge rounded-pill text-bg-success text-decoration-none ms-3">T20 Leagues</a>
              <a href='' class="badge rounded-pill text-bg-success text-decoration-none ms-3">Women</a>
              <a href='' class="badge rounded-pill text-bg-success text-decoration-none ms-3">All Matches</a>
            </nav>
          </div>
        </div>
      </div>

      <div className='mx-3'>
        <div>
          <div className='fw-bold bg-grey'>WED, MAY 03 2023</div>
          <div className='row py-3'>
            <div className='col-xl-4 fw-bold'>New Zealand tour of Pakistan, 2023</div>

            <div className='col-xl-7 '>
              <div className=' row'>
                <div className='col-xl-6'>
                  <a>Pakistan vs New Zealand, 3rd ODI</a>
                  <div className='text-grey '>National Stadium, Karachi</div>
                </div>
                <div className='col-xl-6'>
                  <div>4:00 PM</div>
                  <div>10:30 AM GMT / 03:30 PM LOCAL</div>
                </div>
              </div>

              <hr></hr>

              <div className=' row'>
                <div className='col-xl-6'>
                  <a>Gibraltar vs Portugal, 1st Match</a>
                  <div className='text-grey'>Europa Sports Complex, Gibraltar</div>
                </div>
                <div className='col-xl-6'>
                  <div>6:00 PM</div>
                  <div>10:30 AM GMT / 03:30 PM LOCAL</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
