import React from 'react'
import './Aboutus.css'
import Footer from '../Footer/Footer'
import  Cards  from '../Cards/cards.jsx'
import CardData from '../Cards/CardData.js'
const Aboutus = () => {
  return (
    <div>
      <div className='About'>
        ABOUT
      </div>
      <div className="subhead">
      <p className='p-subhead'>Your Premier Partner in Elevating</p> <p className='p-subhead'>Engineering Education and Industrial Training</p>
      </div>
      <div className='about-body'>
        <Cards data={CardData}/>
      </div>
      <div className='history-card'>
      <div className='historybody'>
      <div className='flex pt-12 outer-box '>
      <div className='Left'>
        <p className='Left-1 font-light'>Collective Commitment to Excellence</p>
        <p className='Left-3'>Under the collective guidance of Gagan Kohli, Ashish Kohli, and Granth Kohli, Associated Scientific Corporation continues to uphold the principles of &quot; Quality for Knowledge. &quot; Their collaborative efforts have further solidified the company's position as a pioneer in the Indian education equipment industry. Together, they steer the company towards new horizons, ensuring that the legacy initiated by Late Shri Gurucharan Das Kohli Ji not only endures but flourishes.</p>
      </div>
      <div className='Right Left'>
        <p className='Left-1 font-light font-join'>Join the Journey</p>
        <p className='Left-3'>As we navigate the ever-evolving landscape of education, we invite you to join us in this journey of excellence. Associated Scientific Corporation, under the visionary leadership of Gagan Kohli, Ashish Kohli, and Granth Kohli, remains committed to shaping the future of education, where quality, innovation, and legacy converge to create transformative learning experiences.</p>
      </div>
    </div>
    </div>
      </div>
      <div className="Foot">
      <Footer/>
      </div>
    </div>
  )
}

export default Aboutus