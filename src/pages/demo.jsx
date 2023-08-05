import React from "react";
import UserPanel from "../components/DemoUserPanel";

import "./demo.css"
import Posts from "../components/DemoPosts";

const Demo = () => {
    return (
        <>
        <div className="Demo" id="main-container" data-scroll-container>
            <UserPanel/>

            <Posts/>
        </div>
        </>
    );
};

export default Demo