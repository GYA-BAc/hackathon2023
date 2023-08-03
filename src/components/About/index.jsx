import React from "react"
import SectionHeader from "../SectionHeader"
import gsap from "gsap"

import "./style.css"

export default function About() {

    return <section className={"about-section"} data-scroll-section>
        <SectionHeader title="about"/>
        <p id="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </section>
}