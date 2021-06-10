import logo from './logo.svg';
import kat1 from './kat1.png';
import kat2 from './kat2.png';
import kat3 from './kat3.png';
import ImageComponent from "./ImageComponent";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./Nav";
// import Lightbox from 'react-lightbox-component';
// import "react-lightbox-component/build/css/index.css";
import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
  kat1,
  kat2,
  kat3
]

export default class App extends React.Component {
  


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/gallery">
              <Gallery/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
            
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home () {
  return (
    <div>
      <Nav/>
      <p>Can you see me</p>
    <div className="container">
        
        <p>
          ------------Placeholder---------------
        </p>
        
      </div>
    </div>
  )
}

function About () {
  return (
    <div>
      <Nav/>
      <div className="container">
        <body>
          <hr style={{ backgroundColor: 'white' }} />
          <h2 style={{ textAlign: 'center' }}>In Person Sessions</h2>
          <div className="empty" style={{ padding: "100px" }}></div>
         
          <div className="empty" style={{ padding: "100px" }}></div>
          <p>About</p>
        </body>
      </div>
    </div>
  );
}

function Contact () {
  return( 
  <div>
    <Nav/>
    <div className="container">
      <body>
        <p>Contact me</p>
      </body>
    </div>
  </div>
  )
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      
      <div>
        <Nav/>
        <div id='gallery'>
       
          <img src={kat1} onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
          <img src={kat2} onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
          <img src={kat3} onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
        
        </div>
      
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            mainSrcThumbnail={kat1}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}