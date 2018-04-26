import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomeMainBody from './homepage/HomeMainBody'

import TimeSlot from './signupSheet/TimeSlot'
import Github from './github/Github'
import PictureGallery from './pictureGallery/search/Search'
import StickyNote from './stickyNote/StickyNote'
import ProductPage from './productPage/ProductPage'
import ShoppingCart from './productPage/ShoppingCart'

import styled from 'styled-components'

  const MainDiv = styled.div`
    .mainDivContainer {
  
    }
`

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)  
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute =({ component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
    ? <Component {...props} />
    : <Redirect /> 
  )} />
)

const Main = () => (
  <MainDiv>
    <main className="mainDivContainer">
      <Switch>
        <Route exact path='/' component={HomeMainBody} />
        <Route path='/timeslot' component={TimeSlot} />
        <Route path='/github' component={Github} />
        <Route path='/picturegallery' component={PictureGallery} />
        <Route path='/stickynote' component={StickyNote} />
        <Route path='/productpage' component={ProductPage} />
        <PrivateRoute path='/shoppingcart' component={ShoppingCart} />

      </Switch>
    </main>
  </MainDiv>
)

export default Main