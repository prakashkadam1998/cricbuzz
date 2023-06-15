import React from 'react'

export default function AllStories() {
  return (
    <><div className='row px-3'>
    <div className='col-xl-9'>

        <h3>Cricket News and Editorials</h3>
        <div className='d-flex flex-row mb-3'>
            <div className=''>
                <img className='rounded-1' src='https://www.cricbuzz.com/a/img/v1/205x152/i1/c307101/with-12-points-already-in-thei.jpg'></img>
            </div>
            <div className='ms-2'>
                <div>PREVIEWS
                    <span>&nbsp;•&nbsp;</span> IPL 2023
                </div>
                <h2>
                    <a className='links fs-6'>Buoyant Titans outright favourites for fourth straight win</a>
                </h2>
                <div>With 12 points already in their kitty, Gujarat Titans start as favourites against bottom-placed Delhi Capitals</div>
                <div className='nws-time'>2h ago</div>
            </div><hr className='mt-2'></hr>
        </div>
    </div>
    <div className='col-xl-3 border-start'>LATEST PHOTOS</div>
</div></>
  )
}
