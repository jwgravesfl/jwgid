import PropTypes from 'prop-types'
import React from 'react'
import {
  Button,
  Container,
  Grid,
  Segment,
  Card
} from 'semantic-ui-react'
import styled from 'styled-components'

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
    height: 75vh;
  }

  .cardSLCR1 {
    height: 100%;
    width: 100%;
  }

  .segmentHpHLCR1 {
    margin-bottom: 2vh;
  }

`

export const HomepageHeading = ({ mobile }) => (
    <HomePageHeadingDiv>
      <Container className="homepageContainer" >
        <Grid>
          <Grid.Row>
            <Grid.Column computer={8} mobile={16} className="homepageGC1">
                <div className="leftColumnR1">
                  <Segment raised className="segmentHpH segmentHpHLCR1" >
                    <div className="segmentLCR1">
                    <Card className="cardSLCR1" raised>
                      <Card.Content>
                        <Card.Header>J. Wayne Graves</Card.Header>
                        <Card.Meta>Information Design Specialist</Card.Meta>
                        <Card.Description>Full Stack Web Developement with a focus on information design.</Card.Description>
                      </Card.Content>
                    </Card>
                    </div>
                  </Segment>
                
                <Segment raised className="segmentHpH segmentHpHLCR2">
                  <div className="segmentLCR2">
                    seg LCR2
                  </div>
                </Segment>
                </div>
            </Grid.Column>
            <Grid.Column computer={8} mobile={16} className="homepageGC1">
                <div className="rightColumn">
                <Segment raised className="segmentHpH">
                  <div className="segmentRC">
                    seg RC
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