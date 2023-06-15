import React from 'react'

function Videos() {
  return (
    <div>
      <div className=' bg-white px-5 py-2'>
        <h5>FEATURED VIDEOS</h5>
        <div className=''>
          <div className=' py-1'><span>NEW KID ON THE BLOCK</span></div>
          <a className='nws-ancr' href=''>
            <img className='rounded' src='https://www.cricbuzz.com/a/img/v1/290x164/i1/c300789/ipl-2023-bangalore-v-kolkata.jpg'>
            </img>
            <h5 >IPL 2023, बैंगलौर v कोलकाता, मैच 36: प्रिव्यू</h5 >
          </a>
          <div className='nws-time'> 18h ago</div>
        </div> <hr></hr>


        <div className=' bg-white'>
          <a className='nws-ancr' href=''>
            <img className='rounded' src='https://www.cricbuzz.com/a/img/v1/290x164/i1/c300799/believe-rcb-have-all-it-takes.jpg'>
            </img>
            <h5>RCB में मौजूद हैं टॉप 4 में शामिल होने के सारे गुण: Murali Kartik 18h ago</h5>
          </a>
          <div className='nws-time'>18h ago</div>
        </div> <hr></hr>

        <div className=' bg-white'>
          <a className='nws-ancr' href=''>
            <img className='rounded' src='https://www.cricbuzz.com/a/img/v1/290x164/i1/c299093/chandrakant-pandits-coaching.jpg'>
            </img>
            <h5>RChandrakant Pandit's coaching style might not be suiting KKR: Joy Bhattacharjya
              2d ago</h5>
          </a>
          <div className='nws-time'>18h ago</div>
        </div>


        <div className='text-center'>
          <button type="button" class="btn btn-success ">More Videos</button>
        </div>

      </div>
    </div>
  )
}

export default Videos