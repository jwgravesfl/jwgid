import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const SocialIconsDiv = styled.div`
    .socialIconsContainer {
        width: 10vh;
        height: 20vh;
        position: fixed;
        bottom: 15%;
        left: 0;
        background-color: ;
    }
`

export default class SocialIcons extends Component {
  render(){
    return (
      <SocialIconsDiv>
      <div className="socialIconsContainer">
        <Menu
          icon='labeled'
          vertical
        >
          <Menu.Item>
            <Icon name='github' />
            <Link to="https://github.com/jwgravesfl">Github</Link>
          </Menu.Item>

          <Menu.Item >
            <Icon name='linkedin' />
            <Link to="https://www.linkedin.com/in/jwgravesfl/">LinkedIn</Link>
          </Menu.Item>

          <Menu.Item>
            <Icon name='mail' />
            <a href="mailto:jwgravesfl@gmail.com">Email</a> 
          </Menu.Item>
        </Menu>
      </div>  
      </SocialIconsDiv>
    )
  }
}