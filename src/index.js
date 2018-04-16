import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'

import styled from 'styled-components'
import bgImg from './assets/gotgpp.jpg' 

const IndexDiv = styled.div`
    .indexDivContainer {
      background-image: url(${bgImg});
      background-repeat: no-repeat;
      background-size: 100vw 100vh;
      background-attachment: fixed;
    }
`;

ReactDOM.render(
    <IndexDiv>
        <div className="indexDivContainer">
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </div>
    </IndexDiv>,

document.getElementById('root'));
registerServiceWorker();
