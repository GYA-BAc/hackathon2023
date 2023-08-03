import React from "react"

import "./style.css"
import SectionHeader from "../SectionHeader"

export default function About() {
    return <section className={"footer-section"} data-scroll-section>
        <SectionHeader title="Lorem Ipsum Dolor"/>
        <h1 className="footer-content" id="footer-text">
            Lorem Ipsum Dolor, consectetur adipiscing elit...
        </h1>
    </section>
}