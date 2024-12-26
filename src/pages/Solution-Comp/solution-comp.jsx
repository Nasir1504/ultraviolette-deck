import React, { useState, useRef, useEffect } from 'react';

//styles
import "./solution-comp.scss";

import TouchAppIcon from '@mui/icons-material/TouchApp';

import CardComp from "./Card-Comp/card-comp";

//imgs
import Ring from 'assets/imgs/solution-comp/rings-frame.png';
import logo from 'assets/imgs/ultraviolette-logo.png';
import Poster from 'assets/videos/bike-poster.jpg';

//video
import VideoFile from 'assets/videos/homebike.mp4';
import VideoFileOne from 'assets/videos/Bike-Tyre.mp4';
import VideoFileTwo from 'assets/videos/Bike-Engin.mp4';
import VideoFileThree from 'assets/videos/Bike-Dash.mp4';

export default function SolutionComp() {

    const [hiddenLayer, setHiddenLayer] = useState(false);
    const [pointerID, setPointerID] = useState(0)
    const [startingTime, setStartingTime] = useState(0)
    const [endingTime, setEndTime] = useState(0)
    const [hoverOnFeatures, setHoverOnFeatures] = useState(false);
    const [detailsVisibilities, setDetailsVisibilities] = useState(false)

    const videoOneRef = useRef()

    // console.log( videoOneRef.current && videoOneRef.current.currentTime )

    useEffect(() => {
        if (videoOneRef.current) {
            videoOneRef.current.pause();
        }

    }, [])

    const START_TIME = 2;
    const END_TIME_SHORT = 2.7;
    const END_TIME_LONG = 10;
    
    function handleMouseOver(id) {
        if (videoOneRef.current) {
            setPointerID(id);
            setStartingTime(START_TIME);
            setEndTime(END_TIME_SHORT);
            const videoMap = { 1: VideoFileOne, 2: VideoFileTwo, 3: VideoFileThree };
            if (videoMap[id]) {
                videoOneRef.current.src = videoMap[id];
                videoOneRef.current.load();
                videoOneRef.current.play();
            }
        }
    }
    
    function handleMouseOut() {
        const video = videoOneRef.current;
        if (video) {
            setStartingTime(END_TIME_SHORT);
            setEndTime(END_TIME_LONG);
            setDetailsVisibilities(false);
            video.play();
        }
    }

    function handleTimeUpdate() {
        if (videoOneRef.current) {
            const video = videoOneRef.current
            if (video.currentTime > endingTime && endingTime > 0) {
                setDetailsVisibilities(true)
                video.currentTime = startingTime
            }
        }
    }

    // videoOneRef.playbackRate = 2;

    function handleVideoEnd() {
        setHoverOnFeatures(false)
        if (videoOneRef.current) {
            videoOneRef.current.src = VideoFile;
            videoOneRef.current.pause(); // Load the new video source
        }
    }

    return (
        <div className="solution-comp-main-container">
            <div className="bg-video-div">
                <video
                    ref={videoOneRef}
                    className="video-tag"
                    poster={Poster}
                    autoPlay
                    muted
                    disableremoteplayback="true"
                    preload="auto"
                    // loop
                    onTimeUpdate={handleTimeUpdate}
                    // controls
                    onEnded={handleVideoEnd}
                >
                    <source src={VideoFileOne} type="video/mp4" />
                </video>
            </div>
            <div className="hidden-layer"
                style={{
                    display: hiddenLayer && 'none'
                }}
                onMouseOver={() => { setHiddenLayer(true) }}
            />

            <div className="bg-upper-layer">

                <div className="main-heading">
                    <div className="logo-div">
                        <img src={logo} alt="" className="logo-img" />
                        <p>
                            <b>ultraviolette</b>
                        </p>
                    </div>

                    <p className="heading"><b>Solution</b></p>
                    <p className="text-content">
                        Our solution is to develop an electric ultraviolet F77 bike that combines
                    </p>

                </div>

                <div className="left-content"
                    style={{
                        transform: hiddenLayer && 'translateX(0)'
                    }}
                >
                    The F77 <em>powertrain</em> is as much a work of art, as <br />
                    it is <em>advanced engineering.
                        {/* {pointerID.toString()} S={startingTime.toString()} e={endingTime.toString()}{detailsVisibilities.toString()} */}
                    </em>
                </div>

                <div className="high-speed-ring ring-div"
                    style={{
                        backgroundImage: `url(${Ring})`,
                        opacity: hiddenLayer && '1',
                        display: hoverOnFeatures && 'none',
                        animation: hiddenLayer && '0.7s blinkKF ease-in-out infinite'

                    }}
                    onClick={() => {
                        handleMouseOver(1)
                        setHoverOnFeatures(true)
                    }}
                />

                <div className="cutting-edge-ring ring-div"
                    style={{
                        backgroundImage: `url(${Ring})`,
                        opacity: hiddenLayer && '1',
                        display: hoverOnFeatures && 'none',
                        animation: hiddenLayer && '0.7s blinkKF ease-in-out infinite'

                    }}
                    onClick={() => {
                        handleMouseOver(2)
                        setHoverOnFeatures(true)

                    }}
                />


                <div className="eco-friendly-ring ring-div"
                    style={{
                        backgroundImage: `url(${Ring})`,
                        opacity: hiddenLayer && '1',
                        display: hoverOnFeatures && 'none',
                        animation: hiddenLayer && '0.7s blinkKF ease-in-out infinite'

                    }}
                    onClick={() => {
                        handleMouseOver(3)
                        setHoverOnFeatures(true)

                    }}
                />

                <div className="high-speed-card-container"
                    style={{
                        opacity: detailsVisibilities && pointerID === 1 && '1'
                    }}
                >
                    <div className="back-btn"
                        onClick={() => {
                            handleMouseOver(0)
                            handleMouseOut()
                        }}

                    >BACK
                        <TouchAppIcon className="tap-icon" />

                    </div>
                    <CardComp
                        Type={1}
                        Heading='High-Speed Performance'
                        Detail='The bike will be equipped with a powerful electric motor, capable of reaching high speeds, while incorporating ultraviolet technology for air purification during the ride.'
                    />
                </div>


                <div className="cutting-edge-card-container"
                    style={{
                        opacity: detailsVisibilities && pointerID === 2 && '1'
                    }}
                >
                    <div className="back-btn"
                        onClick={() => {
                            handleMouseOver(0)
                            handleMouseOut()
                        }}

                    >BACK
                        <TouchAppIcon className="tap-icon" />


                    </div>
                    <CardComp
                        Type={2}
                        Heading='cutting-edge technology'
                        Detail='The integration of smart connectivity features, long-lasting batteries, and lightweight design will ensure a seamless and convenient commuting experience.'
                    />
                </div>

                <div className="eco-friendly-card-container"
                    style={{
                        opacity: detailsVisibilities && pointerID === 3 && '1'
                    }}
                >
                    <div className="back-btn"
                        onClick={() => {
                            handleMouseOver(0)
                            handleMouseOut()
                        }}

                    >BACK
                        <TouchAppIcon className="tap-icon" />

                    </div>
                    <CardComp
                        Type={3}
                        Heading='eco-friendly features'
                    />
                </div>

            </div>
        </div>
    );
}