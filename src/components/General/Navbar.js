import React from 'react';
import cb_logo from '../../Images/cb_logo.svg';
import search_logo from '../../Images/search2.svg';
export default function Navbar() {
  return (
    <div >
      <nav class="  navbar navbar-expand-lg bg-body-tertiary navbar-color" >
        <div class="container-fluid navbar-color " >
          <a class="navbar-brand" href="/">
            <img src={cb_logo} alt="Logo" width="90" height="34" class="d-inline-block align-text-top" />
          </a>
          <div class="collapse navbar-collapse  " id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">  {/* style="--bs-scroll-height: 100px;"*/}
              <li class="nav-item " >
                <a class="nav-link active text-white" aria-current="page" href="/cricket-match/live-scores" >Live Scores</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="/cricket-schedule/upcoming-series" >Schedule</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white" href="/cricket-scorecard-archives">Archives</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  News
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item " href="cricket-news">All Stories</a></li>
                  <li><a class="dropdown-item" href="#">Cricbuzz Plus</a></li>
                  <li><a class="dropdown-item" href="#">Latest News</a></li>
                  <li><a class="dropdown-item" href="#">Topics</a></li>
                  <li><a class="dropdown-item" href="#">Spotlight</a></li>
                  <li><a class="dropdown-item" href="#">Opinions</a></li>
                  <li><a class="dropdown-item" href="#">Specials</a></li>
                  <li><a class="dropdown-item" href="#">Stats & Analysis</a></li>
                  <li><a class="dropdown-item" href="#">Interviews</a></li>
                  <li><a class="dropdown-item" href="#">Live Blogs</a></li>
                  <li><a class="dropdown-item" href="#">Harsha Bhogle</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Series
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Indian Premier League 2023</a></li>
                  <li><a class="dropdown-item" href="#">New Zealand tour of Pakistan, 2023</a></li>
                  <li><a class="dropdown-item" href="#">Ireland tour of Sri Lanka, 2023</a></li>
                  <li><a class="dropdown-item" href="#">ACC Mens Premier Cup 2023</a></li>
                  <li><a class="dropdown-item" href="#">County Championship Division One 2023</a></li>
                  <li><a class="dropdown-item" href="#">County Championship Division Two 2023</a></li>
                  <li><a class="dropdown-item" href="#">Bangladesh Women tour of Sri Lanka, 2023</a></li>
                  <li><a class="" href="/cricket-schedule/series">All Series</a></li>
                </ul>
              </li><li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Teams
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">India</a></li>
                  <li><a class="dropdown-item" href="#">Afganistan</a></li>
                  <li><a class="dropdown-item" href="/cricket-team">more</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Videos
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">All Videos</a></li>
                  <li><a class="dropdown-item" href="#">Categories</a></li>
                  <li><a class="dropdown-item" href="#">Playlists</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Rankings
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">ICC Rankings - Men</a></li>
                  <li><a class="dropdown-item" href="#">ICC Rankings - Women</a></li>
                 
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">World Test Championship</a></li>
                  <li><a class="dropdown-item" href="#">World Cup Super League</a></li>
                  <li><a class="dropdown-item" href="#">Photos</a></li>
                  <li><a class="dropdown-item" href="#">Mobile Apps</a></li>
                  <li><a class="dropdown-item" href="#">Careers</a></li>
                  <li><a class="dropdown-item" href="#">Contact Us</a></li>
                </ul>
              </li>
              <button type="button" class="btn btn-light rounded-pill">Cricbuzz Plus</button>
            </ul>
            <a class="navbar-brand" href="#">
              <img src={search_logo} alt="Logo" width="90" height="24" class="d-inline-block align-text-top" />
            </a>
            <a class="navbar-brand" href="premium-subscription/user/login" a>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
