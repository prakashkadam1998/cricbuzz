import React from 'react'
import LatestNewsImg from '../General/LatestNewsImg'

export default function MatchFacts() {
    return (
        <div><div className='row'>
            <div className='col-xl-8 ms-4 '>

                <div className='dark-bg text-white p-1'>MATCH INFO</div>
                <div className='d-flex py-1'>
                    <div className='fw-bold'>Match:</div>
                    <div className='ms-3'>GT v DC, Indian Premier League 2023</div>
                </div>
                <div className='d-flex py-1'>
                    <div className='fw-bold'>Date:</div>
                    <div className='ms-3'>May 2, 2023</div>
                </div>
                <div className='d-flex py-1'>
                    <div className='fw-bold'>Toss:</div>
                    <div className='ms-3'>Delhi Capitals (Batting)</div>
                </div>
                <div className='d-flex py-1'>
                    <div className='fw-bold'>Time:</div>
                    <div className='ms-3'>7:30 PM GMT</div>
                </div>
                <div className='d-flex py-1'>
                    <div className='fw-bold'>Venue:</div>
                    <div className='ms-3'>Narendra Modi Stadium, Ahmedabad</div>
                </div>

            </div>
            <div className='col-xl-3'>
                    <h3 className='text-start'>LATEST NEWS</h3>
                    <div><LatestNewsImg /></div>
                </div>
        </div>
        </div>
    )
}
