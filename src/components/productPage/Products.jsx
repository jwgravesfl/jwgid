import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Card, { CardActions, CardMedia, CardHeader, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import styled from 'styled-components'

const ProductsMainDiv = styled.div `

    .cardContainter {
        width: 10vh;

        img {
            width: 10vh;
        }
    }

    .cardImage {
        width: 10vh;
    }
`

export default class Products extends Component {
  render() {
    return (
        <ProductsMainDiv>
      <div>
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
                <span key={_id}>
                        <Card className="cardContainer">
                            <CardHeader
                            title={title}
                            subtitle={qty}
                            />
                            <CardMedia
                            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                            >
                            <a href={productURL}><img src={imageURL} alt="" className="cardImage"/></a>
                            </CardMedia>
                            <CardActions>
                            <FlatButton label="Action1" />
                            <FlatButton label="Action2" />
                            </CardActions>
                        </Card>

                    <p>{`${title}: ${qty}: ${imageURL}: ${productURL} `}</p>
                </span>
                ));
            }}
        </Query>
      </div>
      </ProductsMainDiv>
    )
  }
}