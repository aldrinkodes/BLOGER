// Header.js
import React, { useState } from 'react';
import { Button } from "@nextui-org/react";
import MenuIcon from "./Icons/Menu_Alt_05.svg";
import CloseIcon from "./Icons/Close_SM.svg";
import Section from "./Section";
import Footer from "./Footer";
import './Header.css';

const Header = () => {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  const openNav = () => {
    setSidePanelOpen(true);
  };

  const closeNav = () => {
    setSidePanelOpen(false);
  };

  return (
    <div className="container-1">
      <div className="header">
        <button className="openbtn" onClick={openNav}>
        <img src={MenuIcon} className="App-logo" alt="logo" />
        </button>
        <div className="title">
          <h2 className="T-H2"><span className='T-H2-Span-not'>!</span>IN<span className='T-h2-span'>DEPENDANT</span></h2>
        </div>
        {/* <div className='social'>
          <a href="#"><i id="setting" class="fa-solid fa-gear"></i></a>
        </div> */}
    </div>
      <div id="mySidepanel" className={`sidepanel ${sidePanelOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          <img src={CloseIcon} className="App-logo" alt="logo" />
        </a>
          <a className='home' href="#">
          <i id='house' class="fa-solid fa-house">
          </i>Home</a>
          <a className='contact' href="#">
          <i id='contact' class="fa-solid fa-envelope">
          </i>Contact</a>
          <a class='faq' href="#">
          <i id='faq' class="fa-solid fa-question"></i>
          FAQ</a>
          <a className='about' href="#">
          <i id="about"class="fa-solid fa-circle-info">
          </i>About</a>
        <div className='slider-end'>
        <div className='slide-bottom'><hr className="hr-end"></hr>
        <a className="support" href="#"><i id='house' class="fa-solid fa-user"></i>Support</a>
        <a className="setting" href="#"><i id='contact' class="fa-solid fa-gear"></i>Setting</a></div>
        </div>
      </div>
      <div className="hr-main">
      <hr className='hr-1'></hr></div>
      <section className="section">
      <Section />
      </section>
      <footer className="footer">
      <Footer />
    </footer>
    </div>
  );
};

export default Header;
