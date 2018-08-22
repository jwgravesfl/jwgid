import React, { Component } from 'react'
import Products from './Products'

import styled from 'styled-components'
import CreateProduct from './CreateProduct';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AddInventoryButton from 'material-ui/svg-icons/content/add-circle'
import CloseAddInventoryButton from 'material-ui/svg-icons/navigation/close'

 

const ProductPageDiv = styled.div`
margin-top: 2em;
    padding: 1em;
    
    .productPageContainer { 

        
    }

    .productGrid {
      margin: 1em;
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
 
    handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value,
      })
    console.log(1)
  }

  handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        this.props.createProduct(this.state.title, this.state.qty, this.state.imageURL, this.state.productURL);
        event.preventDefault()
        this.setState({ title: '', qty: '', imageURL: '', productURL: '' });
      }
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
          
            {showCreateProduct ? 
              <div>
                <CreateProduct handleKeyPress={this.handleKeyPress} />
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
             <Products className="productGrid"/>
          
          </div>  
        </ProductPageDiv>
      </MuiThemeProvider>
    )
  }
}