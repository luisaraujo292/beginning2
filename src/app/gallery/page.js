'use client'

import React from 'react';
import ImageGalery from 'react-image-gallery';

const images = [
  {
    original:  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg"
    //thumbnail: "kdjdjdkd ..."
  },
  {
    original:  "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg"
    //thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg"
  }
]

function App() {
  return (
    <div className="App">
      <ImageGalery items={images} showPlayButton={false} showFullscreenButton={false} slideDuration={500}></ImageGalery>
    </div>
  )
}

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
