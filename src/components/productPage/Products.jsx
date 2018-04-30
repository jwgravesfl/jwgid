import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Grid } from 'semantic-ui-react'
import Card, { CardActions, CardMedia, CardHeader, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'


import styled from 'styled-components'

const GridColumnMainDiv = styled.div `
    padding: 1em;
`


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
                        <Grid.Column 
                            
                            >
                            <GridColumnMainDiv>
                                <Card>
                                    <CardHeader
                                    title={title}
                                    subtitle={qty}
                                    />
                                    <CardMedia
                                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                                    >
                                    <a href={productURL}></a>
                                    </CardMedia>
                                    <CardActions>
                                        <FlatButton label="Action1" />
                                        <FlatButton label="Action2" />
                                    </CardActions>
                                </Card>
                            </GridColumnMainDiv>
                       </Grid.Column>
                ));
            }}
        </Query>
    )
  }
}