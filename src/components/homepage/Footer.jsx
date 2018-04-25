import React, { Component } from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterDiv = styled.div`
    .footerContainer {

    }
`

export default class Footer extends Component {
  render(){
    return (
      <FooterDiv>
        <div className="footerContainer">
          <Segment inverted vertical style={{ padding: '5em 1vh' }} textAlign='right'>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
              <Grid.Column width={5}>
                  <Header inverted as='h4' content='Examples' />
                  <List inverted>
                    <List.Item><Link to="/timeslot">Sign Up Sheet</Link></List.Item>
                    <List.Item><Link to="/picturegallery">Photo Gallery</Link></List.Item>
                    <List.Item><a href="https://heatherlove.surge.sh">Heather Love Music</a></List.Item>
                    <List.Item><a href="https://github.com/jwgravesfl/jwgid/blob/master/server/server.js">MERN GraphQL Server SetUp</a></List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Header inverted as='h4' content='Examples' />
                  <List inverted>
                    <List.Item><Link to="/github">Sign Up Sheet</Link></List.Item>
                    <List.Item><Link to="/stickynote">Sticky Note Component</Link></List.Item>
                    <List.Item><a href="https://informationdesignus.surge.sh">Coming Soon</a></List.Item>
                    <List.Item><a href="https://informationdesignus.surge.sh">Coming Soon</a></List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Header as='h4' inverted>Happy to Help</Header>
                  <p>I look forward to working with you.  Please let me know if there is anything I can do to add value to you or your organization.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>  
        </div>
      </FooterDiv>
    )
  }
}