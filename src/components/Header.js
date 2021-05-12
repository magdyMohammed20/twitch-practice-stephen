import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Twitch.com</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav w-100">
                <li className="nav-item active">
                    <Link className="nav-link" to="/" >Streamer</Link>
                </li>
                <li className="nav-item ml-auto">
                    <Link className="nav-link" to="/"> All Streams </Link>
                </li>
                <GoogleAuth/>
                </ul>
            </div>
        </nav>
    )
}

export default Header
