import React from 'react'

const Greet = (props) => {
    console.log(props)
    const {name,place} = props
  return (
    <div>Greetings {name} You are from {place}</div>
  )
}

export default Greet