import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const updateProduct = gql`
    mutation{
        updateProduct(_id: "",input:{
            title: "Guitar Straps"
            qty: 2
            imageURL: ""
            productURL: ""
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
            qty: ''
        };

    }

    onSubmit = e => {
        e.preventDefault();
        addTodo({ variables: { type: this.props._id } });
        input.value = "";
      }



    render() {
        return(
            
            <form onSubmit={this.onSubmit}>
                <div className="buttonGroup">
                    <TextField
                        defaultValue={this.props.qty}
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
            </form>
            
        );
    }
}

UpdateInventory.propTypes = {

};

export default UpdateInventory;