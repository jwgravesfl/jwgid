import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

import styled from 'styled-components'
import CreateProduct from './CreateProduct';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

 

const ProductPageDiv = styled.div`
    .productPageContainer {
        background-color: red

        @media only screen and (max-width: 767px) {
         
      }
    }
`
  const Products = () => (
    <Query
      query={gql`
        {
          allProducts {
          title
          _id
          qty
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
  
        return data.allProducts.map(({ title, qty, _id }) => (
          <div key={_id}>
            <p>{`${title}: ${qty}`}</p>
          </div>
        ));
      }}
    </Query>
  );



export default class ProductPage extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <ProductPageDiv>
          <div className="productPageContainer">
            <CreateProduct/>
            <Products/> 
          </div>  
        </ProductPageDiv>
      </MuiThemeProvider>
    )
  }
}