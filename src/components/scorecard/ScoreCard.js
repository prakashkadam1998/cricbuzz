import React from 'react'

import LatestNewsImg from '../General/LatestNewsImg'
export default function ScoreCard() {
  return (
    <React.Fragment>
      <div className='row'>
        <div className=' col-xl-8 border-end'>
       
          <div className='ps-3'>Delhi Capitals won by 7 runs</div>
          <div id='innings_1'>
            <div >
              <div className='grey-dark-bg text-white p-2'>Delhi Capitals Innings</div>
              <div className='row  sub-header mx-0'>
                <div className='col-xl-3 ps-3 '>Batter</div>
                <div className='col-xl-4'></div>
                <div className='col-xl-1'>R</div>
                <div className='col-xl-1'>B</div>
                <div className='col-xl-1'>4s</div>
                <div className='col-xl-1'>6s</div>
                <div className='col-xl-1'>SR</div>
              </div>
              <div className='row mx-0'>
                <div className='col-xl-3 '>Warner (c)</div>
                <div className='col-xl-4'>c Harry Brook b Washington Sundar</div>
                <div className='col-xl-1'>21</div>
                <div className='col-xl-1'>20</div>
                <div className='col-xl-1'>2</div>
                <div className='col-xl-1'>1</div>
                <div className='col-xl-1'>105.4</div>
              </div>
              <div className='row mx-0'>
                <div className='col-xl-3'>Salt (wk)</div>
                <div className='col-xl-4'>c Klaasen b Bhuvneshwar</div>
                <div className='col-xl-1'>34</div>
                <div className='col-xl-1'>27</div>
                <div className='col-xl-1'>2</div>
                <div className='col-xl-1'>0</div>
                <div className='col-xl-1'>125.4</div>
              </div>
              <div className='sub-header ps-2'>Fall of Wickets</div>
              <div className='px-2'>
                <span>1-1 (Salt, 0.3),</span>
                <span> 39-2 (Mitchell Marsh, 4.4),</span>
                <span> 57-3 (Warner, 7.2),</span>
                <span> 58-4 (Sarfaraz Khan, 7.4),</span>
                <span> 62-5 (Aman Hakim Khan, 7.6) </span>
              </div>

            </div>
          </div>


          <div >
            <div>
              <div className='row sub-header mx-0'>
                <div className='col-xl-5 '>Bowler</div>
                <div className='col-xl-1'>O</div>
                <div className='col-xl-1'>M</div>
                <div className='col-xl-1'>R</div>
                <div className='col-xl-1'>W</div>
                <div className='col-xl-1'>NB</div>
                <div className='col-xl-1'>WD</div>
                <div className='col-xl-1'>ECO</div>
              </div>
              <div className='row mx-0 '>
                <div className='col-xl-5 '>Bhuvneshwar</div>
                <div className='col-xl-1'>4</div>
                <div className='col-xl-1'>0</div>
                <div className='col-xl-1'>11</div>
                <div className='col-xl-1'>2</div>
                <div className='col-xl-1'>0</div>
                <div className='col-xl-1'>0</div>
                <div className='col-xl-1'>3.45</div>
              </div>
              <div className='row mx-0'>
                <div className='col-xl-5 '>Marco Jansen</div>
                <div className='col-xl-1'>3</div>
                <div className='col-xl-1'>0</div>
                <div className='col-xl-1'>23</div>
                <div className='col-xl-1'>0</div>
                <div className='col-xl-1'>0</div>
                <div className='col-xl-1'>0</div>
                <div className='col-xl-1'>7.7</div>
              </div>



            </div>
            <div >
              <div className='row sub-header mx-0'>
                <div className='col-xl-4'>Powerplays</div>
                <div className='col-xl-4 text-center'>Overs</div>
                <div className='col-xl-4 text-end'>Runs</div>
              </div>
              <div className='row mx-0'>
                <div className='col-xl-4'>Mandatory</div>
                <div className='col-xl-4 text-center'>0.1-6</div>
                <div className='col-xl-4 text-end'>34</div>
              </div>
            </div>


            <div>
              <div className='grey-dark-bg text-white ps-2'>Match Info</div>
              <div>
                <div className='row mx-0'>
                  <div className='col-xl-4'>Match</div>
                  <div className='col-xl-7'>SRH vs DC, 34th Match, Indian Premier League 2023</div>
                </div>

                <div className='row mx-0'>
                  <div className='col-xl-4'>Date</div>
                  <div className='col-xl-7'>Monday, April 24, 2023</div>
                </div>

                <div className='row mx-0'>
                  <div className='col-xl-4'>Toss</div>
                  <div className='col-xl-7'>Delhi Capitals won the toss and opt to bat</div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className='col-xl-4'>
                    <h3 className='text-start'>LATEST NEWS</h3>
                    <div><LatestNewsImg /></div>
                </div>
      </div>
    </React.Fragment>
  )
}
