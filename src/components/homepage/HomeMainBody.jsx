import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Responsive,
  Segment,
} from 'semantic-ui-react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import { HomepageHeading } from './HomepageHeading'
import Footer from './Footer'

import imgSuit from '../../assets/suitPic.jpg'

const HomeMainBodyDiv = styled.div`
    .homeMainBodyContainer {
      background-color: ;
    }

    .homeResponsiveContainer {
      background-color: transparent;
    }

    .segment2Home {
      padding: ;
      background-color: white;
    }

    .whereStreetSmarts {
      text-align: center;
      width: 100%;
      background-color: ;
      line-height: 120%;
      font-size: 175%;
      font-weight: bold;
      margin-bottom: 1vh;
  }

    .segment2Header {
        text-align: left;
        width: 100%;
        background-color: ;
        line-height: 120%;
        font-size: 125%;
        font-weight: bold;
    }

    .segment2Card {
      background-color: transparent;

      p {
        font-size: 100%;
        margin-bottom: 1vh;
      }
    }
`

export default class HomeMainBody extends Component {
  render(){
    return (
      <HomeMainBodyDiv>
        <div className="homeMainBodyContainer">
          <Responsive as={Segment} minWidth={768} className="homeResponsiveContainer">
            <HomepageHeading />
          </Responsive>
          
          <Responsive as={Segment} maxWidth={768} className="homeResponsiveContainer">
            <HomepageHeading mobile />
          </Responsive>

          <Segment vertical>
          <div className="segment2Home">
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
              
                <Grid.Column width={8}>
                <div className="whereStreetSmarts">Where Street Smarts and Book Smarts meet.</div>
                  <div className="segment2Card">

                    <div className="segment2Header">Street Smarts</div>
                    <p>
                     Having emphasized education in my recent 2017 Information Architecture BSAS degree from the University 
                     of South Florida, explaining concepts using a learner centered approach provides the best chances for success.
                     Capitalizing on experiences from being a semi-professional musician, I have the ability to 
                     empathize and connect with clients, collegues and co-workers.  
                    </p>
                  </div>
                  <div className="segment2Card">
                  <div className="segment2Header">Book Smarts</div>
                  <p>
                    Having an unrelently desire to learn in a current and relevant way, I not only have years of experience at the 
                    highest level of the accounting industry and business with Big 4 Accounting Firm PricewaterhouseCoopers, LLP, 
                    but I completed a degree from the University of South Florida with a 3.71 GPA during the same time period.     
                  </p>
                  </div>
                  <div className="segment2Card">
                    <div className="segment2Header">Bringing them Together</div>
                    <p>
                      As a full stack web developer one wears many hats.  From hearing, understanding and cultivating the client vision to 
                      designing, creating and deveoping the web application, one must have a complete understanding of the process.  Being able
                      to discuss a topic in a manner the other person understands gives one the best chance to succeed.  By being able to 
                      speak client, to speak designer and to speak developer, I am your best opportunity to succeed.  
                    </p>
                  </div>
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                  <Image
                    bordered
                    rounded
                    src={imgSuit}
                    fluid
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Link to=""><Button size='huge'>Download Resume</Button></Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            </div>
          </Segment>
          <Segment style={{ padding: '1vh' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
              <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '200%', color: 'white'}}>"A Dependable Employee"</Header>
                  <p style={{ fontSize: '150%', color: 'white' }}>J proved himself to be a dependable employee and a hard worker with solid problem solving and technical skills. </p>
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '200%', color: 'white' }}>"A Team Player"</Header>
                  <p style={{ fontSize: '150%', color: 'white' }}>
                  J would be an asset to have on any team.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment style={{ padding: '8em 1vh' }} vertical>
            <Container text>
              <Header as='h3' style={{ fontSize: '200%', color: 'white', background: 'black', borderRadius: '15px', padding: '1vh', textAlign: 'center' }}>Do you have a role that needs filled?</Header>
              <p style={{ fontSize: '150%', color: 'white', background: 'black', borderRadius: '15px', padding: '1vh', textAlign: 'justify' }}>
                With 20 years of business, technical and corporate experience, I will add value to any organization.  Having worked at the hightest level
                of corporate America and having recently completed a BSAS degree from the University of South Florida with a 3.71GPA, I have a proven track record.  
                If you have a role that needs filled, I will be your best choice.  
              </p>
            </Container>
          </Segment>
          <Footer /> 
        </div>
      </HomeMainBodyDiv>
    )
  }
}