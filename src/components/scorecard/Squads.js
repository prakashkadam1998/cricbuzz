import React from 'react'
import Videos from './../Home/Videos'
export default function Squads() {
    return (
        <div>
            <div className='row'>
                <div className='col-xl-8 border-end'>
                    <div className='aqua-light-bg  justify-content-sm-between rounded-2'>
                        <a href='' className='p-1 fw-bold text-black text-decoration-none'><img height={25} className='rounded-2' src='https://www.cricbuzz.com/a/img/v1/72x54/i1/c228727/team_flag.jpg'></img><span className='ps-2'>LSG</span></a>
                        <a href='' className='p-1 fw-bold text-black text-decoration-none'  ><span className='pe-2'>RCB</span><img height={25} className='rounded-2' src='https://www.cricbuzz.com/a/img/v1/72x54/i1/c225643/team_flag.jpg'></img></a>
                    </div>
                    <h4 className='text-center '>Playing XI</h4>
                    <div className='row'>
                        <div className='col-xl-6 border-end'>
                            <div className='ms-4'>
                                <a href='' className='d-flex justify-content-start text-decoration-none'>
                                    <img className='rounded-circle border border-light-subtle' src='https://www.cricbuzz.com/a/img/v1/40x40/i1/c244975/player_face.jpg'></img>
                                    <div className='click-links'>KL Rahul (C) <br></br>
                                        <span className=''>WK-Batter</span>
                                    </div>
                                    <div className='ms-auto'>

                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='ms-4'>
                                <a href='' className='d-flex text-decoration-none '>
                                    <div className='me-auto'>

                                    </div>
                                    <div className='click-links '>Virat Kohli <br></br>
                                        <span className=''>Batter</span>
                                    </div>
                                    <div>
                                        <img className='rounded-circle border border-light-subtle' src='https://www.cricbuzz.com/a/img/v1/40x40/i1/c244980/player_face.jpg'></img>
                                    </div>


                                </a>
                            </div>
                        </div><hr></hr>
                    </div>



                    <div className='row'>
                        <div className='col-xl-6 border-end'>
                            <div className='ms-4'>
                                <a href='' className='d-flex text-decoration-none'>
                                    <div>
                                        <img className='rounded-circle border border-light-subtle' src='https://www.cricbuzz.com/a/img/v1/40x40/i1/c244721/player_face.jpg'></img>
                                    </div>
                                    <div className='click-links'>Kyle Mayers<br></br>
                                        <span className=''>Batting Allrounder</span>
                                    </div>
                                    <div className='ms-auto'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-airplane" viewBox="0 0 16 16"><path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z" /> </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='ms-4'>
                                <a href='' className='d-flex text-decoration-none'>
                                    <div className='me-auto'>

                                    </div>
                                    <div className='click-links'>Faf Du Plessis (C) <br></br>
                                        <span className=''>Batter</span>
                                    </div>
                                    <div>
                                        <img className='rounded-circle border border-light-subtle' src='https://www.cricbuzz.com/a/img/v1/40x40/i1/c170639/player_face.jpg'></img>
                                    </div>
                                </a>
                            </div>
                        </div><hr></hr>
                    </div>
                    <h4 className='text-center '>Substitutes</h4>
                </div>
                <div className='col-xl-4'><Videos /></div>
            </div>
        </div>
    )
}
