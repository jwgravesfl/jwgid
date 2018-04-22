import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

import styled from 'styled-components'

const SocialIconsDiv = styled.div`
    .socialIconsContainer {
        position: fixed;
        bottom: 20%;
        left: 0;
        background-color: ;

        @media only screen and (max-width: 767px) {
          bottom: 0;
      }
    }

    .items {

    }

    .icons {
  
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
          <a href="https://github.com/jwgravesfl" target="_blank" rel="noopener noreferrer"><Icon name='github' />
            Github</a>
          </Menu.Item>

          <Menu.Item >
          <a href="https://www.linkedin.com/in/jwgravesfl/" target="_blank" rel="noopener noreferrer"><Icon name='linkedin' />
            LinkedIn</a>
          </Menu.Item>

          <Menu.Item>
          <a href="mailto:jwgravesfl@gmail.com">
            <Icon name='mail' />
            Email</a> 
          </Menu.Item>
        </Menu>
      </div>  
      </SocialIconsDiv>
    )
  }
}