import React from 'react'
import Skills from '../utils/Skills'

const AllSkills = () => {
  return (
    <>
      {Skills.map((skill,i)=>{
        const {text,icon} = skill;
        return (
          <div key={i}>
            <i className={icon}></i>
            <p>{text}</p>
          </div>
        ); 
      })
    }
    </>
  )
}

export default AllSkills
