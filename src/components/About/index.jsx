import React from "react"
import SectionHeader from "../SectionHeader"
import gsap from "gsap"

import "./style.css"

export default function About() {

    return <section className={"about-section"} data-scroll-section>
        <SectionHeader title="about"/>
        <p id="about-text">
        EcoTrace is an AI-powered web app designed to revolutionize waste management and recycling. It aims to solve the problem of improper waste disposal and promote sustainable practices. The app provides users with real-time guidance on how to categorize and recycle various items to reduce environmental impact effectively, as well as a community of likeminded individuals.
        </p>
    </section>
}