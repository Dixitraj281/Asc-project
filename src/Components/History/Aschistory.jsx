import React from 'react'
import './Aschistory.css'
import ASCCARD from '../../Assets/ACS CARD.png'

const Aschistory = () => {
  return (
    <div className='historybody'>
      <div className='flex pt-12 outer-box'>
      <div className='Left'>
        <p className='Left-1 font-light'>About Associated Scientific Corporation</p>
        <p className='Left-2'>Pioneering Educational Excellence since 1963</p>
        <p className='Left-3'>Established in 1963 by the visionary Late Shri Gurucharan Das Kohli Ji, Associated Scientific Corporation stands as a trailblazer in the evolution of the Indian education equipment industry. Under the insightful guidance of Shri Gurucharan Das Kohli Ji, the company has been instrumental in shaping the educational landscape of India by introducing innovative and cutting-edge solutions to engineering colleges and industrial training institutes.</p>
        <a href="#history" className='history-link'>More About Associated Scientific Corporation &rarr;
        </a>
      </div>
      <div className='Right Right-a '>
        <p className='Right-1'>
          <img src={ASCCARD} alt="rating" className='rating-img'/>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Aschistory