import React from "react"

import "./style.css"

export default function About() {
    return <section className={"featured-section"} data-scroll-section>
        <div class="container">

            <div class="box" data-scroll>
                <div class="content">
                    {/*edit image in this box from css*/}
                </div>
            </div>

            <div class="box" data-scroll>
                <div class="content">
                    <p>hi2</p>
                </div>
            </div>

            <div class="box" data-scroll>
                <div class="content">
                    <img src="favicon.ico"></img>
                    <p>hi3</p>
                </div>
            </div>

            <div class="box" data-scroll>
                <div class="content">
                    <img src="favicon.ico"></img>
                    <p>hi4</p>
                </div>
            </div>

            <div class="box" id="hidden">
                <div class="content">
                    <img src="favicon.ico"></img>
                    <p>hi5</p>
                </div>
            </div>

            <div class="box" id="hidden">
                <div class="content">
                    <img src="favicon.ico"></img>
                    <p>hi6</p>
                </div>
            </div>

            <div class="box" data-scroll>
                <div class="content">
                    <img src="favicon.ico"></img>
                    <p>hi7</p>
                </div>
            </div>

            <div class="box" data-scroll>
                <div class="content">
                    <img src="favicon.ico"></img>
                    <p>hi8</p>
                </div>
            </div>

            <div class="box" id="hidden">
                <div class="content">
                    <img src="favicon.ico"></img>
                    <p>hi9</p>
                </div>
            </div>

            <div class="box" data-scroll>
                <div class="content">
                    <img src="favicon.ico"></img>
                    <p>hi10</p>
                </div>
            </div>
                

        </div>
    </section>
}