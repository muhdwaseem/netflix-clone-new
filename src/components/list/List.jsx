import React, { useRef, useState } from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Listitems from '../listitems/Listitems';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import  './list.scss'

function List() {






const [slider, setslider] = useState(0)
const [ismoved, setismoved] = useState(false)
  const listref = useRef()
  const handleclick=(direction)=>{
    setismoved(true)
    let distance = listref.current.getBoundingClientRect().x-50;
      if(direction==='left' && slider >0){
       
          listref.current.style.transform = `translateX(${250+distance}px)`
       setslider(slider-1)   
      }
      if(direction==='right'&&slider<5){
        listref.current.style.transform = `translateX(${-250+distance}px)`
        setslider(slider+1)
        
    }
      
  }
  return (
    <div className='list'> 
        <span className="listtitle">continue to watch </span>
        <div className="wrapper">
        <ArrowBackIosOutlinedIcon className='sliderarrow left' onClick={()=>handleclick('left')} style={{display:!ismoved &&'none' }}/>
            <div className="container"  ref={listref}>
            <Listitems index={0}/>
            <Listitems index={1}/>
            <Listitems index={2}/>
            <Listitems index={3}/>
            <Listitems index={4}/>
            <Listitems index={5}/>
            <Listitems index={6}/>
            <Listitems index={7}/>
            <Listitems index={8}/>
            <Listitems index={9}/>


            </div>
            <ArrowForwardIosOutlinedIcon className='sliderarrow right' onClick={()=>handleclick('right')}/>
           
        </div>
    </div>
  )
}

export default List