import React from 'react';
import Welcome from './components/Welcome/Welcome.js'
import classNames from 'classnames';
import useSticky from './useSticky';
import About from './components/About/About.js'
import Navbar from './components/Navbar/Navbar.js';
import Certs from './components/Certs/Certs.js';
import './App.css';

export default function App() {
  const { sticky, stickyRef } = useSticky();
  return (
    <>
      <header className="header">
        <Welcome></Welcome>
      </header>
      <nav ref={stickyRef} className={classNames('nav', { sticky })} style={{'z-index': '3'}}>
        <Navbar></Navbar>
      </nav>
      <div
        style={{
          height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
        }}
      />
      <main className="content" />
       <div>
        <About></About>
        <Certs></Certs>
      </div>
    </>
  );
}
