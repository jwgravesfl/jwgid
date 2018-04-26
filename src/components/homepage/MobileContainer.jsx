import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
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

const MobileHeadingDiv = styled.div`
  .mheadmenu {
    min-height: 7vh
    padding: 1vh 1vh
  }
`

export class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <MobileHeadingDiv>
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item><Link to="/" onClick={this.handleToggle}>Home</Link></Menu.Item>
            <Menu.Item><Link to="/timeslot" onClick={this.handleToggle}>Sign Up Sheet</Link></Menu.Item>
            <Menu.Item><Link to="/picturegallery" onClick={this.handleToggle}>Photo Gallery</Link></Menu.Item>
            <Menu.Item><Link to="/github" onClick={this.handleToggle}>Github API Search - GraphQL</Link></Menu.Item>
            <Menu.Item><a href="https://github.com/jwgravesfl/jwgid/blob/master/server/" onClick={this.handleToggle}>MERN GraphQL Server and Product API SetUp</a></Menu.Item>

            
                <ImgSpan>
                  <img src={imgLogo} alt="" />
                </ImgSpan>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
            <Segment inverted textAlign='center' className="mheadmenu" vertical>
              <Container>
                <Menu inverted pointing secondary size='large' >
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                
                  <ImgSpan>
                    <img src={imgLogo} alt="" />
                  </ImgSpan>
                
                </Menu>
                
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
      </MobileHeadingDiv>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}