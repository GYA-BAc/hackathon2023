import React from "react";
import UploadPhoto from "../DemoUploadPhoto";

import "./style.css"

export default function UserPanel() {

    return (
        <>
            <div className="side-panel-container">
            </div>

            <div className="bottom-panel-container">
                <UploadPhoto/>
            </div>
        </>
    )

}