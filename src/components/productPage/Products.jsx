import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";



import styled from 'styled-components'


const getProducts = gql`
{
    allProducts {
    title
    _id
    qty
    imageURL
    productURL
    }
}
`

const ProductsMainDiv = styled.div `
        text-align: center;

        .productsContainer {
            margin-left: 15%;
            margin-right: 15%;
            text-align: justify;
            
            @media only screen and (max-width: 900px) {
                margin-left: 0;
                margin-right: 0;
            }
        }

        .productCard {
            background-color: yellow; 
            float: left;
            width: 33vw;
            height: 33vw;
            border: black solid 5px;
            

            @media only screen and (max-width: 900px) {
                width: 50%;
                height: 50%;
            }
        }
`

export default class Products extends Component {
  render() {
    return (
   
        <Query
            query={getProducts}
            >
            
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
        
                return data.allProducts.map(({ title, qty, _id, imageURL, productURL }) => (
                    <ProductsMainDiv key={_id}>
                        <a href={productURL}><div className="productsContainer">
                        <div className="productCard" style={{ backgroundImage: `url(${imageURL})` }}>
                            {title}
                            {qty}
                        </div>
                        </div>
                        </a>
                    </ProductsMainDiv>

                ));
            }}
        </Query>
    )
  }
}