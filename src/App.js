import React, { Component } from 'react';

import { Home } from './components/homepage/Home'
import SocialIcons from './components/socialMedia/SocialIcons'

import styled from 'styled-components'

// async function loadGreeting() {
//   const response = await fetch('http://localhost:9000/graphql', {
//     method: 'POST',
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify({query: '{ greeting }'})
//   })
//   const responseBody = await response.json()
//   return responseBody.data.greeting
// }

const AppDiv = styled.div`
    .appDivContainer {
      
    }
`;


class App extends Component {
//  constructor(props) {
//    super(props)
//    this.state = {greeting: ''}
//    loadGreeting().then((greeting) => this.setState({greeting}))
//  }


  render() {
   
    return (
      <AppDiv>
        <div className="appDivContainer">
          <Home />
          <SocialIcons />
        </div>
      </AppDiv>
    );
  }
}

export default App;
