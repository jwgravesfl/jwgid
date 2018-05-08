import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import styled from 'styled-components'

import UpdateProductInfo from './UpdateProductInfo'

const UpdateProfileInfoMainDiv = styled.div`


    .editSaveButton {
        position: absolute;
        top: 2%;
        left: 2%;
        z-index: 9999;
    }
`

export default class UpdateProfileInfo extends Component {
    constructor() {
        super()
      
        this.state = {
          editSaveButton: false,
        }
        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleSaveClick = this.handleSaveClick.bind(this)
      }
  
      handleEditClick = (e) => {
          this.setState({ 
              showProductInfoModal: true,
           })
           console.log(this.state)
        }
      
        handleSaveClick = (e) => {
          this.setState({
              showProductInfoModal: false,
          })
        }
  render() {
    let showProductInfoModal = this.state.showProductInfoModal
    return (
        <UpdateProfileInfoMainDiv>
            <div>
                 {showProductInfoModal ? 
                    <div>
                        <UpdateProductInfo title={this.props.title} qty={this.props.qty} _id={this.props._id} imageURL={this.props.imageURL} productURL={this.props.productURL} data={this.props.data} showProductInfoModal={ showProductInfoModal }/>
                        <RaisedButton
                            className="editSaveButton"
                            onClick={this.handleSaveClick}
                            >
                            Close
                        </RaisedButton>
                    </div>
                    :
                    <div>
                        <RaisedButton
                         onClick={this.handleEditClick}
                         className="editSaveButton"
                         >
                            Edit
                        </RaisedButton>
                    </div>
                }
         </div>
      </UpdateProfileInfoMainDiv>
    )
  }
}
