import React from 'react'
import "./Header.css"
function Header() {
  return (
    <header>
    <div className='intro_hello'>
Hello! <img src={"https://em-content.zobj.net/source/microsoft-teams/363/waving-hand_1f44b.png"} width={"50px"}></img></div>
<div className='intro_tagline'> I'm <strong>Yaswanth Reddy,</strong> a versatile full stack developer. I blend design finesse with technical prowess to create immersive digital experiences &nbsp;
<img src={"https://em-content.zobj.net/source/microsoft-teams/363/man-technologist_1f468-200d-1f4bb.png"} width={"50px"}></img>
</div>
<div className='intro_contact'>Get in touch
 <img src={"https://em-content.zobj.net/thumbs/160/apple/354/backhand-index-pointing-right_1f449.png"} width={"50px"}></img> 

 <a href="mailto:yaswanthreddyboggala@gmail.com">yaswanthreddyboggala@gmail.com</a>
</div>
</header>
  )
}

export default Header