// Toggle Visibility:
// 1) Implement a button that toggles the visibility of a paragraph of text.
//  2) Use conditional rendering to show or hide the text based on the button state.

import { set } from 'mongoose';
import React, { useEffect } from 'react'
import {useState,useRef} from 'react'
function Seawave() {
    const [showText,setShowText]=useState(false);
    const paraRef=useRef();
    function toggle(){
        setShowText((prev)=>{
            return !prev 
        })
    }
    useEffect(()=>{
        console.log(showText)
        if(showText){
            paraRef.current.style.display='block'
        }else{
              paraRef.current.style.display='none'
        }
    },[showText])

  return (
    <div>
        <p ref={paraRef}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident dolores ullam cum rerum, adipisci earum.</p>
       
        <button onClick={toggle}>
            toggle Text Visibility
        </button>

    </div>
  )
}

export default Seawave