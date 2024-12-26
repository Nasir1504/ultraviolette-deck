import React, { useState, useMemo } from "react";

//styles
import "./road-map-comp.scss";

//imgs
import Logo from 'assets/imgs/ultraviolette-full-logo.png';
import BGImg from 'assets/imgs/road-map/Roadmap.png';
import BikeImg from 'assets/imgs/road-map/frame-bike.png';
import CircleStroke from 'assets/imgs/road-map/Frame955.png';
// const Logo = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/ultraviolette-full-logo.png';
// const BGImg = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/road-map/Roadmap.png';
// const BikeImg = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/road-map/frame-bike.png';
// const CircleStroke = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/road-map/Frame955.png';

export default function RoadMapComp() {

    const [hiddenLayer, setHiddenLayer] = useState(false);
    const [progressCircle, setProgressCircle] = useState(0);


    useMemo(() => {
        if (hiddenLayer && progressCircle === 0) {
            setTimeout(() => {
                setProgressCircle(10)
            }, 500);
        }
        else if (progressCircle === 10) {
            setTimeout(() => {
                setProgressCircle(18)
            }, 1500);
        }
        else if (progressCircle === 18) {
            setTimeout(() => {
                setProgressCircle(28)
            }, 1500);
        }
        else if (progressCircle === 28) {
            setTimeout(() => {
                setProgressCircle(50)
            }, 1500);
        }
        else if (progressCircle === 50) {
            setTimeout(() => {
                setProgressCircle(100)
            }, 1500);
        }

    }, [progressCircle, hiddenLayer])

    return (
        <div className="road-map-comp-main-container">

            <div className="hidden-layer"
                style={{
                    display: hiddenLayer && 'none'
                }}
                onMouseOver={() => { setHiddenLayer(true) }}
            />

            <div className="heading-sec">
                <img src={Logo} alt="" className="logo-img" />

                <p className="heading"><b>
                    Roadmap

                </b></p>
            </div>


            <div className="bg-img-div"
                style={{
                    backgroundImage: `url(${BGImg})`,
                }}
            />

            <div className="bike-img-div"
                style={{
                    backgroundImage: `url(${BikeImg})`,
                }}
            />


            <div className="content-sec">
                <div className="bg-circle-stroke"
                    style={{
                        backgroundImage: `url(${CircleStroke})`,
                        clip: `rect(0vw, ${progressCircle}vw, 100vw, 0vw)`
                    }}
                ></div>
                <div className="semi-circle-frame">
                    <p className="text-one name-text"
                        style={{
                            opacity: progressCircle >= 10 && '1'
                        }}
                    >
                        <span className="span1">Idea</span>
                        <span className="span2">March 2022</span>
                    </p>
                    <p className="text-two name-text"
                        style={{
                            opacity: progressCircle >= 18 && '1'
                        }}
                    >
                        <span className="span1">Team</span>
                        <span className="span2">May 2022</span>
                    </p>
                    <p className="text-three name-text"
                        style={{
                            opacity: progressCircle >= 28 && '1'
                        }}
                    >
                        <span className="span1">Crafting</span>
                        <span className="span2">March 2022</span>
                    </p>
                    <p className="text-four name-text"

                        style={{
                            opacity: progressCircle >= 50 && '1'
                        }}
                    >
                        <span className="span1">Launch</span>
                        <span className="span2">March 2022</span>
                    </p>
                    <p className="text-five name-text"
                        style={{
                            opacity: progressCircle >= 65 && '1'
                        }}
                    >
                        <span className="span1"><b>Global Expansion</b></span>
                        <span className="span2">March 2022</span>
                    </p>

                </div>

            </div>

        </div>
    )
}