import React, { useState, useEffect } from "react";

//styles
import "./comp-two.scss";

//imgs
import Frame1 from 'assets/imgs/app-flow/image43.png';

// const Frame1 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/app-flow/image43.png';

export default function CompTwo(props) {

    const [frameAnime, setFrameAnime] = useState(true)

    function handleMouseEvent() {
        setFrameAnime(prev => { return !prev })
    }

    useEffect(() => {
        props.HoverID === 2 && setTimeout(handleMouseEvent, 200)
    }, [props.HoverID])

    return (
        <>
            <div className="comp-two-main-container" >
                <img src={Frame1} alt="" className="img-frame" />

                <p className="heading"><b>Home</b> <br /> Screen</p>

                <div className="huge-text">
                    <b>
                        <span className="span1">
                            Screen
                        </span> <br />
                        <span className="span2">
                            Home
                        </span>
                    </b>
                </div>

            </div>

        </>
    )
}