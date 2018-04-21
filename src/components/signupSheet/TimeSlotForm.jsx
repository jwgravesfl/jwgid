import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

import styled from 'styled-components'

const TimeSlotFormMainDiv = styled.div `
  width: 100%;
  text-align: center;
`

export default class TimeSlotForm extends Component {

  constructor() {
    super();
    this.state = {
      fName: '',
      lName: '',
      gName: '',
      hasBeenTaken: false
    }
    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value,
      })
    console.log(this.state, this.props)
  }

  onSubmit = (e) => {
   e.preventDefault()
   this.setState({
     fname: this.state.fName,
     lName: this.state.lName,
     gName: this.state.gName,
     hasBeenTaken: true
   })
 }

 handleRemoveClick = (e) => {
  e.preventDefault()
  this.setState({
    fname: "",
    lName: "",
    gName: "",
    hasBeenTaken: false
  })
 }

  

  render(){

    const hasBeenTaken = this.state.hasBeenTaken

    return (
      
      <TimeSlotFormMainDiv>
      <span>
        {hasBeenTaken ?
          (
            <span>
              {this.state.fName} {this.state.lName} {this.state.gName}
              <Button onClick={e => this.handleRemoveClick(e)}>
                Leave Spot
              </Button>
            </span>
          ) : (
            <span>
              <Form widths="equal" onSubmit={ this.onSubmit }>
                  <Form.Group inline>
                      <Form.Input 
                      fluid
                      placeholder='First Name'
                      name='fName'
                      width="3"
                      value={ this.state.fName }
                      onChange={e => this.change(e)}
                      />
                      <Form.Input 
                      fluid
                      placeholder='Last Name'
                      name='lName'
                      width="3"
                      value={ this.state.lName }
                      onChange={e => this.change(e)}
                      />
                      <Form.Input 
                      fluid
                      placeholder='Group Name'
                      name='gName'
                      width="3"
                      value={ this.state.gName }
                      onChange={e => this.change(e)}
                      />
                      <Button type='submit'>
                        Take Spot
                      </Button>
                  </Form.Group>
              </Form>
            </span>
          )}        
      </span>
      </TimeSlotFormMainDiv>
    )
  }
}