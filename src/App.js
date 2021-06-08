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
import Navbar from "./Navbar";
import Carousel from 'react-bootstrap/Carousel';
import Lightbox from 'react-lightbox-component';
import "react-lightbox-component/build/css/index.css";

export default function App() {
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

function Home () {
  return (
    <div>
      <Navbar/>
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
      <Navbar name="About"/>
      <div className="container">
        <body>
          <div className="empty" style={{ padding: "400px" }}>
          </div>
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
    <Navbar/>
    <div className="container">
      <body>
        <p>Contact me</p>
      </body>
    </div>
  </div>
  )
}

function Gallery () {
  return (
    <div>
     <Navbar/>
      <head>
        <title>Gallery</title>

      </head>
      <body>
        <div>
        <Lightbox images={
            [
              {
                src: kat2,
                description: "  "
              },
              {
                src: kat1,
                description: "  "
              },
              {
                src: kat3,
                description: "  "
              }
            ]
          }
          showImageModifiers={false}
          thumbnailWidth='25%'
          thumbnailHeight='25%'/>
        </div>
      </body>
    </div>
  )
}