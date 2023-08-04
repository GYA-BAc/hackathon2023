import React, { useEffect } from "react"

import "./style.css"
import { Link } from "react-router-dom"



export default function Navbar() {
    
    // BUG!!! Doesn't work in production
    const scrollToAbout = () => {
        const about = document.querySelector(".about-section")
        about.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const scrollToCredits = () => {
        const credits = document.querySelector(".gallery-section")
        credits.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    


    return (
        <div className={"navbar-section"} data-scroll-section>
            <button onClick={scrollToAbout} className="about-link" id="link">About</button>
            <button onClick={scrollToCredits} className="credits-link" id="link">Credit</button>
            <Link to="/demo" id="link">Try It!</Link>
        </div>
    )
}