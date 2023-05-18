import React from 'react'
import "./Experience.css"
import arrow from "../assets/next-arow-5738.svg"
import resume from "../assets/Yaswanth Reddy.pdf"
function Experience() {
    function resumeFunc(){
        const a=document.createElement("a");
        a.setAttribute("href",resume);
        a.click()
    }
  return (
    <>
    <div className='Econtainer'>
        <h3>Experience</h3>
        <div className='right'>
        <div className='job'>
            <div className='time_place'>
                <span>Infosys Ltd.</span>
                <p>July 2022 - Present</p>
            </div>
            <div className='position'>
                System Engineer
            </div>
        </div>
        <div className='job'>
            <div className='time_place'>
                <span>Emertxe</span>
                <p>January 2022 - March 2022</p>
            </div>
            <div className='position'>
            Intern
            </div>
        </div>
        <div onClick={resumeFunc} className='resume'><span>View My Resume</span><img src={arrow}></img></div>
    </div>  
    </div>
    </>
  )
}

export default Experience