import React from 'react'
import "./Footer.css"
function Footer() {
  return (
   <div className='Fcontainer'>
   <div className="left">
    Designed By Brittany Chiang & Developed by Yaswanth Reddy 🤘 2023
   </div>
   <div className="Fright">
   <p onClick={()=>{window.location.href='mailto:yaswanthreddyboggala@gmail.com'}}>EMAIL</p>
   <p onClick={()=>window.open("https://www.linkedin.com/in/yaswanthreddyboggala/","_blank")}>LINKEDIN</p>
   <p onClick={() => window.open("https://github.com/yash2700", "_blank")}>GITHUB</p>
  
   </div>
   </div>
  )
}

export default Footer