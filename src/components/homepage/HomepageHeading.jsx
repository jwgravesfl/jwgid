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

  .segmentHpHLCR2 {
    
  }

  .homepageGC1 {
    background-color: ;
    padding-top: 2vh;
  }

  .leftColumnR2 {
    background-color: ;
    height: 100%;
  }

  .segmentLCR1 {
    background-color: ;
    height: 27vh;

  }

  .segmentLCR2 {
    background-color: ;
    height: 40vh;
  }

  .segmentRC {
    background-color: ;
    height: 40vh;
  }

  .segmentRCR2 {
    background-color: ;
    height: 30vh;
  }

  .cardSLCR1 {
    height: 100%;
    width: 100%;
  }

  .segmentHpHLCR1 {
    margin-bottom: 2vh;
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
    font-size: 3.5vw;
    text-align: center;
    width: 100%;
    background-color: ;
  }

  .cardMetaSLCR1 {
    font-size: 2vw;
    padding-top: 5vh;
  }

`

export const HomepageHeading = ({ mobile }) => (
    <HomePageHeadingDiv>
      <Container className="homepageContainer" >
        <Grid>
          <Grid.Row>
            <Grid.Column computer={8} tablet={8} mobile={16} className="homepageGC1">
                <div className="leftColumnR1">
                  <Segment raised className="segmentHpH segmentHpHLCR1" >
                    <div className="segmentLCR1">
                    <Card className="cardSLCR1" raised>
                      <Card.Content>
                        <Card.Header textAlign='center' style={{ paddingTop: '2vh'}}><span className="cardHeaderSLCR1">J. Wayne Graves</span></Card.Header>
                        <Card.Meta textAlign='center' style={{ paddingTop: '2vh'}}><span className="cardMetaSLCR1">Information Design Specialist</span></Card.Meta>
                        <Card.Description style={{ paddingTop: '2vh'}}><span className="cardDescriptionSLCR1">Full Stack Web Developement with a focus on information design.</span></Card.Description>
                      </Card.Content>
                    </Card>
                    </div>
                  </Segment>
                
                <Segment raised className="segmentHpH segmentHpHLCR2">
                  <div className="segmentLCR2">
                  <Card className="cardSLCR2" raised>
                      <Card.Content>
                        <Card.Header>J. Wayne Graves</Card.Header>
                        <Card.Meta>Information Design Specialist</Card.Meta>
                        <Card.Description>Full Stack Web Developement with a focus on information design.</Card.Description>
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
                    RCR2
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



  // <div className="">
  //         <Header
  //           as='h1'
  //           content='Information Design Web Services'
  //           inverted
  //         />
  //         <Header
  //           as='h2'
  //           content='Full Stack Progressive Web Apps.'
  //           inverted
  //         />
  //         <Button primary size='huge'>
  //           Get Started
  //           <Icon name='right arrow' />
  //         </Button>
  //       </div>