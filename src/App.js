import React, { Component } from 'react';

import { Home } from './components/homepage/Home'

// async function loadGreeting() {
//   const response = await fetch('http://localhost:9000/graphql', {
//     method: 'POST',
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify({query: '{ greeting }'})
//   })
//   const responseBody = await response.json()
//   return responseBody.data.greeting
// }



class App extends Component {
//  constructor(props) {
//    super(props)
//    this.state = {greeting: ''}
//    loadGreeting().then((greeting) => this.setState({greeting}))
//  }


  render() {
   
    return (
      <div className="">

        <Home />
      </div>
    );
  }
}

export default App;
