import React from "react"

import "./style.css"

export default function Featured() {
    return <section className={"featured-section"} data-scroll-section>
        <div className="container">

            <div className="box" data-scroll>
                <div className="content">
                    {/*edit image in this box from css*/}
                </div>
            </div>

            <div className="box" data-scroll>
                <div className="content">
                    <p>hi2</p>
                </div>
            </div>

            <div className="box" data-scroll>
                <div className="content">
                    <img src="favicon.ico"></img>
                    <p>hi3</p>
                </div>
            </div>

            <div className="box" data-scroll>
                <div className="content">
                    <img src="favicon.ico"></img>
                    <p>hi4</p>
                </div>
            </div>

            <div className="box" id="hidden">
                <div className="content">
                    <img src="favicon.ico"></img>
                    <p>hi5</p>
                </div>
            </div>

            <div className="box" id="hidden">
                <div className="content">
                    <img src="favicon.ico"></img>
                    <p>hi6</p>
                </div>
            </div>

            <div className="box" data-scroll>
                <div className="content">
                    <img src="favicon.ico"></img>
                    <p>hi7</p>
                </div>
            </div>

            <div className="box" data-scroll>
                <div className="content">
                    <img src="favicon.ico"></img>
                    <p>hi8</p>
                </div>
            </div>

            <div className="box" id="hidden">
                <div className="content">
                    <img src="favicon.ico"></img>
                    <p>hi9</p>
                </div>
            </div>

            <div className="box" data-scroll>
                <div className="content">
                    <img src="favicon.ico"></img>
                    <p>hi10</p>
                </div>
            </div>
                

        </div>
    </section>
}