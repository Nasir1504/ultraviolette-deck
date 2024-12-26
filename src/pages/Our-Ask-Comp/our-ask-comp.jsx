import React, { useState } from "react";

//styles
import "./our-ask-comp.scss";

//components
import AskCard from "./card-comp/ask-card";


//imgs
import F77Img from 'assets/imgs/home-comp/f77-img.png';
import Frame from 'assets/imgs/our-ask/Frame953.png';
// const F77Img = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/home-comp/f77-img.png';
// const Frame = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/our-ask/Frame953.png';

export default function OurAskComp() {

    const [hiddenLayer, setHiddenLayer] = useState(false);

    return (
        <div className="our-ask-comp-main-container">

            <div className="hidden-layer"
                style={{
                    display: hiddenLayer && 'none'
                }}
                onMouseOver={() => { setHiddenLayer(true) }}
            />

            <div className="bg-img"
                style={{
                    backgroundImage: `url(${Frame})`
                }}
            ></div>

            <div className="left-section">
                <p className="heading">Our Ask</p>
                <p className="fr-text">
                    <span className="dot-span" />
                    <span className="text-span">
                        Funding Request
                    </span>
                </p>
                <div className="seeking-content"
                    style={{
                        transform: hiddenLayer && `translate(0vw)`

                    }}
                >
                    <p className="text-one">Currently</p>
                    <p className="text-two">
                        Seeking &nbsp;
                        <span className="span1">
                            20
                        </span>&nbsp;
                        <span className="span2">cr</span>
                    </p>

                    <div className="projection-btn">Projection</div>
                </div>

            </div>

            <div className="right-section">
                <div className="marketing-card">
                    <AskCard
                        Progress={65}
                        ProgressColor='#FF5151'
                        Name='Marketing'
                        HiddenLayer={hiddenLayer}
                    />

                </div>
                <div className="salary-card">
                    <AskCard
                        Progress={30}
                        ProgressColor='#51CBFF'
                        Name='Salary'
                        HiddenLayer={hiddenLayer}
                    />

                </div>
                <div className="opex-card">
                    <AskCard
                        Progress={2.5}
                        ProgressColor='#FC51FF'
                        Name='Opex'
                        HiddenLayer={hiddenLayer}
                    />

                </div>
                <div className="capex-card">
                    <AskCard
                        Progress={2.5}
                        ProgressColor='#51FF82'
                        Name='Capex'
                        HiddenLayer={hiddenLayer}
                    />

                </div>

            </div>

            <div className="bottom-sec">
                <div className="inner-sec">
                    <div className="f77-img"
                        style={{
                            backgroundImage: `url(${F77Img})`,
                            transform: hiddenLayer && `translate(0vw)`

                        }}
                    />

                    <div className="hr-div"
                        style={{
                            clip: `rect(0px,${hiddenLayer ? 85 : 0}vw,5vw,0px)`
                        }}
                    />
                    <p className="text-one"
                        style={{
                            transform: hiddenLayer && `translate(0vw)`
                        }}
                    >Use of funds</p>
                    <p className="text-two"
                        style={{
                            transform: hiddenLayer && `translate(0vw)`
                        }}
                    >Runway 10 - 12 months</p>

                </div>
            </div>

        </div>
    )
}