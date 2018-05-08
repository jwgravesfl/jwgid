import React, { Component } from 'react'
import {Mutation} from 'react-apollo'
import TextField from 'material-ui/TextField'
import gql from "graphql-tag"
import RaisedButton from 'material-ui/RaisedButton'

import styled from 'styled-components'

const UpdateProductInfoMainDiv = styled.div`
        background-color: yellow;
`

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


export default class UpdateProductInfo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: this.props.title, 
       imageURL: this.props.imageURL,
       productURL: this.props.productURL
    }
  }
  

  handleChange = (event) => {
    this.setState({
            [event.target.name]: event.target.value,
        })
      console.log(this.state, this.props)
    }
  render() {



    return (
      <UpdateProductInfoMainDiv>
      <div>
        {console.log(this.props)}
        
                    

         
                <Mutation mutation={UPDATE_PRODUCT} key={this.props._id}>
                  {(updateProduct, { loading, error }) => (
                    
                    <form onSubmit={e => {
                        e.preventDefault();
                        console.log(this.props, this.state)
                        updateProduct({ variables: { _id: this.props._id, title: this.state.title, qty: this.props.qty, imageURL: this.state.imageURL, productURL: this.state.productURL } });
                        }}>
                      <div className="buttonGroup">
                      <TextField
                          value={this.state.title}
                          defaultValue={this.state.title}
                          onChange={this.handleChange}
                          name="title"
                          floatingLabelText="Name of Product"
                          floatingLabelStyle={{ color: 'black' }}
                          />
                        <TextField
                          value={this.state.imageURL}
                          onChange={this.handleChange}
                          name="imageURL"
                          floatingLabelText="Image of Product"
                          floatingLabelStyle={{ color: 'black' }}
                        />
                        <TextField
                          value={this.state.productURL}
                          onChange={this.handleChange}
                          name="productURL"
                          floatingLabelText="Product Detail"
                          floatingLabelStyle={{ color: 'black' }}
                          className="qtyTextField"
                        />
                      </div>
                  
                        <RaisedButton
                        type="submit"
                         >
                            Save
                        </RaisedButton>
                    </form>
                    
                  )}
                </Mutation>
              
      </div>
      </UpdateProductInfoMainDiv>
    )
  }
}
