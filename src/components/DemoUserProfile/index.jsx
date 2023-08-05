import React from "react";

import "./style.css"

export default function UserProfile() {

    return (
        <>
            <div className="profile-container">
                <img className="user-photo" src="/assets/pfp.png"></img>
                <div className="user">
                    @TestUser
                </div>
                <h5>Hello! I like recycling and being green.</h5>
            </div>

        </>
    )

}