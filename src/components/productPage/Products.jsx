import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Card, { CardMedia, CardTitle } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


import styled from 'styled-components'

const GridColumnMainDiv = styled.div `
    background-color: ;
    text-align: center;
    width: 100%;
    height: 100%;

   }

    .qtyTextField {
    }

    .buttonGroup {
      text-align: right;
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
                                <Card>
                                <CardMedia
                                    overlay={<CardTitle title="Name of Product" subtitle={title} />}
                                    >
                                        <img src={imageURL} alt="" />
                                </CardMedia>
                                    <div className="buttonGroup">
                                        <TextField
                                            defaultValue={qty}
                                            name="qty"
                                            style={{width: '4em', textAlign: 'right', marginRight: '1em', backgroundColor: ''}}
                                            inputStyle={{ textAlign: 'right' }}
                                            floatingLabelText="Inventory"
                                            floatingLabelStyle={{ color: 'black' }}
                                            className="qtyTextField"
                                            />
                                        <RaisedButton
                                            style={{ marginBottom: '1em', marginRight: '1em' }}
                                            >
                                            Update
                                        </RaisedButton>
                                    </div>
                                </Card>  
                            </GridColumnMainDiv>
                ));
            }}
        </Query>
    )
  }
}