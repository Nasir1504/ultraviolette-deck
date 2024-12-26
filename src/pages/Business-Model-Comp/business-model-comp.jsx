import React, { useState } from "react";

//styles
import "./business-model-comp.scss";

//imgs

import Logo from 'assets/imgs/ultraviolette-full-logo.png';
import Frame1 from 'assets/imgs/business-model/Frame948.png';
import Frame2 from 'assets/imgs/business-model/Frame949.png';
import Frame3 from 'assets/imgs/business-model/Frame950.png';
import Frame4 from 'assets/imgs/business-model/Frame951.png';
import BGFrame from 'assets/imgs/business-model/business-model.png';

export default function BusinessModelComp() {

    const [chartId, setChartId] = useState(0);

    return (
        <div className="business-model-comp-main-container" >

            <div className="bg-img-div"
                style={{
                    backgroundImage: `url(${BGFrame})`,
                }}
            />
            <div className="heading-div">
                <img src={Logo} alt="" className="logo-img" />

                <p className="heading"><b>Business Model</b></p>
            </div>
            <div className="content-div">

                <div className="img-section-one chart-img"
                    style={{
                        backgroundImage: `url(${Frame1})`,
                        opacity: chartId !== 0 && '0'
                    }}
                />
                <div className="img-section-one chart-img"
                    style={{
                        backgroundImage: `url(${Frame2})`,
                        opacity: chartId !== 1 && '0'
                    }}
                />
                <div className="img-section-one chart-img"
                    style={{
                        backgroundImage: `url(${Frame3})`,
                        opacity: chartId !== 2 && '0'
                    }}
                />
                <div className="img-section-one chart-img"
                    style={{
                        backgroundImage: `url(${Frame4})`,
                        opacity: chartId !== 3 && '0'
                    }}
                />

                <div className="pre-booking chart">
                    <p className="text">Pre-Booking</p>
                    <div className="chart-btn"
                        onClick={() => { setChartId(1) }}
                    >Price Chart</div>
                </div>
                <div className="selling-bikes chart">
                    <p className="text">Selling Bikes</p>
                    <div className="chart-btn"
                        onClick={() => { setChartId(2) }}
                    >Price Chart</div>
                </div>
                <div className="aggregator chart">
                    <p className="text">Selling Bikes To Aggregator</p>
                    <div className="chart-btn"
                        onClick={() => { setChartId(3) }}
                    >Price Chart</div>
                </div>

            </div>

        </div>
    )
}



