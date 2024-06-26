import React from 'react'
import './Intro.css'

const Intro = ({images}) => {
  return (
    <>
    {images.map((item) => (
      
        <div className="" key={item.id}>
          <strong className='strong'>{item.text}</strong>
          <p className='para'>{item.text2}</p>
        </div>
    ))}
    </>
  )
}

export default Intro