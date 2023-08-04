import React, { useEffect } from "react"
import gsap from "gsap"

import "./style.css"


export default function Header() {

    useEffect (() => {

        gsap.to("#header-text", {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
        })
    })

    return <section className={"header-section"} data-scroll-section>
        <ul className="header-menu">
            <li>Eco-Friendly</li>
            <li>Empowering</li>
            <li>Engaging</li>
        </ul>

        <h1 id="header-text">Eco Trace</h1>

        


    </section>
}