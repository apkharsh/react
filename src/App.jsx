import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// library.add(fab, faCheckSquare, faCoffee)

import "./index.css";

export default function Card() {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-img"></div>
                <div className="card-body">
                    <p className="card-title">Laura Smith</p>
                    <p className="card-text">Frontend Developer</p>
                    <p className="card-description">laurasmith.website</p>
                    <div className="card-social">
                        <button className="email">
                            <i className="fa-solid fa-envelope"></i>
                            <p className="icon-text">Email</p>
                        </button>
                        <button className="linkedin">
                            <i className="fa-brands fa-linkedin"></i>
                            <p className="icon-text">Linkedin</p>
                        </button>
                    </div>
                    <div className="main">
                        <div className="about">
                            <h1>About</h1>
                            <p>
                                I am a frontend developer with a particular
                                interest in making things simple and automating
                                daily tasks. I try to keep up with security and
                                best practices, and am always looking for new
                                things to learn.
                            </p>
                        </div>
                        <div className="about">
                            <h1>Interests</h1>
                            <p>
                                Food expert. Music scholar. Reader. Internet
                                fanatic. Bacon buff. Entrepreneur. Travel geek.
                                Pop culture ninja. Coffee fanatic.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="social-icons">
                        <i className="fa-brands fa-2x fa-square-twitter"></i>
                        <i className="fa-brands fa-2x fa-square-facebook"></i>
                        <i className="fa-brands fa-2x fa-square-instagram"></i>
                        <i className="fa-brands fa-2x fa-square-github"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
