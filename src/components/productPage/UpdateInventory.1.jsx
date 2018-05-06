import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import gql from "graphql-tag"

const updateProduct = gql`
    mutation{
        updateProduct(_id: $_id,input:{
            title: $title,
            qty: $qty,
            imageURL: $imageURL,
            productURL: $productURL,
        }){
            _id
            title
            qty
            imageURL
            productURL
        }
    }
`

class UpdateInventory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            _id: this.props._id,
            title: this.props.title,
            qty: this.props.qty,
            imageURL: this.props.imageURL,
            productURL: this.props.productURL
        };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    })
    console.log(this.state, this.props)
}

 onSubmit = (e) => {
    e.preventDefault(); 
    updateProduct({ variables: { id: this.props.id } }(this.state.title, this.state.qty, this.state.imageURL, this.state.productURL));
     
   }
   
    render() {

        return(
            
            <form onSubmit={this.onSubmit}>
                <div className="buttonGroup">
                    <TextField
                        defaultValue={this.state.qty}
                        name="qty"
                        onChange={this.handleChange}
                        style={{width: '4em', textAlign: 'right', marginRight: '1em', backgroundColor: ''}}
                        inputStyle={{ textAlign: 'right' }}
                        floatingLabelText="Inventory"
                        floatingLabelStyle={{ color: 'black' }}
                        className="qtyTextField"
                        />
                    <RaisedButton
                        style={{ marginBottom: '1em', marginRight: '1em' }}
                        type="submit"
                        >
                        Update
                    </RaisedButton>
                </div>
            </form>
            
        );
    }
}

UpdateInventory.propTypes = {

};

export default UpdateInventory;