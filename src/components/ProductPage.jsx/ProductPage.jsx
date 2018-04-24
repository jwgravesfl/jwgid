import React, { Component } from 'react'

import styled from 'styled-components'

const ProductPageDiv = styled.div`
    .productPageContainer {
        background-color: red;

        @media only screen and (max-width: 767px) {
         
      }
    }

`

export default class ProductPage extends Component {
  render(){
    return (
      <ProductPageDiv>
        <div className="productPageContainer">
          Product Page  
        </div>  
      </ProductPageDiv>
    )
  }
}