import React from 'react'
import Videos from '../Home/Videos'

export default function Commentary() {
    return (
        <div>
            <div className='row'>
                <div className='col-xl-8 mx-3'>
                    <h3>LSG 77/5 (15.5)</h3> <span> CRR: 4.86</span>
                    <div>Chennai Super Kings opt to bowl</div>

                    <div className='row '>
                        <div className='col-xl-8 '>
                            <div className='row  sub-header mx-0'>
                                <div className='col-xl-6 ps-3 '>Batter</div>
                                <div className='col-xl-1'>R</div>
                                <div className='col-xl-1'>B</div>
                                <div className='col-xl-1'>4s</div>
                                <div className='col-xl-1'>6s</div>
                                <div className='col-xl-2'>SR</div>
                            </div>
                            <div className='row mx-0'>
                                <div className='col-xl-6 '><a className='text-decoration-none' href='/profiles/8733/rahul'>KL Rahul(C)</a></div>

                                <div className='col-xl-1'>21</div>
                                <div className='col-xl-1'>20</div>
                                <div className='col-xl-1'>2</div>
                                <div className='col-xl-1'>1</div>
                                <div className='col-xl-2'>105.4</div>
                            </div>

                            <div className='row mx-0'>
                                <div className='col-xl-6 '>Salt(Wk)</div>

                                <div className='col-xl-1'>21</div>
                                <div className='col-xl-1'>20</div>
                                <div className='col-xl-1'>2</div>
                                <div className='col-xl-1'>1</div>
                                <div className='col-xl-2'>105.4</div>
                            </div>

                            <div className='row  sub-header mt-3 mx-0'>
                                <div className='col-xl-6 ps-3 '>Bowler</div>
                                <div className='col-xl-1'>O</div>
                                <div className='col-xl-1'>M</div>
                                <div className='col-xl-1'>R</div>
                                <div className='col-xl-1'>W</div>
                                <div className='col-xl-2'>ECO</div>
                            </div>

                            <div className='row mx-0'>
                                <div className='col-xl-6 '>Pathirana</div>

                                <div className='col-xl-1'>3.2</div>
                                <div className='col-xl-1'>0</div>
                                <div className='col-xl-1'>23</div>
                                <div className='col-xl-1'>2</div>
                                <div className='col-xl-2'>5.4</div>
                            </div>



                        </div>
                        <div className='col-xl-4'>
                            <div className='text-grey border '>
                                <div className='bg-grey '><span className=' container'>Key Stats</span></div>
                                <div className=' container'><span className='fw-bold '>Partnership:&nbsp;</span><span>2(2)</span></div>
                                <div className=' container'><span className='fw-bold'>Last wkt:&nbsp;</span><span>Krishnappa Gowtham c Rahane b Pathirana 1(3) - 125/7 in 19.2 ov.</span></div>
                                <div className=' container'><span className='fw-bold'>Last 5 overs:&nbsp;</span><span> 56 runs, 2 wkts</span></div>
                                <div className=' container'><span className='fw-bold'>Toss:&nbsp;</span><span> Chennai Super Kings (Bowling)</span></div>
                            </div>
                        </div>
                        <div className='my-4 d-flex '><span className='me-auto'>Recent: 3 W 1 1 | 2 4 6 0 2 6 | 0 W</span><a>Have Your Say</a></div>

                        <hr></hr>

                        <h4>Match Videos</h4>
                        <div className='text-danger'>Component under Developement</div>
                        <div>
                            <div className='py-2'>18:44 Local Time, 13:14 GMT, 18:44 IST: The cut-off for a five-over chase is 7.28pm! The match will be called off if it doesn't resume by then!</div>
                            <div className='row'>
                                <div className='col-xl-1'>19.5</div>
                                <div className='col-xl-11'>Pathirana to Gowtham, out Caught by Rahane!! Pathirana deceives him with a slower one! Length ball around off, Gowtham is very early through the slog and skies it up. Goes high and wide of long-on, but Rahane makes it look easy. Gowtham c Rahane b Pathirana 1(3)</div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='col-xl-3'><Videos /></div>
            </div>
        </div>
    )
}
