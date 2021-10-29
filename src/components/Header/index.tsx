import React from 'react'
import "./header.scss"

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="header-logo">DEMO Streaming</h1>
                <nav className="header-menu">
                    <a href="/" className="header-menu--item">Log in</a>
                    <a href="/" className="header-menu--item header-menu--item-bg">Start your free trial</a>
                </nav>
            </div>
        </header>
    )
}
