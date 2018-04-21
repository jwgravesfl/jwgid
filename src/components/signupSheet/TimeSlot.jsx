import React, { Component } from 'react'
import { Container, List, Table, Header, Image, Label } from 'semantic-ui-react'
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
        <Container text>
          <div className=" timeslotContainer">
            <Table>
              <Table.Body>
                <Table.Row>
                 <Label ribbon >7:00</Label>
                 
                  <Table.Cell colSpan='1' style={{backgroundColor: 'red'}}>Cell</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
        </div>
      </Container>
    </TimeSlotMainDiv>
    )
  }
}