import React from 'react'
import 'firebase/auth'

import Navbar from './Navbar/Navbar'
import Blog from './Blog/Blog'

function Dashboard() {
  return (
    <div className='flex w-full'>
      <Navbar />
      <Blog />
    </div>
  )
}

export default Dashboard
