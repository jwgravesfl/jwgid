import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'


import styled from 'styled-components'
import EditProduct from './EditProduct'



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

const styles = {
    addCloseInventoryStyles: {
      width: '10vh',
      height: '10vh'
    },
  }

export default class Products extends Component {
    

  render() {
      
    return (
   <Row className="show-grid">
        <Query
            query={getProducts}
            >

            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                    
                return data.allProducts.map(({ title, qty, _id, imageURL, productURL }) => (
                    <Col xs="12" sm="6" md="6" lg="4" xl="4">
                    <Card body inverse style={{ textAlign: "center", margin: "1em", backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle>{title}</CardTitle>
                    <CardText>{qty}</CardText>
                    <CardText>{productURL}</CardText>
                    <EditProduct
                                    className="editProduct"
                                    title={title}
                                    qty={qty}
                                    _id={_id}
                                    imageURL={imageURL}
                                    productURL={productURL}
                                    data={data}
                                />
                    
                  </Card>
                    </Col>
                            
                ));
                
            }}
        </Query>
        </Row>
    )
  }
}