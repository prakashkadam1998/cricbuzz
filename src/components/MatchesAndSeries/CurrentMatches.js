import React from 'react'
import Videos from '../Home/Videos'
import LatestNews from '../Home/LatestNews'
export default function CurrentMatches() {
  return (
    <div>

      {/* Combine this Component later to other compontent e.g series.js compontnt */}
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
          <h2 className='ps-4'>Live Cricket Score</h2>
          <nav>
            <a className='ps-4 nav-text fs-5' href=''>Live</a>
            <a className='ps-4 nav-text fs-5 ' href=''>Recent</a>
            <a className='ps-4 nav-text fs-5' href=''>Upcoming</a>
          </nav><hr></hr>
        </div>


        <div className='row'>
          <div className='ms-4 col-xl-8'>
            <nav className='ps-2' > <a href='' class="badge rounded-pill  text-bg-success text-decoration-none">Domestic</a></nav>
            <div className='mt-3 '>
              <h6 className='bg-grey'><a className='text-decoration-none text-black ps-2' href=''>ACC MENS PREMIER CUP 2023</a></h6>
              <div>
                <div>
                  <div className='ms-2'>
                    <a href='' class="text-decoration-none text-black fw-bold">United Arab Emirates vs Nepal, </a> <span className='nav-text'>&nbsp;Final</span>
                    <div>
                      <span>Today</span>
                      <span>&nbsp;•&nbsp;</span>
                      <span>8:45 AM</span>
                      <span class="nav-text"> at Kirtipur, Tribhuvan University International Cricket Ground</span>
                    </div>

                    <div className='row mb-5 ms-1 '>
                      <a className='text-decoration-none col-xl-3 border-start border-danger' href=''>
                        <div className='row  '>
                          <div className='ms-1 col-xl-9 bg-light'>
                            <div className='col text-black'>UAE60-5 (16 Ovs)</div>
                            <div className='col text-grey'>NEP</div>
                            <div className='col text-danger'>Rains Stops Play</div>
                          </div>
                          <div className='col bg-light text-center'>&gt;</div>
                        </div>
                      </a>
                    </div>


                    <nav className='mb-4'>
                      <a href='' className='ps-2'>Live Score</a>
                      <a href='' className='ps-2'>Scorecard</a>
                      <a href='' className='ps-2'>Full Commentary</a>
                      <a href='' className='ps-2'>News</a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='col-xl-3 border-start'>
            <div className=' '><Videos /></div>
            <div className=''><LatestNews /></div>
          </div>

        </div>
      </div>
    </div>
  )
}
