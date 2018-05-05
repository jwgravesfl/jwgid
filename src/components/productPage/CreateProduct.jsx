import React, { Component } from 'react'
import gql from "graphql-tag";
import TextField from 'material-ui/TextField'
import { graphql } from 'react-apollo';

import styled from 'styled-components'
import Subheader from 'material-ui/Subheader'

const CreateProductDiv = styled.div`

      margin-bottom: 10em;

    .createProductContainer {
        background-color: yellow;

        

        @media only screen and (max-width: 767px) {
         
      }
    }
`

const styles = {
            input: {
            fontSize: '100%',
            },
            underlineStyle: {
            borderColor: '#e91e63'
            }
        }

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

        const floatingLabelTextJSS = {
          fontFamily: 'Rock Salt, cursive',
          marginLeft: '10vw',
          textAlign: 'left'
        }

        const subheaderText = {
          fontFamily: 'Rock Salt, cursive',
          textAlign: 'left', 
          textWeight: 'bold'
        }

 class CreateProduct extends Component {
    constructor() {
      super();
      this.state = {
        title: '',
        qty: '',
        imageURL: '',
        productURL: '',
        clicked: false
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
          this.setState({ title: '', qty: '', imageURL: '', productURL: '' });
        }
      }    

  render(){
    return (
    <CreateProductDiv>
      <div className="createProductContainer">
      <Subheader
        style={ subheaderText }
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
            floatingLabelStyle={floatingLabelTextJSS}
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
          floatingLabelStyle={floatingLabelTextJSS}
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
          floatingLabelStyle={floatingLabelTextJSS}
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
          floatingLabelStyle={floatingLabelTextJSS}
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
