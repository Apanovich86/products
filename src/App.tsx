import React from 'react';
import './App.css';
import usePrevious from './CustomHooks'

const App = () => {
    const usePreviousValue = usePrevious.usePrevious(100);
    return (
        <div>
<div>{usePreviousValue}</div>
        </div>
    );
};

export default App;

