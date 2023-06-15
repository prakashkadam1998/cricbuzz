import React from 'react'

import ScoreCard from './ScoreCard'
import PointsTable from '../General/PointsTable'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Squads from './Squads'
import Highlights from './Highlights'
import FullCommentary from './FullCommentary'
import LiveBlog from './LiveBlog'
import MatchFacts from './MatchFacts'
import Photos from '../Home/Photos'
import Commentary from './Commentary'

export default function LiveScoreCard() {
  return (
    <div>
      <div className='ms-4'>
        <div className='pt-2'>
          <h3>Sunrisers Hyderabad vs Delhi Capitals, 34th Match - Live Cricket Score, Commentary</h3>
        </div>
        <div>
          <span>Series:</span>
          <a href=''> Indian Premier League 2023</a>
          <a href='' className='ps-5'>Venue: Rajiv Gandhi International Stadium, Hyderabad </a>
          <span className='ps-5'>Date & Time: Apr 24, 07:30 PM LOCAL</span>
        </div>
        <nav className='pt-4'>
          <Link to='' className=' text-black'>Commentary</Link>
          <Link to='srh-vs-dc-34th-match-indian-premier-league-2023' className='ps-4 text-black'>Scorecard</Link>
          <Link to='cricket-match-squads' className='ps-4 text-black text-black'>Squads</Link>
          <Link to='cricket-match-highlights' className='ps-4 text-black'>Highlights</Link>
          <Link to='live-cricket-full-commentary' className='ps-4 text-black'>Full Commentary</Link>
          <Link to='live-cricket-match-blog' className='ps-4 text-black' >Live Blog</Link>
          <Link to='cricket-series/indian-premier-league-2023/points-table' className='ps-4 text-black'>Points Table</Link>
          <Link to='cricket-match-facts' className='ps-4 text-black' >Match Facts</Link>
          <Link to='' className='ps-4 text-black'>News</Link>
          <Link to='cricket-match-photos' className='ps-4 text-black'>Photos</Link>
        </nav>
      </div>
      <div><hr></hr>

        <Routes>
          <Route path='' element={<Commentary />} />
          <Route path='srh-vs-dc-34th-match-indian-premier-league-2023' element={<ScoreCard />} />
          <Route path='cricket-series/indian-premier-league-2023/points-table' element={<PointsTable />} />
          <Route path='cricket-match-squads' element={<Squads />} />
          <Route path='cricket-match-highlights' element={<Highlights />} />
          <Route path='live-cricket-full-commentary' element={<FullCommentary />} />
          <Route path='live-cricket-match-blog' element={<LiveBlog />} />
          <Route path='cricket-match-facts' element={<MatchFacts />} />
          <Route path='cricket-match-photos' element={<Photos />} />
        </Routes>

      </div>
    </div>
  )
}
