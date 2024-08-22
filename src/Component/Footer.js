import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className="footer-container">
            <h2 className="f-h2">Daily Hunt</h2>
            <div className="social">
                <a href="#" className="social-link">
                    <i id="insta" className="fa-brands fa-square-instagram"></i>
                </a>
                <a href="#" className="social-link">
                    <i id="face" className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="social-link">
                    <i id="x" className="fa-brands fa-twitter"></i>
                </a>
            </div>
            <hr />
            <div className="f-para">
                <p>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit.</p>
                <button className="f-button">
                    Buy me a Coffee
                    <span className="f-coffee">
                        <i className="fa-solid fa-mug-saucer"></i>
                    </span>
                </button>
            </div>
            <div className="footer-bottom">
                &copy; 2024 | Designed by Daily Hunt Team
            </div>
        </div>
    );
};
export default Footer;