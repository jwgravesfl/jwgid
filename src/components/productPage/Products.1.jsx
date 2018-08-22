import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Card, { CardMedia } from 'material-ui/Card'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import img from '../../assets/inventoryImages/blackGuitar.jpg'
import styled from 'styled-components'
import EditProduct from './EditProduct'





const GridColumnMainDiv = styled.div `
    background-color: ;
    text-align: center;
    width: 100%;
    height: 100%;

   #productImage {
       height: 100%;
       width: 100%;
       position: absolute;
       top: 0;
       left: 0;
   }

   .mediaContainer{
       height: 100%;
       width: 100%;
   }

   .editProduct{
       background-color: black;
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
            <Grid container spacing={24}>

            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                    
                return data.allProducts.map(({ title, qty, _id, imageURL, productURL }) => (
                        
                            <GridColumnMainDiv key={_id}>
                            
                                <Grid item xs={12}>
                                <Paper >xs=12</Paper>
                                </Grid>
                                
                                <Card className="cardContainer">
                               <CardMedia className="mediaContainer">
                                   
                               <img src={imageURL} alt="imageURL" id="productImage" />
                               <EditProduct
                                    className="editProduct"
                                    title={title}
                                    qty={qty}
                                    _id={_id}
                                    imageURL={imageURL}
                                    productURL={productURL}
                                    data={data}
                                />
                                </CardMedia>
                                </Card>  
                            </GridColumnMainDiv>
                ));
                
            }}
            </Grid>
        </Query>
    )
  }
}