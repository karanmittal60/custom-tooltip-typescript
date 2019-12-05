import React from 'react';
import './App.css';
import Custom from "./components/Custom/Custom";

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>custom Tool tip example</h1>

            <div className="m-4">
                <Custom/>
            </div>

        </div>
    );
}

export default App;
