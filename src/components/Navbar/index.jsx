import React, { useEffect } from "react"

import "./style.css"



export default function Navbar() {
    


    const about = document.querySelector(".about-section")
    const scrollToAbout = () => {about.scrollIntoView({ behavior: 'smooth', block: 'center' })}

    const credits = document.querySelector(".gallery-section")
    const scrollToCredits = () => {credits.scrollIntoView({ behavior: 'smooth', block: 'start' })}



    return <div className={"navbar-section"} data-scroll-section>
    <button onClick={scrollToAbout} className="about-link">About</button>
    <button onClick={scrollToCredits} className="credits-link">Credit</button>
        <button onClick="" className="try-link">Try It!</button>
    </div>
}