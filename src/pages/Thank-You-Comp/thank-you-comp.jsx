// eslint-disable-next-line
import React, { useState } from "react";

//styles
import "./thank-you-comp.scss";

// imgs

import Logo from 'assets/imgs/ultraviolette-full-logo.png';
import BGImg from 'assets/imgs/thank-you/Frame954.png';
import Card from 'assets/imgs/thank-you/Group39.png';
import Start from 'assets/imgs/thank-you/star-icon.png';
import Vector from 'assets/imgs/thank-you/image47.png';

// const Logo = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/ultraviolette-full-logo.png';
// const BGImg = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/thank-you/Frame954.png';
// const Card = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/thank-you/Group39.png';
// const Start = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/thank-you/star-icon.png';
// const Vector = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/thank-you/image47.png';


export default function ThankYouComp() {
    const [hiddenLayer, setHiddenLayer] = useState(false);

    return (
        <div className="thank-you-comp-main-container">

            <div className="hidden-layer"
                style={{
                    display: hiddenLayer && 'none'
                }}
                onMouseOver={() => { setHiddenLayer(true) }}
            />


            <div className="bg-img-one"
                style={{
                    backgroundImage: `url(${BGImg})`,
                    opacity: hiddenLayer && `1`
                }}
            />
            <div className="bg-img-two"
                style={{
                    backgroundImage: `url(${Vector})`
                }}
            />

            <div className="heading-section">
                <div className="logo-div"
                    style={{
                        backgroundImage: `url(${Logo})`
                    }}
                />
                <p className="heading-text">
                    <span className="main-heading"
                        style={{
                            transform: hiddenLayer && `translate(0)`
                        }}
                    ><b>Thank You</b></span>


                    <span className="sub-heading"
                        style={{
                            transform: hiddenLayer && `translate(0)`
                        }}
                    >for choosing us</span>
                </p>

            </div>

            <div className="card-container"
                style={{
                    transform: hiddenLayer && `translateY(0)`
                }}
            >
                <div className="card-img"
                    style={{
                        backgroundImage: `url(${Card})`
                    }}
                />
                <div className="bottom-btn-container">
                    <div className="schedule-btn">
                        <span className="icon"
                            style={{
                                backgroundImage: `url(${Start})`
                            }}
                        />
                        <p>Schedule a Meeting Calendly</p>
                        <span className="icon"
                            style={{
                                backgroundImage: `url(${Start})`
                            }}
                        />
                    </div>
                    <div className="contact-btn">
                        <span className="icon"
                            style={{
                                backgroundImage: `url(${Start})`
                            }}
                        />
                        <p>Contact Us Google Forms</p>
                        <span className="icon"
                            style={{
                                backgroundImage: `url(${Start})`
                            }}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}