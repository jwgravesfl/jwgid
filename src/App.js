import React, { Component } from 'react';

import Main from './components/Main'

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

        <Main />       

      </div>
    );
  }
}

export default App;
