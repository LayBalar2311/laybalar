import React, { useEffect } from "react";
import './preorder.css';
import { preLoaderAnim } from "..";

const PreLoad = () => {

    useEffect(()=>{
preLoaderAnim();
    },[]);



    return (
        <div className="preloader">
            <div className="text-container">
                <span>Welcom to</span>
                <span>Lay Balar's</span>
                <span>Potfolio</span>
            </div>
        </div>
    );
}

export default PreLoad;
