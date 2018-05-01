import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class UpdateInventory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            qty: '15'
        };

    }

    render() {
        return(
            <div>
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
            </div>
        );
    }
}

UpdateInventory.propTypes = {

};

export default UpdateInventory;