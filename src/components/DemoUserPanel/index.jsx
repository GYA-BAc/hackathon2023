import React from "react";
import UploadPhoto from "../DemoUploadPhoto";
import UploadDialogue from "../DemoUploadDialogue";

import "./style.css"

export default function UserPanel() {

    return (
        <>
            <UploadDialogue/>
            <div className="side-panel-container">
            </div>

            <div className="bottom-panel-container">
                <UploadPhoto/>
                <div id="webcam-container"></div>
            <div id="label-container"></div>
            </div>
        </>
    )

}