import React, { Component } from 'react'
import { Container, Table, Label } from 'semantic-ui-react'
import TimeSlotForm from './TimeSlotForm'


import styled from 'styled-components'


const TimeSlotMainDiv = styled.div `
  text-align: center;
  min-height: 100vh;

  .timeslotContainer {
    text-align: center;
    background-color: white;
    margin-top: 5vh;
    border-radius: 10px;
  }

  .tableHeader {
    font-family: 'Homemade Apple', cursive;
  }
`

export default class TimeSlot extends Component {
  render(){
    return (
      <TimeSlotMainDiv>
        <Container text>
          <div className=" timeslotContainer">
            <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell textAlign="center" className='tableHeader' >Performance Sign Up List</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell width='2'>
                 <Label ribbon >7:00</Label>
                 </Table.Cell>
                  <Table.Cell style={{backgroundColor: ''}}><TimeSlotForm /></Table.Cell>
                </Table.Row>
                <Table.Row style={{backgroundColor: 'lightgrey'}}>
                  <Table.Cell width='2'>
                 <Label ribbon >7:30</Label>
                 </Table.Cell>
                  <Table.Cell><TimeSlotForm /></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell width='2'>
                 <Label ribbon >8:00</Label>
                 </Table.Cell>
                  <Table.Cell style={{backgroundColor: ''}}><TimeSlotForm /></Table.Cell>
                </Table.Row>
                <Table.Row style={{backgroundColor: 'lightgrey'}}>
                  <Table.Cell width='2'>
                 <Label ribbon >8:30</Label>
                 </Table.Cell>
                  <Table.Cell style={{backgroundColor: ''}}><TimeSlotForm /></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell width='2'>
                 <Label ribbon >9:00</Label>
                 </Table.Cell>
                  <Table.Cell style={{backgroundColor: ''}}><TimeSlotForm /></Table.Cell>
                </Table.Row>
                <Table.Row style={{backgroundColor: 'lightgrey'}}>
                  <Table.Cell width='2'>
                 <Label ribbon >9:30</Label>
                 </Table.Cell>
                  <Table.Cell style={{backgroundColor: ''}}><TimeSlotForm /></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell width='2'>
                 <Label ribbon >10:00</Label>
                 </Table.Cell>
                  <Table.Cell style={{backgroundColor: ''}}><TimeSlotForm /></Table.Cell>
                </Table.Row>
                
              </Table.Body>
            </Table>
        </div>
      </Container>
    </TimeSlotMainDiv>
    )
  }
}