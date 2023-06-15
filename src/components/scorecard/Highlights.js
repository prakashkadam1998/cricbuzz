import React from 'react'
import LatestNewsImg from '../General/LatestNewsImg'

export default function Highlights() {
    return (
        <div>
            <div className='row'>
                <div className='col-xl-8 '>
                    <nav>
                        <div>
                            <span className='rounded-pill bg-success p-1 text-white me-2'>RCB 1st Inns</span>
                            <span className='rounded-pill bg-light p-1 text-black me-2'>LSG 1st Inns</span>
                        </div>
                    </nav>
                    <nav className='d-flex justify-content-between bg-grey'>
                        <a href='' className='text-black text-decoration-none  '>All</a>
                        <a href='' className='text-black text-decoration-none  '>Fours</a>
                        <a href='' className='text-black text-decoration-none  '>Sixes</a>
                        <a href='' className='text-black text-decoration-none  '>Wickets</a>
                        <a href='' className='text-black text-decoration-none  '>Fifties</a>
                        <a href='' className='text-black text-decoration-none  '>Hundreds</a>
                        <a href='' className='text-black text-decoration-none  '>Dropped Catches</a>
                        <a href='' className='text-black text-decoration-none  '>UDRS</a>
                        <a href='' className='text-black text-decoration-none  '>Others</a>
                    </nav>
                    <div className='row'>
                        <div className='col-xl-1'>20</div>
                        <div className='col-xl-10'>Naveen-ul-Haq to Hasaranga, FOUR, handy boundary for RCB. Hasaranga makes room and gets under this short of length delivery, slices it over the off-side field, gets it wide of the sweeper cover</div>
                    </div>
                </div>
                <div className='col-xl-4'>
                    <h3 className='text-start'>LATEST NEWS</h3>
                    <div><LatestNewsImg /></div>
                </div>

            </div>
        </div>
    )
}
