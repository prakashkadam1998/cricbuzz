import React from 'react'

export default function FullCommentary() {
  return (
    <div>
      <nav>
        <div className=' m-4 '>
          <span className='rounded-pill bg-success p-1 text-white me-2'>Preview</span>
          <span className='rounded-pill bg-success p-1 text-white me-2'>RCB Inns</span>
          <span className='rounded-pill bg-light p-1 text-black me-2'>LSG Inns</span>
        </div>
      </nav>
      <div className='row'>

        <div className='col-xl-2 ms-4 '>

          <div className='dark-bg text-white p-1'>MATCH INFO</div>
          <div className='d-flex'>
            <div className='fw-bold'>Match</div>
            <div className='ms-3'>GT v DC, Indian Premier League 2023</div>
          </div><hr />
          <div className='d-flex'>
            <div className='fw-bold'>Date</div>
            <div className='ms-3'>May 2, 2023</div>
          </div><hr />
          <div className='d-flex'>
            <div className='fw-bold'>Toss</div>
            <div className='ms-3'>Delhi Capitals (Batting)</div>
          </div><hr />
          <div className='d-flex'>
            <div className='fw-bold'>Time</div>
            <div className='ms-3'>7:30 PM GMT</div>
          </div><hr />
          <div className='d-flex'>
            <div className='fw-bold'>Venue</div>
            <div className='ms-3'>Narendra Modi Stadium, Ahmedabad</div>
          </div>

        </div>
        <div className='col-xl-9'>LSG in good spirits in their huddle as RCB's openers walk out to the middle. Good atmosphere at Ekana tonight. Let's hope we have a cracker of a game. And no surprises - Krunal to start off. KL going with the matchups. A slip in for Krunal. The countdown is done and we are ready.</div>
      </div>
    </div>
  )
}
