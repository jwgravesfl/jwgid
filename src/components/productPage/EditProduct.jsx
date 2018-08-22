import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import styled from 'styled-components'
import {Mutation} from 'react-apollo'
import gql from "graphql-tag"

import RaisedButton from 'material-ui/RaisedButton'
import DeleteProduct from './DeleteProduct'

const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($_id: ID!, $title: String!, $qty: Int!, $imageURL: String!, $productURL: String!){
        updateProduct(_id: $_id, input:{
          title: $title,
          qty: $qty,
          imageURL: $imageURL,
          productURL: $productURL,
        })
        {
          title
          qty
          imageURL
          productURL
        }
      }
`;

const EditProductMainDiv = styled.div `
    background-color: black;
    text-align: center;

    .formBackGround {
      background-color: black;
    }


`

const styles = {
    paperStyle: {
       height: '80%',
        width: '80%',
        textAlign: 'center',
        display: 'inline-block',
        margin: 0,
        padding: 0,
        },
    input: {
        fontSize: '100%',
        color: 'white',
        margin: 0,
        padding: 0,
        },
    underlineStyle: {
        borderColor: '#e91e63',
        color: 'white',
        margin: 0,
        padding: 0,
        },
    floatingLabelTextJSS: {
        fontFamily: 'Rock Salt, cursive',
        textAlign: 'left',
        color: 'white',
        margin: 0,
        padding: 0,
        },
    subheaderText: {
        fontFamily: 'Rock Salt, cursive',
        textAlign: 'left', 
        textWeight: 'bold',
        },
    inputStyle: { 
        color: 'white',
        },
    productFormStyle: {
        color: 'white',
        width: '100%',
        }
    };

export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      qty: '',
      imageURL: '',
      productURL: '',
      showSaveProduct: false,
      showEditProduct: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEditInventoryClick = this.handleEditInventoryClick.bind(this)
}  

handleEditInventoryClick = (e) => {
  this.setState({ 
    showEditProduct: true,
   })
   console.log(this.state)
}

handleCloseEditInventoryClick = (e) => {
  this.setState({
    showEditProduct: false,
  })
}


  handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value,
      })
  }

  componentWillMount(){
    this.setState({
      _id: this.props._id,
      title: this.props.title,
      qty: this.props.qty,
      imageURL: this.props.imageURL,
      productURL: this.props.productURL
    })
  }

  render() {
    const showEditProduct = this.state.showEditProduct
    return (
    <MuiThemeProvider>
      <EditProductMainDiv>
      {showEditProduct ? 
        <button onClick={this.handleCloseEditInventoryClick}>Edit</button>
        :
        
        <div>
        <button onClick={this.handleEditInventoryClick}>Close</button>
          <Mutation mutation={UPDATE_PRODUCT} key={this.props._id}>
                  {(updateProduct, { loading, error }) => (

           
            <Paper
              style={styles.paperStyle}
              zDepth={5}
              rounded={true}
              >
              <DeleteProduct _id={this.props._id} />
              <RaisedButton
                    onClick={e => {
                      e.preventDefault()
                      console.log(this.state)
                      updateProduct({ variables: { _id: this.props._id, title: this.state.title, qty: this.state.qty, imageURL: this.state.imageURL, productURL: this.state.productURL } })
                      this.setState({ 
                        showSaveProduct: false
                       })
                      }}
                    >
                    Save
                </RaisedButton>
              <div className="formBackGround">
              <TextField
                value={this.state.title}
                onChange={this.handleChange}
                name="title"
                style={ styles.productFormStyle }
                underlineFocusStyle={styles.underlineStyle}
                floatingLabelText="Name of Product"
                floatingLabelStyle={styles.floatingLabelTextJSS}
                textareaStyle={{ color: 'white' }}
                inputStyle={ styles.inputStyle }
                />
                <TextField
                  value={this.state.qty}
                  onChange={this.handleChange}
                  name="qty"
                  style={ styles.productFormStyle }
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelText="Inventory"
                  floatingLabelStyle={styles.floatingLabelTextJSS}
                  inputStyle={ styles.inputStyle }
                />
                <TextField
                  value={this.state.imageURL}
                  onChange={this.handleChange}
                  name="imageURL"
                  style={ styles.productFormStyle }
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelText="Image of Product"
                  floatingLabelStyle={styles.floatingLabelTextJSS}
                  inputStyle={ styles.inputStyle }
                />
                <TextField
                  value={this.state.productURL}
                  onChange={this.handleChange}
                  name="productURL"
                  style={ styles.productFormStyle }
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelText="Product Detail"
                  floatingLabelStyle={styles.floatingLabelTextJSS}
                  inputStyle={ styles.inputStyle }
                />  
                </div>
              </Paper>
            )}
          </Mutation>
        </div>
      }
        
      </EditProductMainDiv>
    </MuiThemeProvider>
    )
  }
}
