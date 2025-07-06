

import React from 'react'

import house from '../assets/house.png'
import glass1 from '../assets/glass1.jpg'
import glass2 from '../assets/glass2.jpg'
import glass3 from '../assets/glass3.jpg'

import frame2 from '../assets/frame2.png'
import frame3 from '../assets/frame3.png'
import frame4 from '../assets/frame4.png'
import frame5 from '../assets/frame5.png'
import person from '../assets/person.jpg'


const Main = () => {
 
  return (
    <div>
   <div className='Lorum'>
        <div className='prolorum'>
          <p className="project-label">PROJECT</p>
          <h1 className="project-title">Lorum</h1>
        </div>

        <div>
          <img className="main-image" src={house} alt="House" />
        </div>
      </div>

      <div className="about-section">
        <div className="image-group">
          <div className="image-column">
            <img src={glass1} width='350px' height='400px' alt="Glass 1" /><br/>
            <img src={glass2} width='350px'  alt="Glass 2" className="mt-20" />
          </div>
          <div className="image-column">
            <img src={glass3} height='400px' width='350px' alt="Glass 3" className="mt-70" />
          </div>
        </div>

        <div className="about-text">
          <p className="about-heading">About</p>
          <p className="about-paragraph">
            Lorem Ipsum is simply dummy text of the printing and<br />
            typesetting industry. Lorem Ipsum has been the<br />
            industry's standard dummy text ever since the 1500s,<br />
            when an unknown printer took a galley of type and<br />
            scrambled it to make a type specimen book. It has<br />
            survived not only five centuries, but also the leap into<br />
            electronic typesetting, remaining essentially unchanged.
          </p>
          <button className="read-more">READ MORE</button>
        </div>
      </div>

      <div>
        <p className='focus'>Main Focus/Mission Statement</p>
        <div className='ipsum'>
            <div style={{display:'flex',gap:'30px'}} >
                 <div><h1 style={{fontSize:'190px', lineHeight:'1px', color:'#bdbdbd'}} >1</h1></div> 
                 <div><p style={{fontSize:'2rem', color:'#333333'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Sed efficitur, lectus et<br/> facilisis placerat.</p></div>
            </div>

            <div style={{display:'flex',gap:'30px'}}>
                 <div><h1 style={{fontSize:'190px', lineHeight:'1px', color:'#bdbdbd'}}>2</h1></div> 
                 <div ><p style={{fontSize:'2rem', color:'#333333'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Sed efficitur, lectus et<br/> facilisis placerat.</p></div>
            </div>
          </div>
      </div>


      <div >
        <p style={{fontSize:'5rem', color: '#bdbdbd', marginLeft:'7rem'}}>Our Projects</p>
        <div className='frames'>
          <div className='frame1'>
            <div style={{background:'black', padding:'30px', width:'300px', height:'100px'}} >
              <h1  style={{color:'white'}} >Sample<br/> Project</h1>
              <div >
                <button  >VIEW MORE</button>
               
              </div>
          </div>
          <div >
             <img width='300px' height='160px'  src={frame2} alt="" />
          </div>
           
          </div>

          <div className='frame2'>
            <img width='150px' height='275px'  src={frame3}  alt="" />
            <img width='350px' src={frame4} alt="" />
            <img  width='250px' height='175px'  src={frame5} alt="" />
          </div>
        </div>
      </div>

      <div  >
        <button className='lastbutton' >ALL PROJECTS</button>
       
      </div>


      <div className="contact-container">
      <div className="contact-form">
        <p style={{fontSize:'5rem', color: '#bdbdbd'}}>Contact Us</p>

         <input type="text" placeholder="Name" />
         <input type="tel" placeholder="Phone Number *" />
         <input type="email" placeholder="Email *" />
         <input type="text" placeholder="Interested In" />
         <textarea placeholder="Message"></textarea>
  </div>

      <div className="contact-image">
        <img style={{marginTop:'190px'}} src={person} alt="Contact Visual" />
      </div>
    </div>
       <div>
        <button className='btn'>SEND EMAIL</button>
        
       </div>


  
    </div>

    
  )
}

export default Main