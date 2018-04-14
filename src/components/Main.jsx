import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import TimeSlot from './signupSheet/TimeSlot'

import styled from 'styled-components' 



  const MainDiv = styled.div`
    .container {
      height: 100vh;
      
    }
`;
const Main = () => (
  <MainDiv>
    <main className="container">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/timeslot' component={TimeSlot} />
        
      </Switch>
    </main>
  </MainDiv>
)

export default Main