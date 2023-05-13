import React, { useState } from 'react'
import './listitem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import AddIcon from '@mui/icons-material/Add';
function Listitems({index}) {
  const trailer = 'https://player.vimeo.com/progressive_redirect/playback/777013401/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=26134f72d9b059d1b70f597fe8e51d101c08482b6e0fce75e8fee6e957381578'
  const [ishoverd, setishoverd] = useState(false)

  return (
    <div className='listitems' style={{left:ishoverd && index*250-50  +index*2.5}} onMouseEnter={()=>setishoverd(true)} onMouseLeave={()=>setishoverd(false)}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTARC1yGuAtuwrEwZoYIAq4grUb7fUfnkzSVA&usqp=CAU" alt="" srcset="" />

      {ishoverd && (
        <>
        
        <video src={trailer} autoPlay={true} loop></video>
       <div className="iteminfo">
        <div className="icons">
           <PlayArrowIcon className='icon' />
            <AddIcon className='icon'/>
           <ThumbDownAltOutlinedIcon className='icon'/>
            <ThumbUpOffAltOutlinedIcon className='icon'/>

         </div>
       </div>
        <div className="iteminfotop">
          <span> 2h 49m</span>

          <span className='limit'>+14</span>
          <span>2014</span>
        </div>
        <div className="desc">
            Inventore possimus dolorem unde ex, sunt alias pariatur, quod minima tempora eius repudiandae suscipit ab fuga cupiditate cumque! Earum quibusdam excepturi vero.
        </div>
        <div className="genre">Sci-fi/Adventure</div>
        </>
      )}
      
        

        </div>
  )
}

export default Listitems