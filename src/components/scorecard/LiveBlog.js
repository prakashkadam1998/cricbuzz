import React from 'react'
import LatestNewsImg from '../General/LatestNewsImg'

export default function LiveBlog() {
  return (
    <div>
      <div className='row '>
        <div className='col-xl-8 mx-4 border-end'>
          <article>
            <section>
              <div class="d-inline ms-4 p-2 text-white rounded-1 facebook-bg"><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook " viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg><span>Share</span></a></div>
              <div class="d-inline ms-4 p-2 text-white rounded-1 twitter-bg"><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter " viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg><span>Tweet</span></a></div>
            </section>
            <section className='py-4 '>
              <section >
                <img  className='rounded ' src='https://www.cricbuzz.com/a/img/v1/595x396/i1/c307761/gt-are-the-team-to-beat-at-the.jpg'></img>
                <div >GT are the team to beat at the moment © BCCI/IPL</div>
              </section>
            </section>
            <section className='py-2'><i>Welcome to Match 44 of IPL 2023 between Hardik Pandya's Gujarat Titans and David Warner's Delhi Capitals in Ahmedabad. Refresh the page for live updates.</i></section>
            <section className='py-2'><b>DC surprise GT at home</b></section>
            <section className='py-2'><p>Anyone still doubting Warner's call to bat first? Totals have proven difficult to chase lately and GT saw yet another example of it tonight. Having stalled against the spinners in the middle overs, Hardik Pandya's 44-ball fifty and Tewatia three sixes off Nortje in the 19th over weren't quite enough for the hosts on the night.</p></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
          </article>
        </div> 
        <div className='col-xl-3'>
                    <h3 className='text-start'>LATEST NEWS</h3>
                    <div><LatestNewsImg /></div>
                </div>
      </div>
    </div>
  )
}
