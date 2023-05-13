import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './watch.scss'
function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>
        <video progress src='https://player.vimeo.com/external/483871374.sd.mp4?s=aba7e1ce458f024050a8e4ff5cdcd2180c56827f&profile_id=164&oauth2_token_id=57447761' autoPlay controls   className='video'></video>
    </div>
  )
}

export default Watch