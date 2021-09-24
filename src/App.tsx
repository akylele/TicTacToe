import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import ContextWrapper from "./helpers/contextWrapper";
import Routes from "./routes";

import './styles/index.scss'


const App = () => {
    const routes = Routes()

    return (
        <Router>
            <div className="App">
                <ContextWrapper>
                    {routes}
                </ContextWrapper>
            </div>
        </Router>
    )
}

export default App;
