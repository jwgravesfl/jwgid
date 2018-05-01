import React, { Component } from 'react'
import Products from './Products'

import styled from 'styled-components'
import CreateProduct from './CreateProduct';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Container } from 'semantic-ui-react'

 

const ProductPageDiv = styled.div`
    .productPageContainer {
        background-color: 

        @media only screen and (max-width: 767px) {
         
      }
    }

    .productCssGridContainer {
      padding: ;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1vw;
      grid-auto-rows: calc(
        80vw - 40px * 1 - 1 / 1
      )

      @media only screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
      }
      
      @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }
`
  

export default class ProductPage extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <ProductPageDiv>
          <div className="productPageContainer">
          <Container
            textAlign="center"
            >
            <CreateProduct/>
            <div className="productCssGridContainer">
              <Products />
            </div>
          </Container>
          </div>  
        </ProductPageDiv>
      </MuiThemeProvider>
    )
  }
}