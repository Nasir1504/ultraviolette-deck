import React, { useState, useEffect } from "react";

//styles
import "./comp-five.scss";

//imgs
import Frame from 'assets/imgs/app-flow/Frame943.png';

// const Frame = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/app-flow/Frame943.png';


export default function CompFive(props) {

    const [isHover, setHover] = useState(false)

    function handleMouseEvent() {
        setHover(prev => { return !prev })
    }

    useEffect(() => {
        props.HoverID === 5 && setTimeout(handleMouseEvent, 200)
    }, [props.HoverID])


    return (
        <>
            <div className="comp-five-main-container">
                <img src={Frame} alt="" className="img-frame" />

                <p className="heading"><b>Shop</b></p>

                <div className="huge-text">
                    <b>
                        Shop
                    </b>
                </div>
            </div>
        </>
    )
}