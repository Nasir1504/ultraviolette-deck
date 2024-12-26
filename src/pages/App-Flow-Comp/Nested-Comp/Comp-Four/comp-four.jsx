import React, { useState, useEffect } from "react";

//styles
import "./comp-four.scss";

//imgs
import Frame from 'assets/imgs/app-flow/Frame942.png';
// const Frame = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/app-flow/Frame942.png';

export default function CompFour(props) {
    const [isHover, setHover] = useState(false)

    function handleMouseEvent() {
        setHover(prev => { return !prev })
    }

    useEffect(() => {
        props.HoverID === 4 && setTimeout(handleMouseEvent, 200)
    }, [props.HoverID])

    return (
        <div className="comp-four-main-container" >
            <img src={Frame} alt="" className="img-frame" />

            <p className="heading"><b>Dashboard</b></p>

            <div className="huge-text">
                <b>
                    Dashboard
                </b>
            </div>

        </div>
    )
}