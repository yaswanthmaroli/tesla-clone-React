import React from 'react'
import '../styles/Section.css'
import arrowimg from './images/down-arrow.svg'
import Fade from 'react-reveal/Fade';
 


const Section = ({ id,title,desc,btnLeft, btnRight, backgroundImage }) => {
    
  return (
    <div className="section-wrap" key={id} style={{backgroundImage:`url(${backgroundImage})`}}  >
      <div className="sectionItem-text">
      <Fade bottom>
        <h1>{title}</h1>
         
       
        <p> {desc} </p>
        </Fade>
        
        
        </div>
        <div className="buttons">
          <Fade bottom>
        <div className="button-group">
        
         
 
             <div className="left-btn">
                 {btnLeft}
             </div>
             

           
            
            {
               
                

                btnRight&& 
                
                <div className="right-btn">
                {btnRight}
                
            </div>
            
            }
             
        </div>
        </Fade>
        <div className="down-arrow">
                 <img src={arrowimg} alt="" />
            </div>
        </div>
       
    </div>
  )
}

export default Section

 
