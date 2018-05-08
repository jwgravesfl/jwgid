import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Card, { CardMedia, CardTitle } from 'material-ui/Card'

import UpdateInventory from './UpdateInventory'
import UpdateProfileInfo from './UpdateProfileInfo'



import styled from 'styled-components'

const GridColumnMainDiv = styled.div `
    background-color: ;
    text-align: center;
    width: 100%;
    height: 100%;

   }

    .qtyTextField {
    }

    .productOverlay {
        height: 100%;
    }

    .buttonGroup {
      background-color: ;  
    }
    
    .raisedButton {
        
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
                        
                            <GridColumnMainDiv key={_id}>
                                <Card style={{ height: '100%' }}>
                               
                                
                               
                                <CardMedia
                                    overlayContainerStyle={{ height: '100%' }}
                                    overlay={
                                    <div id="productOverlay">
                                    <CardTitle 
                                        titleColor="white"
                                        titleStyle={{  }}
                                        title={title}
                                        />
                                    <UpdateProfileInfo title={title} qty={qty} _id={_id} imageURL={imageURL} productURL={productURL} data={data}/>
                                    <UpdateInventory title={title} qty={qty} _id={_id} imageURL={imageURL} productURL={productURL} data={data}/>
                                    </div>
                                    }
                                    >
                                    <img src={imageURL} alt="imageURL" />
                                </CardMedia>
                                    
                                </Card>  
                            </GridColumnMainDiv>
                ));
            }}
        </Query>
    )
  }
}