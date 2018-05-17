import React, { Component } from 'react'
import {Mutation} from 'react-apollo'
import gql from "graphql-tag";
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'

const DeleteProductMainDiv = styled.div `
  float: right;
`

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($_id: ID!){
        deleteProduct(_id: $_id)
        {
          title
          qty
          imageURL
          productURL
        }
      }
`;

export default class DeleteProduct extends Component {
   render() {
    return (
      <DeleteProductMainDiv>
        
        <Mutation mutation={DELETE_PRODUCT} key={this.props._id}>
                  {(deleteProduct, { loading, error }) => (
                    <div className="buttonGroup">
                      <RaisedButton
                        onClick={e => {
                        console.log(this.props, this.state)
                        deleteProduct({ variables: { _id: this.props._id } });
                        window.location.reload()
                        }}
                        style={{ marginBottom: '1em', marginRight: '1em' }}
                        type="button"
                      >
                        Delete
                      </RaisedButton>
                    </div>
                  )}
                </Mutation>
      </DeleteProductMainDiv>
    )
  }
}
