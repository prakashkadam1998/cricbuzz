import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AllStories from './AllStories'

export default function News() {
    return (
        <div>
            <div>
                <nav id='lnk-ancr'>
                    <Link to=''>All Stories</Link>
                    <Link href=''>Cricbuzz Plus</Link>
                    <Link href=''>News</Link>
                    <Link href=''>Topics </Link>
                    <Link href=''>Spotlight</Link>
                    <Link href=''>Opinions</Link>
                    <Link href=''>Special</Link>
                    <Link href=''>Stats</Link>
                    <Link href=''>Interviews</Link>
                    <Link href=''>Live Blogs</Link>
                </nav>

            </div>
            <hr></hr>
            <div>
            <Routes>
                <Route path='' element={<AllStories />} ></Route>
                <Route path='cricket-new' element={<AllStories />} ></Route>
            </Routes>
            </div>
        </div>
    )
}
