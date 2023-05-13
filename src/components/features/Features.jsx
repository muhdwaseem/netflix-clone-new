import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './feature.scss'
function Features({type}) {
  return (
    <div className='feature'>
{
  type && (
    <div className="category">
      <span>{type==='movie'? "Movies" : "Series"}</span>
      <select name="genre" id="genre">
        <option >Genre</option>
        <option value="adventure">Adventure</option>
        <option value="comedy">comedy</option>
        <option value="crime">crime</option>
        <option value="fantasy">fantasy</option>
        <option value="historical">historical</option>
        <option value="horror">horror</option>
        <option value="romance">romance</option>
        <option value="sci-fi">sci-fi</option>
        <option value="thriller">thriller</option>
        <option value="western">western</option>
        <option value="animation">animation</option>
        <option value="drama">drama</option>
        <option value="documentry">documentry</option>
        

      </select>
    </div>
  )
}
        <img src="https://images.unsplash.com/photo-1612898800042-f6278e97aff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="" srcset="" />
        <div className="info">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBsBmzcv4cUqL-pQ2jddLxCHw11KopZ-7zQ&usqp=CAU" alt="" srcset="" />
            <span className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla necessitatibus itaque sit facilis atque deserunt doloribus dolorum, ab, iure voluptates odit tenetur sed repellat vitae. Aut praesentium minima ratione. Pariatur, sit. Totam aspernatur deleniti quae voluptate praesentium eum rerum, iste sequi adipisci! Totam eaque vitae quasi earum veniam deleniti optio porro laudantium esse, ipsum, sit eius? Atque praesentium labore molestias facere iure delectus, nisi quas doloremque facilis voluptas architecto illo voluptates, esse ducimus reprehenderit similique. Culpa eaque, quasi, provident vel libero quo sunt facilis minus ab corporis dolorem, assumenda optio 
            </span>
            <div className="buttons">
                 <button className="play">
                <PlayArrowIcon/> <span>Play</span> 
                    </button>
                <button className="more">
                <InfoOutlinedIcon/> <span>Info</span> 
                 </button>
             </div>
             
        </div>
       
      
    </div>
  )
}

export default Features