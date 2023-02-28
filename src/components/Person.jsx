import React from 'react'

const Person = ({persons}) => {
  return (
    <div>
        <h2>My name is {persons.name} I am {persons.age} old. Iam from {persons.place}</h2>
    </div>
  )
}

export default Person