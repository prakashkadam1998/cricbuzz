import React from 'react'

export default function LatestNews() {
  return (
    <div className=' pt-2 py-3'>
      <div className='bg-white ps-3'>
        <h3 className='text-success ps-3 pt-3'>LATEST NEWS</h3>
        <div className='px-3'>
          <div className='pt-2 '>
            <a className='nws-ancr' href=''>Pant's recovery period set to extend well beyond World Cup 2023</a>
            <div className='nws-time'>16h ago</div>
          </div><hr></hr>
          <div className='pt-2'>
            <a className='nws-ancr'>Ajinkya Rahane returns to Test squad for WTC Final</a>
            <div className='nws-time'>6h ago</div>
          </div><hr></hr>
          <div className='pt-2'>
            <a className='nws-ancr'>Didn't even realise what was going on - Axar on DC mini-collapse</a>
            <div className='nws-time'>2 days ago</div>
          </div><hr></hr>
          <div className='pt-2'>
            <a className='nws-ancr'>SCG unveils Lara-Tendulkar Gates to mark Sachin's 50th birthday</a>
            <div className='nws-time'>16h ago</div>
          </div>
        </div>
      </div>
    </div>
  )
}
