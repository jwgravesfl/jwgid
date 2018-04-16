import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeMainBody } from './homepage/Home'

import TimeSlot from './signupSheet/TimeSlot'

import styled from 'styled-components' 



  const MainDiv = styled.div`
    .container {
      
    }
`;
const Main = () => (
  <MainDiv>
    <main className="container">
      <Switch>
        <Route exact path='/' component={HomeMainBody} />
        <Route path='/timeslot' component={TimeSlot} />
        
      </Switch>
    </main>
  </MainDiv>
)

export default Main