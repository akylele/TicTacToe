import React from 'react'

import Main from "./components/Main";
import ContextWrapper from "./helpers/contextWrapper";

const App = () => (
    <div className="App">
        <ContextWrapper>
            <Main/>
        </ContextWrapper>
    </div>
)

export default App;
