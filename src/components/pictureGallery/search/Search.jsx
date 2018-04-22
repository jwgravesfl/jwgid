import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { MuiThemeProvider } from 'material-ui/styles'

export default class componentName extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '8769274-ea0166291a5fe7826c0e290e7',
        images: []
    }


  render() {
    return (
    <MuiThemeProvider>
        <div>
          <TextField
            name="searchText"
            value={this.onTextChange}
            floatingLabelText="Search For Images"
            fullWidth={true}
          />   
        </div>
    </MuiThemeProvider>
    )
  }
}
