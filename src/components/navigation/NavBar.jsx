import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import img from '../../assets/IDDLogo.png'

const NavBarMainDiv = styled.div`
    .menuBar {
        height: 7vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        text-align: center;
        background-color: transparent;
    }

    .innerDiv {
        text-align: center;
        width: 100%;
        background-color: yellow;

        img {
            height: 5vh;
            width: 5vh;
            margin: 1vh;
        }
    }
`

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <NavBarMainDiv>    
      <Menu className="menuBar">
        <Menu.Item>
            Left
        </Menu.Item>
        <div className="innerDiv">
            <img src={ img } alt="" />
        </div>
        <Menu.Item position="right">
            <Link to="/timeslot">
                Sign Up Sheet
            </Link>
        </Menu.Item>
      </Menu>
    </NavBarMainDiv>
    )
  }
}