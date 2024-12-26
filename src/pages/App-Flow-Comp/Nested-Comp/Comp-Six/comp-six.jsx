import React, { useState, useEffect } from "react";

//styles
import "./comp-six.scss";

//imgs
import Frame from 'assets/imgs/app-flow/Frame944.png';
// const Frame = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/app-flow/Frame944.png';


export default function CompSix(props) {
    const [isHover, setHover] = useState(false)

    function handleMouseEvent() {
        setHover(prev => { return !prev })
    }

    useEffect(() => {
        props.HoverID === 6 && setTimeout(handleMouseEvent, 200)
    }, [props.HoverID])

    return (
        <div className="comp-six-main-container" >
            <img src={Frame} alt="" className="img-frame" />

            <p className="heading"><b>Setting</b></p>

            <div className="huge-text">
                <b>
                    Setting
                </b>
            </div>
        </div>
    )
}