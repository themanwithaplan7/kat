import {Link, Route} from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";


function Nav () {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);
  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

    return (
        <div>
        <Styles.Wrapper>
      <CSSReset />

      <Navbar.Wrapper>
        <Navbar.Logo>MISTRESS KAT</Navbar.Logo>

        <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
          <HamburgerButton.Lines />
        </HamburgerButton.Wrapper>

        <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
          <Navbar.Item>
            <Link to="/" className="title">HOME</Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="/about">ABOUT</Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="/contact" className="contact">CONTACT ME</Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="/gallery" className="gallery">GALLERY</Link>
          </Navbar.Item>
          
        </Navbar.Items>
      </Navbar.Wrapper>
      
    </Styles.Wrapper>
    
      
      </div>


        // <div>
        // <nav>
        //     <ul id="nav">
        //         <li>
        //             <Link to="/" className="title">MISTRESS KAT</Link>
        //         </li>
        //         <li>
        //             <Link to="/about">About</Link>
        //         </li>
        //         <li>
        //             <Link to="/contact" className="contact">Contact Me</Link>
        //         </li>
        //         <li>
        //             <Link to="/gallery" className="gallery">Gallery</Link>
        //         </li>
        //     </ul>
        
        // </nav>
        // </div>
        );
}

const Styles = {
    Wrapper: styled.main`
      display: flex;
      background-color: #eeeeee;

    `
  };
  
  const Navbar = {
    Wrapper: styled.nav`
      flex: 1;
  
      align-self: flex-start;
  
      padding: 1rem 3rem;
  
      display: flex;
      justify-content: space-between;
      align-items: center;
  
      background-color: white;
  
      // 40em == 640px
      @media only screen and (max-width: 40em) {
        position: fixed;
        width: 100%;
        bottom: 0;
      }
    `,
    Logo: styled.h1`
      border: 1px solid gray;
      padding: 0.5rem 1rem;
      color: black;
    `,
    Items: styled.ul`
      display: flex;
      list-style: none;
  
      @media only screen and (max-width: 40em) {
        position: fixed;
        right: 0;
        top: 0;
        height: 100%;
  
        flex-direction: column;
  
        background-color: white;
        padding: 1rem 2rem;
  
        transition: 0.2s ease-out;
  
        transform: ${({ openDrawer }) =>
          openDrawer ? `translateX(0)` : `translateX(100%)`};
      }
    `,
    Item: styled.li`
      padding: 0 1rem;
      cursor: pointer;
  
      @media only screen and (max-width: 40em) {
        padding: 1rem 0;
      }
    `
  };
  
  const HamburgerButton = {
    Wrapper: styled.button`
      height: 3rem;
      width: 3rem;
      position: relative;
      font-size: 12px;
  
      display: none;
  
      @media only screen and (max-width: 40em) {
        display: block;
      }
  
      /* Remove default button styles */
      border: none;
      background: transparent;
      outline: none;
  
      cursor: pointer;
  
      &:after {
        content: "";
        display: block;
        position: absolute;
        height: 150%;
        width: 150%;
        top: -25%;
        left: -25%;
      }
    `,
    Lines: styled.div`
      top: 50%;
      margin-top: -0.125em;
  
      &,
      &:after,
      &:before {
        /* Create lines */
        height: 2px;
        pointer-events: none;
        display: block;
        content: "";
        width: 100%;
        background-color: black;
        position: absolute;
      }
  
      &:after {
        /* Move bottom line below center line */
        top: -0.8rem;
      }
  
      &:before {
        /* Move top line on top of center line */
        top: 0.8rem;
      }
    `
  };
  
  const CSSReset = createGlobalStyle`
    *,
    *::before, 
    *::after {
      margin: 0; 
      padding: 0;
      box-sizing: inherit;
    }
  
    html {
      font-size: 62.5%; /*1rem = 10px*/
      box-sizing: border-box;      
    }  
  
    body {
      font-size: 1.4rem;
      font-family: sans-serif;
    }
    `;

export default Nav;