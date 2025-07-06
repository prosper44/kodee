import React from 'react'

import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'
import gallery5 from '../assets/gallery5.jpg'
import gallery6 from '../assets/gallery6.jpg'
import gallery7 from '../assets/gallery7.jpg'
import gallery8 from '../assets/gallery8.jpg'
import gallery9 from '../assets/gallery9.jpg'


function Gallery() {
  return (
    <div >
      <div style={{marginTop:'20px'}}>
        <p style={{color:'#bdbdbd', fontSize:'100px', lineHeight:'1px'}} >Photo</p>
        <h1 style={{color:'#333333', fontSize:'100px', lineHeight:'-3px'}} >Gallery</h1>
      </div>
      <div className='gallery-grid' >
        <img   src={gallery1} alt="" />
        <img   src={gallery1} alt="" />
        <img   src={gallery2} alt="" />
        <img   src={gallery3} alt="" />
        <img    src={gallery4} alt="" />
        <img   src={gallery5} alt="" />
        <img   src={gallery6} alt="" />
        <img  src={gallery7} alt="" />
        <img  src={gallery8} alt="" />
        <img   src={gallery9} alt="" />
      </div>
    </div>
  );
}

export default Gallery;
