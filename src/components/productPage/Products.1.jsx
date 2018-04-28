import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Card, { CardActions, CardMedia, CardHeader, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'


import styled from 'styled-components'

const Wrapper = styled.div`
    .wrapper {
        display:inline-grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 1vmax;
        grid-auto-rows: minmax(100px, 100px)
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
               
                       <Wrapper className="wrapper" key={_id}>
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
                        </Wrapper>
                ));
            }}
        </Query>
 
    )
  }
}