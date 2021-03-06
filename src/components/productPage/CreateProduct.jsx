import React, { Component } from 'react'
import gql from "graphql-tag";

import { graphql } from 'react-apollo';

import styled from 'styled-components'
import Subheader from 'material-ui/Subheader'
import TextField from 'material-ui/TextField'

const CreateProductDiv = styled.div`


    .createProductContainer {
        background-color: yellow;

        

        @media only screen and (max-width: 767px) {
         
      }
    }
`

const CREATE_PRODUCT = gql`
        mutation createProduct($title: String!, $qty: Int!, $imageURL: String!, $productURL: String!) {
            createProduct(input:{
                title: $title,
                qty: $qty,
                imageURL: $imageURL,
                productURL: $productURL,
            })
            {
                _id
                title
                qty
                imageURL
                productURL
            }
        }
`

const styles = {
  input: {
  fontSize: '100%',
  },
  underlineStyle: {
  borderColor: '#e91e63'
  },
  floatingLabelTextJSS: {
  fontFamily: 'Rock Salt, cursive',
  textAlign: 'left'
  },
  subheaderText: {
  fontFamily: 'Rock Salt, cursive',
  textAlign: 'left', 
  textWeight: 'bold'
  }
}


class CreateProduct extends Component {
    constructor() {
      super();
      this.state = {
        title: '',
        qty: '',
        imageURL: '',
        productURL: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }  
 
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
      console.log(this.state, this.props)
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          this.props.createProduct(this.state.title, this.state.qty, this.state.imageURL, this.state.productURL);
          event.preventDefault()
          this.setState({ title: '', qty: '', imageURL: '', productURL: ''});
          window.location.reload()
        }
      }    

  render(){
    
   

    return (
    <CreateProductDiv>
      <div className="createProductContainer">
      <Subheader
        style={ styles.subheaderText }
        >
        Enter New Product:   Name, Qty, Path to Product Image, Path to Product Detail Page
      </Subheader>
        <TextField
            value={this.state.title}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            fullWidth={true}
            name="title"
            style={styles.input}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelText="Name of Product"
            floatingLabelStyle={styles.floatingLabelTextJSS}
            />
        <TextField
          value={this.state.qty}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          fullWidth={true}
          name="qty"
          style={styles.input}
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelText="Inventory"
          floatingLabelStyle={styles.floatingLabelTextJSS}
        />
        <TextField
          value={this.state.imageURL}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          fullWidth={true}
          name="imageURL"
          style={styles.input}
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelText="Image of Product"
          floatingLabelStyle={styles.floatingLabelTextJSS}
        />
        <TextField
          value={this.state.productURL}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          fullWidth={true}
          name="productURL"
          style={styles.input}
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelText="Product Detail"
          floatingLabelStyle={styles.floatingLabelTextJSS}
        />
        </div>
      </CreateProductDiv>
      
    )
  }
}

const withCreateProduct = graphql(CREATE_PRODUCT, {
    props: ({ ownProps, mutate }) => ({
      createProduct (title, qty, imageURL, productURL) {
        return mutate({
          variables: { title, qty, imageURL, productURL },
        })
      },
    }),
  })
  
  export default withCreateProduct(CreateProduct)
