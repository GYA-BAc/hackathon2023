import React from "react";
import UploadPhoto from "../DemoUploadPhoto";
import { Link } from "react-router-dom"
import UserProfile from "../DemoUserProfile";

import "./style.css"

export default function UserPanel() {

    return (
        <>
            <div className="side-panel-container">
                <Link to="/" id="link">
                    <img className="menu" src="/assets/menu.png"></img>
                </Link>
                <UserProfile/>
                <div className="error-panel" hidden></div>
            </div>

            <div className="bottom-panel-container">
                <UploadPhoto/>
            </div>
        </>
    )

}