import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeMainBody from './homepage/HomeMainBody'

import TimeSlot from './signupSheet/TimeSlot'

import styled from 'styled-components'

  const MainDiv = styled.div`
    .mainDivContainer {
  
    }
`;

const Main = () => (
  <MainDiv>
    <main className="mainDivContainer">
      <Switch>
        <Route exact path='/' component={HomeMainBody} />
        <Route path='/timeslot' component={TimeSlot} />
      </Switch>
    </main>
  </MainDiv>
)

export default Main