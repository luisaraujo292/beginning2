'use client'

import React from 'react';
import foto from './logo.svg';

function App() {
    const logo = require('./logo.svg');
    return (
      <dev>
        <h1>My First Page! - changed</h1>
        <img src={logo} alt="Problem!"></img>
      </dev>
    )
}

export default App;
