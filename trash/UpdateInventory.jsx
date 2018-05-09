import React, { Component } from 'react'
import {Mutation} from 'react-apollo'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import gql from "graphql-tag"

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


export default class UpdateInventory extends Component {
  constructor() {
    super()
  
    this.state = {
       qty: ""
    }
  }
  

  handleChange = (event) => {
    this.setState({
            [event.target.name]: event.target.value,
        })
    }

    
  render() {
    return (
      <div>
        
                    

         
         <Mutation mutation={UPDATE_PRODUCT} key={this.props._id}>
                  {(updateProduct, { loading, error }) => (
                    
                    <form onSubmit={e => {
                        e.preventDefault();
                        console.log(this.props, this.state)
                      updateProduct({ variables: { _id: this.props._id, title: this.props.title, qty: this.state.qty, imageURL: this.props.imageURL, productURL: this.props.productURL } });
                      }}>
                      <div className="buttonGroup">
                          <TextField
                              defaultValue={this.props.qty}
                              name="qty"
                              onChange={this.handleChange}
                              style={{width: '4em', textAlign: 'right', marginRight: '1em', backgroundColor: ''}}
                              inputStyle={{ textAlign: 'right', color: 'white' }}
                              floatingLabelText="Inventory"
                              floatingLabelStyle={{ color: 'white' }}
                              className="qtyTextField"

                              />
                          <RaisedButton
                              style={{ marginBottom: '1em', marginRight: '1em' }}
                              type="submit"
                              >
                              Update
                          </RaisedButton>
                      </div>
                  </form>
                    
                  )}
                </Mutation>
              
      </div>
    )
  }
}
