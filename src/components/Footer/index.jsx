import React from "react"

import "./style.css"
import SectionHeader from "../SectionHeader"

export default function Footer() {
    return <section className={"footer-section"} data-scroll-section>
        <SectionHeader title="Our Mission"/>
        <h1 className="footer-content" id="footer-text">
            "EcoTrace is a way to raise awareness about the importance of the environment. By using AI to promote community engagement, it will make a significant positive impact on the planet's health."
        </h1>
    </section>
}