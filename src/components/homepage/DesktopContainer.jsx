import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import imgLogo from '../../assets/IDDLogo.png'

const ImgSpan = styled.span`
        img {
          height: 5vh
          width: 5vh
          margin: 1vh
          position: absolute
          top: 0
          right: 0
        }
`

export class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={768}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ minHeight: "7vh", padding: '1vh 1vh' }} vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item><Link to="/">Home</Link></Menu.Item>
                <Menu.Item><Link to="/timeslot">Sign Up Sheet</Link></Menu.Item>
                <Menu.Item><Link to="/picturegallery">Photo Gallery</Link></Menu.Item>
                <Menu.Item><Link to="/github">Github API Search - GraphQL</Link></Menu.Item>
                <Menu.Item><a href="https://github.com/jwgravesfl/jwgid/blob/master/server/server.js">MERN GraphQL Server and Product API SetUp</a></Menu.Item>
                

                <ImgSpan>
                  <img src={imgLogo} alt="" />
                </ImgSpan>
                
              </Container>
            </Menu>
            
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}