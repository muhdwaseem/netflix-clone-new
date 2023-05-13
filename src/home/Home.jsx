import React from 'react'
import './home.scss'
import Navbar from '../components/Navbar'
import Features from '../components/features/Features'
import List from '../components/list/List'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        {/* <img width='100%' src="https://images.unsplash.com/photo-1680442794210-18aaefe1bc11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" srcset="" /> */}
          <Features type='movie'/>
        <List/>
        <List/>
        <List/>
         </div>
  )
}

export default Home