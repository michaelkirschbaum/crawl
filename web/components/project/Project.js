import React from 'react'
import './Project.css'

const Project = ({ name, image }) => (
  <div>
    <h2>{name}</h2>
    <img src={image} />
  </div>
)

export default Project
