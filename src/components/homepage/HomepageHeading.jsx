import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  Grid,
  Segment,
  Card
} from 'semantic-ui-react'
import styled from 'styled-components'
import LandingCarousel from './LandingCarousel';

const HomePageHeadingDiv = styled.div`
  background-color: ;
  padding: ;

  .homepageContainer {
    background-color: ;
  }

  .segmentHpH {
    width: 90%;
    margin-left: 5%;
  }

 .homepageGC1 {
    background-color: ;
    padding-bottom: 2vh;
  }

  .leftColumnR2 {
    background-color: ;
    height: 100%;
  }

  .segmentLCR1 {
    background-color: ;
    height: 100%;

  }

  .segmentLCR2 {
    background-color: ;
    height: 100%;
    margin-bottom: 1vh;
  }

  .segmentRC {
    background-color: ;
    height: 100%;
  }

  .segmentRCR2 {
    background-color: ;
    height: 100%;
  }

  .cardSLCR1 {
    height: 100%;
    width: 100%;
  }

  .segmentHpHLCR1 {
  }

  .cardSLCR2 {
    height: 100%;
    width: 100%;
  }

  .cardSRC {
    height: 100%;
    width: 100%;
  }
  .cardSRCR2 {
    height: 100%;
    width: 100%;
  }

  .cardHeaderSLCR1 {
    text-align: left;
    width: 100%;
    background-color: ;
    line-height: 120%;

    font-size: 100%; 
  }

  .cardMetaSLCR1 {
    line-height: 120%;

    font-size: 100%; 
  }

  .cardDescriptionSLCR1 {
    line-height: 120%;
    font-size: 100%; 
  }

  .cardHeaderSLCR2 {
    width: 100%;
    background-color: ;
    line-height: 50%;
    font-size: 100%; 
  }

  .cardHeaderSLCR2a {
    margin-top: 1vh;
    width: 100%;
    background-color: ;
    line-height: 100%;
    font-size: 100%; 
  }

  .cardMetaSLCR2 {
    line-height: 50%;
    font-size: 100%; 
  }

  .cardDescriptionSLCR2 {
    ul {
      margin: 0;
      padding: .5vw;
      line-height: 120%;
      list-style-type: ;
    }
    font-size: 80%; 
  }
`



export const HomepageHeading = ({ mobile }) => (
    <HomePageHeadingDiv>
      <Container className="homepageContainer" >
        <Grid>
          <Grid.Row>
            <Grid.Column computer={8} tablet={8} mobile={16} className="homepageGC1" >
                <div className="leftColumnR1">
                  <Segment raised className="segmentHpH segmentHpHLCR1" >
                    <div className="segmentLCR1">
                    <Card className="cardSLCR1" raised>
                      <Card.Content>
                        <Card.Header textAlign='left'><span className="cardHeaderSLCR1">J. Wayne Graves</span></Card.Header>
                        <Card.Meta textAlign='left'><span className="cardMetaSLCR1">Information Design Specialist</span></Card.Meta>
                        <Card.Description textAlign='left'><span className="cardDescriptionSLCR1">Full Stack Web Developvhent with a focus on information design.</span></Card.Description>
                      </Card.Content >
                    </Card>
                    </div>
                  </Segment>
                
                <Segment raised className="segmentHpH segmentHpHLCR2">
                  <div className="segmentLCR2">
                  <Card className="cardSLCR2" raised> 
                      <Card.Content>
                        <Card.Header style={{ borderBottom: '1px solid black'}}><span className="cardHeaderSLCR2">Work Experience</span></Card.Header>
                        <div className="cardHeaderSLCR2a">
                          PricewaterhouseCoopers, LLP
                        </div>
                        <div><span className="cardMetaSLCR2">Tax Process and Technology Specialist</span></div>
                        
                          <span className="cardDescriptionSLCR2">
                            <ul>
                              <li>
                                Comprehensive Accounting and Business Expert
                              </li>
                              <li>
                                Experienced Project Management
                              </li>
                            </ul>
                          </span>
                        
                      </Card.Content>
                      <Card.Content>
                        
                        <div className="cardHeaderSLCR2a">
                          Information Design Web Services
                        </div>
                        <div><span className="cardMetaSLCR2">J. Graves Sample Portfolio</span></div>
                        
                          <span className="cardDescriptionSLCR2">
                            <ul>
                              <li>
                                Intuitive attention to detail
                              </li>
                              <li>
                                Passionate learning and educating
                              </li>
                            </ul>
                          </span>
                        
                      </Card.Content>
                    </Card>
                  </div>
                </Segment>
                </div>
            </Grid.Column>
            <Grid.Column computer={8} tablet={8} mobile={16} className="homepageGC1">
                <div className="rightColumn">
                <Segment raised className="segmentHpH">
                  <div className="segmentRC">
                  <Card className="cardSRC" raised>
                    <LandingCarousel />
                    </Card>
                  </div>
                </Segment>
                <Segment raised className="segmentHpH">
                  <div className="segmentRCR2">
                  <Card className="cardSRCR2" raised>
                  <Card.Content>
                        <Card.Header style={{ borderBottom: '1px solid black'}}><span className="cardHeaderSLCR2">Education</span></Card.Header>
                        <div className="cardHeaderSLCR2a">
                          University of South Florida
                        </div>
                        <div><span className="cardMetaSLCR2">BSAS Information Architecture</span></div>
                        
                          <span className="cardDescriptionSLCR2">
                            <ul>
                              <li>
                                Information Architecture and Interaction Design
                              </li>
                              <li>
                                Front End focused full stack programming. 
                              </li>
                              <li>
                                Web Management, Education and Leadership
                              </li>
                              <li>
                                Graphic and Web Design
                              </li>
                              <li>
                                Video and Audio Production
                              </li>
                            </ul>
                          </span>
                        
                      </Card.Content>
                    </Card>
                  </div>
                </Segment>
                </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </HomePageHeadingDiv>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }