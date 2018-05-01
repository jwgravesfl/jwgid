import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Grid } from 'semantic-ui-react'
import Card, { CardActions, CardMedia, CardTitle } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'


import styled from 'styled-components'

const GridColumnMainDiv = styled.div `
    padding: ;
    background-color: red;
    text-align: center;

    .inventoryButton {
        position: absolute;
            bottom: 0;
            right: 0;
    }
    
        img {
            width: 100%;
            height: 100%;
            position: relative;
            top: 0;
            left: 0;
        }

    .inventoryButton {
        position: absolute;
            bottom: 10%;
            right: 0;
    }
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
                                    style={{ height: '100%', width: '100%'}}
                                    >
                                    <img src={imageURL} style={{ width: '100%', height: '100%' }}/>
                                     
                                    <CardActions                                   
                                    >
                                    <RaisedButton className="inventoryButton" label="Inventory" style={{textSize: '100%'}} />
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