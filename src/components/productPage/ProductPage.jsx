import React, { Component } from 'react'
import Products from './Products'

import styled from 'styled-components'
import CreateProduct from './CreateProduct';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Container } from 'semantic-ui-react'
import AddInventoryButton from 'material-ui/svg-icons/content/add-circle'
import CloseAddInventoryButton from 'material-ui/svg-icons/navigation/close'

 

const ProductPageDiv = styled.div`

margin-top: 5vh;
    
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
      

      @media only screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
      }
      
      @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }

    .inventoryButton {
           position: fixed;
           top: 5%;
           right: 5%;
    }

`

const styles = {
  addCloseInventoryStyles: {
    width: '10vh',
    height: '10vh'
  },
}
  

export default class ProductPage extends Component {
  constructor() {
    super()
    this.state = {
      showCreateProduct: false,  
    }
    this.handleAddInventoryClick = this.handleAddInventoryClick.bind(this)
    }  
 
    
  handleAddInventoryClick = (e) => {
    this.setState({ 
      showCreateProduct: true,
     })
     console.log(this.state)
  }

  handleCloseAddInventoryClick = (e) => {
    this.setState({
      showCreateProduct: false,
    })
  }
  
  render(){
    const showCreateProduct = this.state.showCreateProduct
    return (
      <MuiThemeProvider>
        <ProductPageDiv>
          <div className="productPageContainer">
          <Container
            textAlign="center"
            >
            {showCreateProduct ? 
              <div>
                <CreateProduct />
                <CloseAddInventoryButton
                style={ styles.addCloseInventoryStyles}
                onClick={this.handleCloseAddInventoryClick}
                className="inventoryButton"
                />
              </div>
              :
              <div>
                <AddInventoryButton
                  onClick={this.handleAddInventoryClick}
                  className="inventoryButton"
                  style={ styles.addCloseInventoryStyles}
                />
              </div>
            }
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