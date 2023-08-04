import React from "react";
import UserPanel from "../components/DemoUserPanel";
import UploadPhoto from "../components/DemoUploadPhoto";

import "./demo.css"

const Demo = () => {
    return (
        <>
        
        <div className="Demo" id="main-container" data-scroll-container>
            <UserPanel/>
        </div>
        </>
    );
};

export default Demo