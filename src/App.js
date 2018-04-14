import React, { Component } from 'react';

import TimeSlot from './components/signupSheet/TimeSlot'

async function loadGreeting() {
  const response = await fetch('http://localhost:9000/graphql', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({query: '{ greeting }'})
  })
  const responseBody = await response.json()
  return responseBody.data.greeting
}



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {greeting: ''}
    loadGreeting().then((greeting) => this.setState({greeting}))
  }


  render() {
    const {greeting} = this.state
    return (
      <div className="">
        <header className="">
          <h1 className="">{greeting}</h1>
          <TimeSlot />
            
        </header>
        
      </div>
    );
  }
}

export default App;
