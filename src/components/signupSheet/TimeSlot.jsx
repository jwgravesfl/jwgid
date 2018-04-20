import React, { Component } from 'react'
import { Container, List, Table, Header, Image } from 'semantic-ui-react'
import TimeSlotForm from './TimeSlotForm'


import styled from 'styled-components'


const TimeSlotMainDiv = styled.div `
  height: 100vh;
  text-align: center;

  .timeslotContainer {
    text-align: center;
    background-color: white;
    height: 80vh;
    margin-top: 5vh;
    border-radius: 10px;
  }
`

export default class TimeSlot extends Component {
  render(){
    return (
      <TimeSlotMainDiv>
        <Container raised text>
        <div className=" timeslotContainer">
          <List divided>
            <List.Item>
              7:00      <TimeSlotForm />
            </List.Item>
            <List.Item>
              8:00      <TimeSlotForm />
            </List.Item>
            <List.Item>
              9:00      <TimeSlotForm />
            </List.Item>
            <List.Item>
              10:00     <TimeSlotForm />
            </List.Item>
          </List>
        </div>
      </Container>
    </TimeSlotMainDiv>
    )
  }
}