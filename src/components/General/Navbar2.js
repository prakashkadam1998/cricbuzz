import React from 'react'

export default function Navbar2() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid navbar2-color navbar2">
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="cricket-match/live-scores">Matches</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="live-cricket-scorecard">DC vs SRH - DC Won</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-white">PAK vs NZ - NZ WON</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-white">GT vs MI- Preview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link   text-white">IRE vs SL - Stumps</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled text-white">CSK vs KKR - CSK Won</a>
        </li>

      </ul>
        <span ng-click="(direction=='up')?direction = 'down' : direction = 'up'"><a class="cb-mat-mnu-itm cb-mat-mnu-all nav-link dropdown-toggle text-white" ng-class="{true:'cb-mat-mnu-cls'}[direction=='down']" id="match-dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span ng-bind="(direction=='up') ? 'ALL': 'CLOSE'" class="ng-binding">ALL</span><span ng-class="(direction=='up') ? 'cb-caret-down' : 'cb-caret-up'" class="cb-caret-down"></span></a></span>
      
    </div>
  </div>
</nav>
</div>
  )
}
