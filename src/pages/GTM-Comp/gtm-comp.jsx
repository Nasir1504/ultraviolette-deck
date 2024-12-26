import React, { useState, useEffect } from "react";

//styles
import "./gtm-comp.scss";

//components
import GTMCard from "./GTM-Card/gtm-card";

//imgs
import Logo from 'assets/imgs/ultraviolette-full-logo.png';
import Underline from 'assets/imgs/go-to-market/underline-vector.png';
import BGImg from 'assets/imgs/go-to-market/go-to-market.png';
import BikeImg from 'assets/imgs/go-to-market/Group106.png';

// const Logo = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/ultraviolette-full-logo.png';
// const Underline = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/go-to-market/underline-vector.png';
// const BGImg = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/go-to-market/go-to-market.png';
// const BikeImg = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/go-to-market/Group106.png';

export default function GTMComp() {

    const [bikeMovement, setBikeMovement] = useState(0);
    const [hiddenLayer, setHiddenLayer] = useState(false);


    useEffect(() => {
        if (hiddenLayer && bikeMovement === 0) {
            setTimeout(() => {
                setBikeMovement(22)
            }, 500);
        }
        else if (bikeMovement === 22) {
            setTimeout(() => {
                setBikeMovement(44)
            }, 1500);
        }
        else if (bikeMovement === 44) {
            setTimeout(() => {
                setBikeMovement(65)
            }, 1500);
        }
        else if (bikeMovement === 65) {
            setTimeout(() => {
                setBikeMovement(86)
            }, 1500);
        }
        else if (bikeMovement === 86) {
            setTimeout(() => {
                setBikeMovement(115)
            }, 1500);
        }

    }, [bikeMovement, hiddenLayer])

    return (
        <div className="gtm-comp-main-container">

            <div className="hidden-layer"
                style={{
                    display: hiddenLayer && 'none'
                }}
                onMouseOver={() => { setHiddenLayer(true) }}
            />

            <div className="bg-img-div"
                style={{
                    backgroundImage: `url(${BGImg})`
                }}
            />
            <div className="heading-sec">
                <img src={Logo} alt="" className="logo-img" />

                <p className="heading">
                    <b>
                        Go To Market
                    </b>
                </p>
                <p className="sub-heading">
                    Launch <br />
                    <span className="span1">
                        Strategy
                        <span className="span-img"
                            style={{
                                backgroundImage: `url(${Underline})`
                            }}
                        />
                    </span>
                </p>
            </div>

            <div className="bottom-contents">
                <div className="content-container">

                    <div className="upper-strip"
                        style={{
                        }}
                    />
                    <div className="content-one card-content"
                        style={{
                            opacity: bikeMovement >= 22 && '1'
                        }}
                    >
                        <GTMCard
                            Date='1st Feb'
                            firstName='Launch'
                            lastName='Bangalore'
                            LampOn={bikeMovement >= 22 ? true : false}
                        />
                    </div>
                    <div className="content-two card-content"
                        style={{
                            opacity: bikeMovement >= 44 && '1'
                        }}
                    >
                        <GTMCard
                            Date='3 Months Later'
                            firstName='Delhi'
                            lastName='NCR'
                            LampOn={bikeMovement >= 44 ? true : false}
                        />
                    </div>
                    <div className="content-three card-content"
                        style={{
                            opacity: bikeMovement >= 65 && '1'
                        }}
                    >
                        <GTMCard
                            Date='6 Months Later'
                            firstName='Tier 1'
                            lastName='Cities'
                            LampOn={bikeMovement >= 65 ? true : false}
                        />
                    </div>
                    <div className="content-four card-content"
                        style={{
                            opacity: bikeMovement >= 86 && '1'
                        }}
                    >
                        <GTMCard
                            Date='9 Months Later'
                            firstName='Pan'
                            lastName='India'
                            LampOn={bikeMovement >= 86 ? true : false}
                        />
                    </div>

                    <div className="upper-layer">
                        <div className="bike-img-div"
                            style={{
                                backgroundImage: `url(${BikeImg})`,
                                opacity: bikeMovement >= 0 && '1',
                                transform: `translateX(${bikeMovement}vw)`
                                // transform: `translateX(${40}vw)`



                            }}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}