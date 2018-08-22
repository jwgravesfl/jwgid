import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'

import styled from 'styled-components'
import bgImg from './assets/gotgpp.jpg' 

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost"
import 'bootstrap/dist/css/bootstrap.min.css'

const client = new ApolloClient({
  uri: "https://gql-api-kdwnwzplsd.now.sh/graphql"
})

const IndexDiv = styled.div`
    flex: 1;
    .indexDivContainer {
      background-image: url(${bgImg});
      background-repeat: no-repeat;
      background-size: 100vw 100vh;
      background-attachment: fixed;
    }
`;

ReactDOM.render(
  <ApolloProvider client={client}>
    <IndexDiv>
        <div className="indexDivContainer">
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </div>
    </IndexDiv>
    </ApolloProvider>,

document.getElementById('root'));
registerServiceWorker();
