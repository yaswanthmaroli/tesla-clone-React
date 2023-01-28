import React from 'react'
import Section from './Section'
import '../styles/Home.css'
import sectionItem from './data'
import { useState } from 'react'

 

const Home = () => {
  
    const [data,setdata]=useState(sectionItem)
   

  return (
     <div className="home-container">
       {
        data.map((items)=>(
            <Section key={items.id} {...items} />
        ))
       }
     </div>
  )
}

export default Home


 
