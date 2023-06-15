import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LatestNewsImg from './LatestNewsImg'
export default function Profile() {

    var apiPath = 'http://localhost:7070/profile/get/1';

    const [profile, setProfile] = useState({});
    const [playerStats, setStats] = useState({});


    useEffect(() => {
        axios.get(apiPath).then(res => {
            setProfile(res.data);
            setStats(res.data.playerStats);
            console.log(res.data);

        })
    }, []);

    return (
        <div className=''>
            <div className='d-flex align-items-end ms-1'>
                <img src='https://www.cricbuzz.com/a/img/v1/152x152/i1/c244975/kl-rahul.jpg'></img>
                <div className='m-2'>
                    <h2>KL Rahul</h2>
                    <span>India</span>
                </div>
            </div>
            <div className='row'>
                <div className='col-xl-4 bg-grey m-2'>
                    <div className='fw-bold'>Personal Information</div>
                    <div>
                        <div className='row'>
                            <div className='col-xl-4 fw-bold'>Born</div>
                            <div className='col-xl-8'>{profile.birthDate} (... years)</div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-4 fw-bold'>Birth Place</div>
                            <div className='col-xl-8'>{profile.birthPlace}</div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-4 fw-bold'>Height</div>
                            <div className='col-xl-8'>{profile.height}</div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-4 fw-bold'>Role</div>
                            <div className='col-xl-8'>{profile.role}</div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-4 fw-bold'>Batting Style</div>
                            <div className='col-xl-8'>{profile.battingStyle}</div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-4 fw-bold'>Bowling Style</div>
                            <div className='col-xl-8'>{profile.bowlingStyle}</div>
                        </div>
                    </div>


                    <div className='my-3'>
                        <div className='fw-bold my-3'>ICC Rankings</div>
                        <div className='row'>
                            <div className='col-xl-3'></div>
                            <div className='col-xl-3'>Test</div>
                            <div className='col-xl-3'>ODI</div>
                            <div className='col-xl-3'>T20</div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-3'>Batting</div>
                            <div className='col-xl-3'>--</div>
                            <div className='col-xl-3'>--</div>
                            <div className='col-xl-3'>--</div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-3'>Bowling</div>
                            <div className='col-xl-3'>--</div>
                            <div className='col-xl-3'>--</div>
                            <div className='col-xl-3'>--</div>
                        </div>
                    </div>

                    <div className='my-3'>
                        <div className='fw-bold my-3'>Career Information</div>
                        <div className='row'>
                            <div className='col-xl-3'>Teams</div>
                            <div className='col-xl-8'>India, Karnataka, East Zone, South Zone, Royal Challengers Bangalore, India A, Sunrisers Hyderabad, Indians, Hubli Tigers, Indian Board Presidents XI, Bellary Tuskers, Punjab Kings, Asia XI, Lucknow Super Giants</div>


                        </div>


                    </div>

                </div>
                <div className='col-xl-7'>
                    <div className='fw-bold my-2'>Batting Career Summary</div>

                    <div>
                        <table>
                            <thead className='bg-grey'>
                                <tr>
                                    <th></th>
                                    <th>M</th>
                                    <th>INN</th>
                                    <th>NO</th>
                                    <th>Runs</th>
                                    <th>HS</th>
                                    <th>Avg</th>
                                    <th>BF</th>
                                    <th>SR</th>
                                    <th>100</th>
                                    <th>200</th>
                                    <th>50</th>
                                    <th>4s</th>
                                    <th>6s</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Test</th>

                                    <td>{playerStats.matches}</td>
                                    <td>{playerStats.NO}</td>
                                    <td>{playerStats.NO}</td>
                                    <td>{playerStats.batRuns}</td>
                                    <td>{playerStats.highestScore}</td>
                                    <td>{playerStats.batAverage}</td>
                                    <td>{playerStats.bestFigure}</td>
                                    <td>{playerStats.batSR}</td>
                                    <td>{playerStats.century}</td>
                                    <td>{playerStats.doubleCentury}</td>
                                    <td>{playerStats.fifty}</td>
                                    <td>{playerStats.bounderies}</td>
                                    <td>{playerStats.sixes}</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className='my-4'>
                        <div className='fw-bold my-2'>Bowling Career Summary</div>
                        <table>
                            <thead className='bg-grey'>
                                <tr>
                                    <th></th>
                                    <th>M</th>
                                    <th>Inn</th>
                                    <th>B</th>
                                    <th>Runs</th>
                                    <th>Wkts</th>
                                    <th>BBI</th>
                                    <th>BBM</th>
                                    <th>Econ</th>
                                    <th>Avg</th>
                                    <th>SR</th>
                                    <th>5W</th>
                                    <th>10W</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Test</th>
                                    <td>{playerStats.matches}</td>
                                    <td>{playerStats.bowlInnings}</td>
                                    <td>{playerStats.balls}</td>
                                    <td>{playerStats.bowlRuns}</td>
                                    <td>{playerStats.wickets}</td>
                                    <td>{playerStats.BBI}</td>
                                    <td>{playerStats.BBM}</td>
                                    <td>{playerStats.economy}</td>
                                    <td>{playerStats.bowlAverage}</td>
                                    <td>{playerStats.bowlSR}</td>
                                    <td>{playerStats.wicket5}</td>
                                    <td>{playerStats.wicket10}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className='fw-bold'>Career Information</div>
                    <div className='row'>
                        <div className='col-xl-3 fw-bold my-1'>Test debut</div>
                        <div className='col-xl-9'><a className='text-decoration-none'>vs Australia at Melbourne Cricket Ground, Dec 26, 2014</a></div>

                        <div className='col-xl-3 fw-bold my-1'>Last Test</div>
                        <div className='col-xl-9'><a className='text-decoration-none'>vs Australia at Melbourne Cricket Ground, Dec 26, 2014</a></div>


                        <div className='col-xl-3 fw-bold my-1'>ODI debut</div>
                        <div className='col-xl-9'><a className='text-decoration-none'>vs Australia at Melbourne Cricket Ground, Dec 26, 2014</a></div>

                        <div className='col-xl-3 fw-bold my-1'>Last ODI</div>
                        <div className='col-xl-9'><a className='text-decoration-none'>vs Australia at Melbourne Cricket Ground, Dec 26, 2014</a></div>

                        <div className='col-xl-3 fw-bold my-1'>T20 debut</div>
                        <div className='col-xl-9'><a className='text-decoration-none'>vs Australia at Melbourne Cricket Ground, Dec 26, 2014</a></div>

                        <div className='col-xl-3 fw-bold my-1' >Last T20</div>
                        <div className='col-xl-9'><a className='text-decoration-none'>vs Australia at Melbourne Cricket Ground, Dec 26, 2014</a></div>

                        <div className='col-xl-3 fw-bold my-1'>IPL debut</div>
                        <div className='col-xl-9'><a className='text-decoration-none'>vs Australia at Melbourne Cricket Ground, Dec 26, 2014</a></div>

                        <div className='col-xl-3 fw-bold my-1'>Last IPL</div>
                        <div className='col-xl-9'><a className='text-decoration-none'>vs Australia at Melbourne Cricket Ground, Dec 26, 2014</a></div>

                    </div>
                    <div className='fw-bold my-3'>Related Articles</div>
                    <div className='row my-3'>
                        <div className='col-xl-6'><LatestNewsImg /></div>
                        <div className='col-xl-6'> <LatestNewsImg /></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
