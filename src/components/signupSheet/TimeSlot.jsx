import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import TimeSlotForm from './TimeSlotForm'

export default class TimeSlot extends Component {
  render(){
    return (
      <div>
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

    )
  }
}