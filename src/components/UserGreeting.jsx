import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
  render() {
    return (
        this.state.isLoggedIn ? 
        <div><h1>Welcome Alen Chacko</h1></div> : <div><h1>Please Login</h1></div>
    )
  }
}

export default UserGreeting