import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Card, { CardActions, CardMedia, CardHeader, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'


import styled from 'styled-components'

const Wrapper = styled.span`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1px;
        background-color: black;

    .productCard {
        background-color: blue;
    }
`

export default class Products extends Component {
  render() {
    return (
   
        <Query
            query={gql`
                {
                    allProducts {
                    title
                    _id
                    qty
                    imageURL
                    productURL
                    }
                }
            `}
            >
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
        
                return data.allProducts.map(({ title, qty, _id, imageURL, productURL }) => (
                <Wrapper>
                    <div className="productCard">
                        
                                {title}
                                {qty}
                                
                           
                    </div>
                    </Wrapper>
                ));
            }}
        </Query>
 
    )
  }
}