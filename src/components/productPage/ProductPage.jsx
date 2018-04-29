import React, { Component } from 'react'
import Products from './Products'

import styled from 'styled-components'
import CreateProduct from './CreateProduct';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

 

const ProductPageDiv = styled.div`
    .productPageContainer {
        background-color: 

        @media only screen and (max-width: 767px) {
         
      }
    }
`
  

export default class ProductPage extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <ProductPageDiv>
          <div className="productPageContainer">
            <CreateProduct/>
            <Products/> 
          </div>  
        </ProductPageDiv>
      </MuiThemeProvider>
    )
  }
}