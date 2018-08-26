import React from 'react'

const Project = ({ name, image }) => (
  <div>
    <h2>{name}</h2>
    <img src={image} />
  </div>
)

export default Project
