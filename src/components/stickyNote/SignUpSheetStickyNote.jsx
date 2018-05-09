import React, { Component } from 'react'

import styled from 'styled-components'

const SignUpSheetStickyNoteMainDiv = styled.div`
    


    h2,p{
      font-size:100%;
      font-weight:normal;
    }
    ul,li{
      list-style:none;
    }
    ul{
      overflow:hidden;
      padding: ;
    }
    ul li a{
      text-decoration:none;
      color:#000;
      background:#ffc;
      display:block;
      height: 15vmax;
      width: 15vmax;
      padding: 1vmax;
      -moz-box-shadow:5px 5px 7px rgba(33,33,33,1);
      -webkit-box-shadow: 5px 5px 7px rgba(33,33,33,.7);
      box-shadow: 5px 5px 7px rgba(33,33,33,.7);
      -moz-transition:-moz-transform .15s linear;
      -o-transition:-o-transform .15s linear;
      -webkit-transition:-webkit-transform .15s linear;
    }
    ul li{
      margin:1vmax;
      float:left;
    }
    ul li h2{
      font-size:100%;
      font-weight:bold;
      padding-bottom:10px;
    }
    ul li p{
      font-family:"Reenie Beanie",arial,sans-serif;
      font-size:100%;
    }
    ul li a{
      -webkit-transform: rotate(-6deg);
      -o-transform: rotate(-6deg);
      -moz-transform:rotate(-6deg);
    }

    ul li a:hover,ul li a:focus{
      box-shadow:10px 10px 7px rgba(0,0,0,.7);
      -moz-box-shadow:10px 10px 7px rgba(0,0,0,.7);
      -webkit-box-shadow: 10px 10px 7px rgba(0,0,0,.7);
      -webkit-transform: scale(1.25);
      -moz-transform: scale(1.25);
      -o-transform: scale(1.25);
      position:relative;
      z-index:5;
    }
    ol{text-align:center;}
    ol li{display:inline;padding-right:1vmax;}
    ol li a{color:#fff;}
`

export default class SignUpSheetStickyNote extends Component {
  render() {
    return (
      <SignUpSheetStickyNoteMainDiv>
        <ul>
          <li>
            <a href="https://github.com/jwgravesfl/jwgid/tree/master/src/components/signupSheet">
              <h2>Sign Up Sheet</h2>
              <p>React, Semantic UI, Styled Components,
                Local State Management, No BackEnd or Store.
                <br/>
                Click for Github Repository
              </p>
            </a>
          </li>
        </ul>
      </SignUpSheetStickyNoteMainDiv>
    )
  }
}
