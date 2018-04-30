import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Grid } from 'semantic-ui-react'
import Card, { CardActions, CardMedia, CardTitle } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'


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
                            key={_id}
                            >
                            <GridColumnMainDiv>
                                <Card 
                                    expandable
                                    style={{ height: '30vh'}}
                                    >
                                    
                                    <CardMedia
                                    expandable
                                    overlay={<CardTitle title={title} subtitle={qty} />}
                                    >
                                    <a href={productURL}></a>
                                    </CardMedia>
                                    <CardActions
                                    showExpandableButton
                                    >
                                        
                                        <RaisedButton label="Default" style={{textSize: '100%'}} />
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