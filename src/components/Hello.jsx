import React from 'react'

const Hello = (props) => {
    console.log(props)
  return (
    <div><h1>Hello {props.name} You are from {props.place}</h1></div>
    
  )
}

export default Hello