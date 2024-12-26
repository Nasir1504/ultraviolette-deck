import React, { useEffect, useState } from "react";

//styles
import "./welcome-comp.scss";

//imgs
import bgImg from 'assets/imgs/home-comp/Frame925.png';
import textVector from 'assets/imgs/home-comp/Frame926.png';
import f77Img from 'assets/imgs/home-comp/f77-img.png';
import fullLogo from 'assets/imgs/ultraviolette-full-logo.png';

// const bgImg = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/home-comp/Frame925.png';
// const textVector = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/home-comp/Frame926.png';
// const f77Img = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/home-comp/f77-img.png';
// const fullLogo = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/ultraviolette-full-logo.png';

export default function WelcomeComp(props) {
    const [blinkState, setBlinkState] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setBlinkState(true)
        }, 800)
    }, [])

    return (
        <div className="welcome-comp-main-container">
            <div className="main-bg-img"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    opacity: blinkState && '1',

                }}
            >
            </div>

            <div className="middle-section"
                style={{
                    opacity: blinkState && '1'
                }}
            >
                <div className="upper-img-div"
                    style={{
                        backgroundImage: `url(${f77Img})`
                    }} />
                <div className="logo-img-div"
                    style={{
                        backgroundImage: `url(${fullLogo})`
                    }} />
                <div className="heading-div">
                    <span className="span1">
                        Designed <em>to</em> be
                    </span>
                    <i className="span2">supper sonic</i>
                </div>
                <div className="bottom-paragraph-div">
                    <span>
                        The F77 <em>powertrain</em> is as much a work of art, as <br />
                        it is <em>advanced engineering.</em>
                    </span>
                </div>
            </div>

            <div className="bottom-section"
                style={{
                    borderBottom: blinkState && '0.12vw solid #fff'
                }}
            >
                <div className="range power-train"
                    style={{
                        transform: !blinkState && `translateX(-20vw)`
                    }}
                >
                    <div className="top-text">
                        <img src={textVector} alt="" className="img-span" />
                        <span className="text-span">307 KM</span>
                    </div>
                    <div className="bottom-text">
                        IDC RANGE
                    </div>
                </div>

                <div className="speed power-train"
                    style={{
                        transform: !blinkState && `translateX(-40vw)`
                    }}
                >
                    <div className="top-text">
                        <img src={textVector} alt="" className="img-span" />
                        <span className="text-span">2.9 SEC</span>
                    </div>
                    <div className="bottom-text">
                        0-60 KM/H
                    </div>
                </div>

                <div className="torque power-train"
                    style={{
                        transform: !blinkState && `translateX(-60vw)`
                    }}
                >
                    <div className="top-text">
                        <img src={textVector} alt="" className="img-span" />
                        <span className="text-span">100 NM</span>
                    </div>
                    <div className="bottom-text">
                        PEAK TORQUE
                    </div>
                </div>

                <div className="top-speed power-train"
                    style={{
                        transform: !blinkState && `translateX(-80vw)`
                    }}
                >
                    <div className="top-text">
                        <img src={textVector} alt="" className="img-span" />
                        <span className="text-span">152 KM/H</span>
                    </div>
                    <div className="bottom-text">
                        TOP SPEED
                    </div>
                </div>
            </div>
        </div>
    );
}