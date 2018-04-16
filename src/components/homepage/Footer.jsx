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
          <Segment inverted vertical style={{ padding: '5em 1vh' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item>Sitemap</List.Item>
                    <List.Item>Contact Us</List.Item>
                    <List.Item>Religious Ceremonies</List.Item>
                    <List.Item>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Examples' />
                  <List link inverted>
                    <List.Item><Link to="/timeslot">Sign Up Sheet</Link></List.Item>
                    <List.Item>DNA FAQ</List.Item>
                    <List.Item>How To Access</List.Item>
                    <List.Item>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage JJJJJ.</p>
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