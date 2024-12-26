import React, { useState, useEffect } from "react";

//styles
import "./comp-one.scss";

import phoneImg from 'assets/imgs/app-flow/Frame931.png';
// const phoneImg = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/app-flow/Frame931.png';

export default function CompOne(props) {
    const [isHover, setIsHover] = useState(true);



    function handleMouseHoverEvent() {
        setIsHover(prev => { return !prev })
    }
    useEffect(() => {
        props.HoverID === 1 && setTimeout(handleMouseHoverEvent, 200)
    }, [props.HoverID])

    return (
        <>
            <div className="comp-one-main-container">
                <img src={phoneImg} alt="" className="phone-img" />

                <p className="heading"><b>Splash</b> <br /> Screen</p>

                <div className="huge-text"><b>Splash</b></div>

            </div>
        </>
    )
}