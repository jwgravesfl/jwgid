import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {Mutation} from 'react-apollo'
import TextField from 'material-ui/TextField'
import gql from "graphql-tag"

import styled from 'styled-components'


const UpdateProfileInfoMainDiv = styled.div`
    
    .formProductUpdate {
        background-color: transparent;
    }

    .editSaveButton {
        
    }
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

export default class UpdateProfileInfo extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          title: this.props.title,
          imageURL: this.props.imageURL,
          productURL: this.props.productURL,
        }
    }
  
      handleChange = (event) => {
            this.setState({
                    [event.target.name]: event.target.value,
                })
            }

  render() {
    
    return (
        <UpdateProfileInfoMainDiv>
            <div>
                <Mutation mutation={UPDATE_PRODUCT} key={this.props._id}>
                {(updateProduct, { loading, error }) => (
                    
                    <form 
                        className="formProductUpdate"
                        onSubmit={e => {
                            e.preventDefault();
                            console.log(this.state)
                            updateProduct({ variables: { _id: this.props._id, title: this.state.title, qty: this.props.qty, imageURL: this.state.imageURL, productURL: this.state.productURL } });
                            }}>
                            <div className="buttonGroup">
                                <RaisedButton
                                    type="submit"
                                    className="editSaveButton"
                                    >
                                        Save
                                </RaisedButton>
                                <TextField
                                    textareaStyle={{ margin: '0px' }}
                                    style={{  }}    
                                    defaultValue={this.state.title}
                                    onChange={this.handleChange}
                                    name="title"
                                    floatingLabelText="Name of Product"
                                    inputStyle={{ color: 'white', fontSize:'100%', padding: '0' }}
                                    floatingLabelStyle={{ color: 'white' }}
                                    />
                                <TextField
                                defaultValue={this.state.imageURL}
                                onChange={this.handleChange}
                                name="imageURL"
                                inputStyle={{ color: 'white' }}
                                floatingLabelText="Image of Product"
                                floatingLabelStyle={{ color: 'white' }}
                                />
                                <TextField
                                defaultValue={this.state.productURL}
                                onChange={this.handleChange}
                                name="productURL"
                                inputStyle={{ color: 'white' }}
                                floatingLabelText="Product Detail"
                                floatingLabelStyle={{ color: 'white' }}
                                className="qtyTextField"
                                />
                                                          
                                
                            </div>
                    </form>
                    )}
                    </Mutation>
         </div>
      </UpdateProfileInfoMainDiv>
    )
  }
}
