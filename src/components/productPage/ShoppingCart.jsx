import React, { Component } from 'react'

import styled from 'styled-components'

const ShoppingCartDiv = styled.div`
    .shoppingCartContainer {
        background-color: red

        @media only screen and (max-width: 767px) {
         
      }
    }

`

export default class ShoppingCart extends Component {
  render(){
    return (
      <ShoppingCartDiv>
        <div className="shoppingCartContainer">
          Shopping Cart  
        </div>  
      </ShoppingCartDiv>
    )
  }
}