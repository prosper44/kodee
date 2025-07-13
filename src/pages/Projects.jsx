import React from 'react'

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const Projects = () => {
  return (
    <div>


         <div >
              <p style={{color:'#bdbdbd', fontSize:'50px', lineHeight:'1px'}} >Our</p>
              <h1 style={{color:'#333333', fontSize:'50px', lineHeight:'-3px'}} >Projects</h1>
        </div>
      <div style={{placeItems:'center', borderTop:'solid 1px'}}>
       

        <div className='divs' style={{display:'flex',gap:'20px', backgroundColor:'#FBFBFB', }}>
            
            <div>
                <img className='img1' src={project1} alt="" />
            </div>
            <div className='text' >
                <p className='p1' style={{color:'#333333'}}>Sample Project </p>
                <p className='p2' style={{color:'#333333'}}>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and<br/> scrambled it to make a type specimen book.</p>

                <div >
                                <button >VIEW MORE</button>
                                
                </div>
            </div>
        </div>

        <div style={{display:'flex',gap:'20px', marginBottom:'50px', backgroundColor:'#FBFBFB', padding:'10px 20px'}} >
            
            <div>
                <img className='img2' src={project2} alt="" />
            </div>
            <div>
                <p className='p1' style={{color:'#333333'}} >Sample Project 2 </p>
                <p className='p2' style={{color:'#333333'}}>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and<br/> scrambled it to make a type specimen book.</p>

                <div >
                                <button >VIEW MORE</button>
                                
                </div>
            </div>
        </div>

        <div style={{display:'flex',gap:'20px', marginBottom:'50px', backgroundColor:'#FBFBFB', padding:'10px 20px'}}>
            
            <div>
                <img className='img3'   src={project3} alt="" />
            </div>
            <div>
                <p className='p1' style={{color:'#333333'}} >Sample Project 3 </p>
                <p className='p2' style={{color:'#333333'}} >Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and<br/> scrambled it to make a type specimen book.</p>

                <div >
                                <button >VIEW MORE</button>
                               
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects
