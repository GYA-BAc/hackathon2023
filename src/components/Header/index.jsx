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
            <li>Intro</li>
            <li>About</li>
            <li>Featured</li>
        </ul>

        <h1 id="header-text">Lorem Ipsum</h1>

        


    </section>
}