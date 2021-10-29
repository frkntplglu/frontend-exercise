import React from 'react'
import "./footer.scss"
import appStore from "../../assets/app_store.png"
import googlePlay from "../../assets/google_play.png"
import microsoft from "../../assets/microsoft.png"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer-navigation">
                    <a href="/" className="footer-navigation--item">Home</a>
                    <a href="/" className="footer-navigation--item">Terms and Conditions</a>
                    <a href="/" className="footer-navigation--item">Privacy Policy</a>
                    <a href="/" className="footer-navigation--item">Collection Statement</a>
                    <a href="/" className="footer-navigation--item">Help</a>
                    <a href="/" className="footer-navigation--item">Manage Account</a>
                </nav>
                <div className="footer-copyright">Copyright © 2016 DEMO Streaming. All Rights Reserved.</div>
                <div className="footer-bottom">
                    <div className="footer-social">
                        <a href="/" className="footer-social--link">FB</a>
                        <a href="/" className="footer-social--link">TW</a>
                        <a href="/" className="footer-social--link">INS</a>
                    </div>
                    <div className="footer-apps">
                        <a href="/" className="footer-apps--link"><img src={appStore} alt="App Store" /></a>
                        <a href="/" className="footer-apps--link"><img src={googlePlay} alt="Google Play Store" /></a>
                        <a href="/" className="footer-apps--link"><img src={microsoft} alt="Microsoft Store" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
