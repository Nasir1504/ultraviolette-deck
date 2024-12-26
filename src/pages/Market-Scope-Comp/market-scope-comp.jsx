import React, { useState } from "react";
//styls
import "./market-scope-comp.scss";

// components
import RangeCard from "./Nested-Comp/range-card";
import InfoCard from "./Nested-Comp/info-card";

// imgs
import Logo from 'assets/imgs/ultraviolette-full-logo.png';
import bgImg from 'assets/imgs/market-scope/market-scope-bg.png';
import Polegon1 from 'assets/imgs/market-scope/Polygon1.png';
import Polegon2 from 'assets/imgs/market-scope/Polygon2.png';
import Polegon3 from 'assets/imgs/market-scope/Polygon3.png';
import underLineVector from 'assets/imgs/market-scope/Vector80.png';

// const Logo = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/ultraviolette-full-logo.png';
// const bgImg = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/market-scope/market-scope-bg.png';
// const Polegon1 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/market-scope/Polygon1.png';
// const Polegon2 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/market-scope/Polygon2.png';
// const Polegon3 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/market-scope/Polygon3.png';
// const underLineVector = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/market-scope/Vector80.png';

export default function MarketScopeComp() {
    // const Frame1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventh-comp-img/frame-451.png";
   
    const [progressBar, setProgressBar] = useState(true)

    function handleMouseEvents() {
        setProgressBar(false)
    }




    return (
            <div className="market-scope-comp-main-container"
                style={{
                    backgroundImage: `url(${bgImg})`,
                }}
            >
                <div className="hover-hidden-div"
                    onMouseEnter={handleMouseEvents}
                    onMouseLeave={handleMouseEvents}
                ></div>

                <div className="left-div">
                    <div className="top-div">
                        <img src={Logo} alt="" className="logo-img" />
                        <p className="main-heading"><b>Market Scope</b></p>

                        <div className="second-heading">
                            <div className="part1">
                                Nearly <span>30</span> <em>%</em> of people in urban
                            </div>
                            <div className="part2">
                                <span className="span-left">
                                    INDIA on EV
                                </span>
                                <img src={underLineVector} alt="" className="underline-img" />
                                {/* <span className="span-right">
                                </span> */}
                            </div>

                        </div>
                    </div>
                    <div className="bottom-div">
                        <RangeCard
                            mainDetail="Composition of EV Users."
                            censusYear="[2020] census"
                            censusCount="21.0"
                            censusUnit="M"
                            progressValue="75"
                            ProgressBar={progressBar}
                        />
                        <RangeCard
                            mainDetail="YOY demand in EV Bikes."
                            censusYear="growth"
                            censusCount="6.7"
                            censusUnit="%"
                            progressValue="65"
                            ProgressBar={progressBar}
                        />
                        <RangeCard
                            mainDetail="Adjusted According To YOY Growth."
                            censusYear="YOY growth"
                            censusCount="45.7"
                            censusUnit="M"
                            progressValue="80"
                            ProgressBar={progressBar}
                        />
                        <RangeCard
                            mainDetail="YOY Online listings growth."
                            censusYear=""
                            censusCount="101.5"
                            censusUnit="%"
                            progressValue="80"
                            ProgressBar={progressBar}
                        />

                    </div>
                    <div className="blank-div"></div>


                </div>
                {/*============================================================ */}
                <div className="right-div">
                    <div className="polygon-container">
                        <div className="inner-section">

                            <div className="polygon-one-img-div polygon-img-div"
                                style={{
                                    transform: !progressBar && 'translateY(0)'
                                }}
                            >
                                <img src={Polegon1} alt="" className="polygon-one-img polygon-img" />
                                <div className="circle-top"
                                    style={{
                                        opacity: !progressBar && '1'

                                    }}
                                >
                                    <InfoCard
                                        NameTextColor='#0147D1'
                                        name='S0M'
                                        Detail='Serviceable Obtainable'
                                        ValueOne='4.11'
                                        ValueTwo='30%'
                                        Result='617.34'
                                        ProgressBar={progressBar}

                                    />
                                </div>
                            </div>
                            <div className="polygon-two-img-div polygon-img-div"
                                style={{
                                    transform: !progressBar && 'translateY(0)'
                                }}
                            >
                                <img src={Polegon2} alt="" className="polygon-two-img polygon-img" />
                                <div className="circle-top"
                                    style={{
                                        opacity: !progressBar && '1'

                                    }}
                                >
                                    <InfoCard
                                        NameTextColor='#22914F'
                                        name='SAM'
                                        Detail='Serviceable Available'
                                        ValueOne='13.7'
                                        ValueTwo='30%'
                                        Result='2,057.8'
                                        ProgressBar={progressBar}

                                    />

                                </div>

                            </div>
                            <div className="polygon-three-img-div polygon-img-div"
                                style={{
                                    transform: !progressBar && 'translateY(0)'
                                }}
                            >
                                <img src={Polegon3} alt="" className="polygon-three-img polygon-img" />
                                <div className="circle-top"
                                    style={{
                                        opacity: !progressBar && '1'

                                    }}
                                >
                                    <InfoCard
                                        NameTextColor='#D86340'
                                        name='TAM'
                                        Detail='Total Available'
                                        ValueOne='45.7'
                                        ValueTwo='1500'
                                        Result='6,859.3'
                                        ProgressBar={progressBar}

                                    />

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

    )
}