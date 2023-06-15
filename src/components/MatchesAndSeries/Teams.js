import React from 'react'
import LatestNews from '../Home/LatestNews'
export default function Teams() {
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

            <hr></hr>

            <div className='row ps-3'>
                <div className='col-xl-7'>
                    <div className=' row'>
                        <div className='col-xl-6 '>
                            <img className='rounded-3' src='https://www.cricbuzz.com/a/img/v1/72x54/i1/c172115/india.jpg'></img>
                            <span className='ps-2'>India</span>
                        </div>
                        <div className='col-xl-6'>
                            <img className='rounded-3' src='https://www.cricbuzz.com/a/img/v1/72x54/i1/c172188/afghanistan.jpg'></img>
                            <span className='ps-2'>Afganistan</span>
                        </div>
                    </div>

<hr></hr>
                    <div className='mt-3 row'>
                        <div className='col-xl-6 '>
                            <img className='rounded-3' src='https://www.cricbuzz.com/a/img/v1/72x54/i1/c172141/ireland.jpg'></img>
                            <span className='ps-2'>Ireland</span>
                        </div>
                        <div className='col-xl-6'>
                            <img className='rounded-3' src='https://www.cricbuzz.com/a/img/v1/72x54/i1/c172116/pakistan.jpg'></img>
                            <span className='ps-2'>Pakistan</span>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4'><LatestNews/></div>
            </div>

        </div>
    )
}
