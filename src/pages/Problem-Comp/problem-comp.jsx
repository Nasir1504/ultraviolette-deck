import React, { useState } from "react";
import "./problem-comp.scss";

import { PROBLEM_COMP_DATA } from "./problemCompData";

import CardComp from "./Card-Comp/card-comp";

// imgs
import logo from 'assets/imgs/ultraviolette-full-logo.png';
import cardImg1 from 'assets/imgs/problem-comp/Group38280.png';
import cardImg2 from 'assets/imgs/problem-comp/Group38282.png';
import cardImg3 from 'assets/imgs/problem-comp/Group38281.png';
import bgIMG from 'assets/imgs/problem-comp/Group121.png';
import maskedImg from 'assets/imgs/problem-comp/usemask.png';

// const logo = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/ultraviolette-full-logo.png';
// const cardImg1 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/problem-comp/Group38280.png';
// const cardImg2 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/problem-comp/Group38282.png';
// const cardImg3 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/problem-comp/Group38281.png';
// const bgIMG = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/problem-comp/Group121.png';
// const maskedImg = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/problem-comp/usemask.png';


export default function ProblemComp() {

    const [contentId, setContentId] = useState(1)
    return (
        <div className="problem-comp-main-container">

            <div className="left-section">
                <div className="logo-div">
                    <img src={logo} alt="" className="logo-img" />
                </div>
                <div className="content-div">
                    <p className="heading-span">
                        <strong>Problem</strong>
                    </p>
                    <p className="para-text">
                        Many urban commuters face challenges <br />
                        with conventional transportation modes, <br />
                        such as &nbsp;
                        <span className="span1">
                            Traffic congestion, Environmental <br />
                            Pollution
                        </span>
                        , and &nbsp;
                        <span className="span2">
                            Limited Parking Spaces
                        </span>
                        .
                    </p>
                </div>
                <div className="bottom-card-div">

                    <div className="card-one">
                        <CardComp
                            Name='Traffic Congestion'
                            imgURL={cardImg1}
                            GR={1}
                            SetContentId={setContentId}
                            cardId={1}
                        />
                    </div>
                    <div className="card-two">
                        <CardComp
                            Name='Environmental Pollution'
                            imgURL={cardImg2}
                            GR={2}
                            SetContentId={setContentId}
                            cardId={2}
                        />
                    </div>
                    <div className="card-three">
                        <CardComp
                            Name='Limited Parking Space'
                            imgURL={cardImg3}
                            GR={1}
                            SetContentId={setContentId}
                            cardId={3}
                        />
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="bg-img-div"
                    style={{
                        backgroundImage: `url(${bgIMG})`
                    }}
                />

                <div className="mask-div"
                    style={{
                        maskImage: `url(${maskedImg})`,
                        WebkitMaskImage: `url(${maskedImg})`,

                    }}
                >
                    <div className="gradient-div" />

                </div>
                <div className="bg-gradient-div"></div>

                {
                    PROBLEM_COMP_DATA.map((item, i) => {

                        const ImgURL = contentId === (i + 1) && item.imgURL
                        // console.log(ImgURL)

                        return (
                            <img
                                className="content-img"
                                key={i}
                                src={ImgURL}
                                alt="" i
                            />
                        )
                    })
                }


                {
                    PROBLEM_COMP_DATA.map((item, i) => {
                        return (
                            <p className="content" key={i}>
                                {contentId === (i + 1) && item.textContent}
                            </p>
                        )
                    })
                }

            </div>

        </div>
    );
}