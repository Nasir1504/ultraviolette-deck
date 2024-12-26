import React, { useState, useEffect } from "react";

//styles
import "./comp-three.scss";

//imgs

import Frame from 'assets/imgs/app-flow/Frame938.png';
import Frame1 from 'assets/imgs/app-flow/image32.png';

// const Frame = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/app-flow/Frame938.png';
// const Frame1 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/app-flow/image32.png';

export default function CompThree(props) {

    const [isHover, setHover] = useState(false)

    function handleMouseEvent() {
        setHover(prev => { return !prev })
    }


    useEffect(() => {
        props.HoverID === 3 && setTimeout(handleMouseEvent, 200)
    }, [props.HoverID])

    return (
        <div className="comp-three-main-container" >
            <img src={Frame} alt="" className="img-frame" />

            <p className="heading"><b>Modes</b></p>

            <img src={Frame1} alt="" className="img-frame1" />

            <div className="huge-text">
                <b>
                    Modes
                </b>
            </div>

        </div>
    )
}