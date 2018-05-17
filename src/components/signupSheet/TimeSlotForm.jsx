import React, { Component } from 'react'
import { Form, Button, Responsive } from 'semantic-ui-react'

import styled from 'styled-components'

const TimeSlotFormMainDiv = styled.div `
  width: 100%;
  text-align: center;

  .beenTakenPresentation {
    
  }

  .nameSpans {
    margin: 1vmax;
    font-family: 'Rock Salt', cursive;
    text-weight: bold;
  }
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
  //  console.log(this.state, this.props)
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
    lName: "",
    gName: "",
    fName: "",
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
           <div> <Responsive minWidth={768}>
            <span className="beenTakenPresentation">
              <span className="nameSpans">{this.state.gName}</span>
              <span className="nameSpans">{this.state.fName}</span>
              <span className="nameSpans">{this.state.lName}</span>
              <Button inverted size="small" color='red' onClick={e => this.handleRemoveClick(e)}>
                Clear
              </Button>
            </span>
            </Responsive>
            <Responsive maxWidth={767}>
            <span className="beenTakenPresentation">
              <div className="nameSpans">{this.state.gName}</div>
              <div className="nameSpans">{this.state.fName}</div>
              <div className="nameSpans">{this.state.lName}</div>
              <Button inverted size="small" color='red' onClick={e => this.handleRemoveClick(e)}>
                Clear
              </Button>
            </span>
            </Responsive>
            </div>
          ) : (
            <span>
              <Form widths="equal" onSubmit={ this.onSubmit }>
                  <Form.Group inline>
                    <Form.Input 
                      fluid
                      placeholder='Group Name'
                      name='gName'
                      width="3"
                      value={ this.state.gName }
                      onChange={e => this.change(e)}
                      />
                      <Form.Input 
                      fluid
                      placeholder='First Name'
                      name='fName'
                      width="3"
                      value={ this.state.fName }
                      onChange={e => this.change(e)}
                      required={true}
                      />
                      <Form.Input 
                      fluid
                      placeholder='Last Name'
                      name='lName'
                      width="3"
                      value={ this.state.lName }
                      onChange={e => this.change(e)}
                      />
                      <Button type='submit' inverted size="small" color='blue'>
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