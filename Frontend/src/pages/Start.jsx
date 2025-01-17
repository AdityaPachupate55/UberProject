import React from 'react'
import {Link} from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className=' bg-cover bg-center bg-[url(https://i.pinimg.com/736x/0e/6b/3f/0e6b3f7425a433550a422911a80bb54d.jpg)] h-screen w-full flex justify-between flex-col pt-8 bg-red-400' >
        
        <img src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' className='w-16 ml-8'></img>

        <div className='bg-white pb-7 py-4 px-4 ' >
          <h2 className='text-3xl font-bold' >Getting started</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>

      </div>
    </div>
  )
}

export default Start