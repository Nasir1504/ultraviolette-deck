import React, { useState } from "react";

//styles
import "./marketing-comp.scss";

//imgs
import Logo from 'assets/imgs/ultraviolette-full-logo.png';
import Frame1 from 'assets/imgs/marketing-campaigns/Frame1.png';
import Frame2 from 'assets/imgs/marketing-campaigns/Frame2.png';
import Frame3 from 'assets/imgs/marketing-campaigns/Frame3.png';
import Frame4 from 'assets/imgs/marketing-campaigns/Frame4.png';
import Frame5 from 'assets/imgs/marketing-campaigns/Frame5.png';
import Frame6 from 'assets/imgs/marketing-campaigns/Frame6.png';
import Frame7 from 'assets/imgs/marketing-campaigns/Frame7.png';
import Frame10 from 'assets/imgs/marketing-campaigns/Frame10.png';
import Frame11 from 'assets/imgs/marketing-campaigns/Frame11.png';
import Frame12 from 'assets/imgs/marketing-campaigns/Frame12.png';
import BGFrame from 'assets/imgs/marketing-campaigns/Frame946.png';

// const Logo = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/ultraviolette-full-logo.png';
// const Frame1 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/marketing-campaigns/Frame1.png';
// const Frame2 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/marketing-campaigns/Frame2.png';
// const Frame3 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/marketing-campaigns/Frame3.png';
// const Frame4 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/marketing-campaigns/Frame4.png';
// const Frame5 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/marketing-campaigns/Frame5.png';
// const Frame6 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/marketing-campaigns/Frame6.png';
// const Frame7 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/marketing-campaigns/Frame7.png';
// const Frame10 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/marketing-campaigns/Frame10.png';
// const Frame11 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/marketing-campaigns/Frame11.png';
// const Frame12 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/marketing-campaigns/Frame12.png';
// const BGFrame = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/marketing-campaigns/Frame946.png';


export default function MarketingComp(props) {

    const [itemId, setItemId] = useState(0);
    const [itemSlide, setItemSlide] = useState(150);

    const handleBottomNavClick = (id) => {
        setItemId(id)
        if (id === 0) {
            setItemSlide(150)
        }
        else if (id === 1) {
            setItemSlide(50)
        }
        else if (id === 2) {
            setItemSlide(-50)
        }
        else if (id === 3) {
            setItemSlide(-150)

        }
    }

    return (
        <div className="marketing-comp-main-container">
            <div className="bg-img-div"
                style={{
                    backgroundImage: `url(${BGFrame})`
                }}
            />

            <div className="heading-section">
                <img src={Logo} alt="" className="logo-img" />

                <p className="heading"><b>
                    Marketing
                    {/* {itemSlide.toString()} */}

                </b></p>
                <p className="sub-heading">Our Campaigns</p>
            </div>

            <div className="bottom-section">
                <div className="slider">

                    <div className="slides-sec"
                        style={{
                            transform: `translateX(${itemSlide}%)`
                        }}
                    >
                        <div className="slide-dm slide">
                            <div className="item-one item"
                                style={{
                                    backgroundImage: `url(${Frame1})`
                                }}
                            ></div>
                            <div className="item-two item"
                                style={{
                                    backgroundImage: `url(${Frame2})`
                                }}
                            ></div>
                            <div className="item-three item"
                                style={{
                                    backgroundImage: `url(${Frame3})`
                                }}
                            ></div>
                        </div>
                        <div className="slide-bm slide">
                            <div className="item-one item"
                                style={{
                                    backgroundImage: `url(${Frame4})`
                                }}
                            ></div>
                            <div className="item-two item"
                                style={{
                                    backgroundImage: `url(${Frame5})`
                                }}
                            ></div>
                            <div className="item-three item"
                                style={{
                                    backgroundImage: `url(${Frame6})`
                                }}
                            ></div>
                        </div>
                        <div className="slide-vm slide">
                            <div className="item-one item"
                                style={{
                                    backgroundImage: `url(${Frame7})`
                                }}
                            ></div>
                           
                            <div className="video-item"></div>
                           
                        </div>
                        <div className="slide-cc slide">
                            <div className="item-one item"
                                style={{
                                    backgroundImage: `url(${Frame10})`
                                }}
                            ></div>
                            <div className="item-two item"
                                style={{
                                    backgroundImage: `url(${Frame11})`
                                }}
                            ></div>
                            <div className="item-three item"
                                style={{
                                    backgroundImage: `url(${Frame12})`
                                }}
                            ></div>
                        </div>

                    </div>
                    <div className="bottom-nav">
                        <p className="nav-items item-one"
                            onClick={() => { handleBottomNavClick(0) }}
                            style={{
                                color: itemId === 0 && '#fff'
                            }}
                        >
                            Digital Marketing
                            <span className="hr-span"
                                style={{
                                    opacity: itemId !== 0 && '0'
                                }}
                            />
                        </p>
                        <p className="nav-items item-two"
                            onClick={() => { handleBottomNavClick(1) }}
                            style={{
                                color: itemId === 1 && '#fff'

                            }}
                        >
                            Billboard Marketing
                            <span className="hr-span"
                                style={{
                                    opacity: itemId !== 1 && '0'
                                }}
                            />
                        </p>
                        <p className="nav-items item-three"
                            onClick={() => { handleBottomNavClick(2) }}
                            style={{
                                color: itemId === 2 && '#fff'

                            }}
                        >
                            Video Marketing
                            <span className="hr-span"
                                style={{
                                    opacity: itemId !== 2 && '0'
                                }}
                            />
                        </p>
                        <p className="nav-items item-four"
                            onClick={() => { handleBottomNavClick(3) }}
                            style={{
                                color: itemId === 3 && '#fff'

                            }}
                        >
                            Celebrity Campaign
                            <span className="hr-span"
                                style={{
                                    opacity: itemId !== 3 && '0'
                                }}
                            />
                        </p>

                    </div>

                </div>

            </div >

        </div >
    )
}