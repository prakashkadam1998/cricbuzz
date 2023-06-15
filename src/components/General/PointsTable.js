import React from 'react'
import LatestNewsImg from './LatestNewsImg'

export default function PointsTable() {
    return (
        <div className='row'>
            <div className='col-xl-8'>
                <div className='mx-2'>
                    <h4 className='mx-2'    >IPL 2023 - Points Table</h4>
                    <table className='w-100'>
                        <thead className=' sub-header'>
                            <th>Teams</th>
                            <th>Mat</th>
                            <th>Won</th>
                            <th>Lost</th>
                            <th>Tied</th>
                            <th>NR</th>
                            <th>Pts</th>
                            <th>NRR</th>
                            <th></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Chennai Super Kings</td>
                                <td>7</td>
                                <td>5</td>
                                <td>2</td>
                                <td>0</td>
                                <td>10</td>
                                <td>+0.677</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>Gujarat Titans</td>
                                <td>7</td>
                                <td>4</td>
                                <td>2</td>
                                <td>0</td>
                                <td>10</td>
                                <td>+0.677</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='col-xl-4'>
                    <h3 className='text-start'>LATEST NEWS</h3>
                    <div><LatestNewsImg /></div>
                </div>
        </div>
    )
}
