import React from 'react'
import spinner from '../../assets/img/spin.png'

function Loder() {
  return (
    <div style={{width:"100px"}}>
       <img src={spinner} alt=""  className='rotate w-100' height={100}/>
    </div>
  )
}

export default Loder
