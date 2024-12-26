import React, { useEffect } from "react";

//styles
import "./usp-comp.scss";

//imgs
import Logo from 'assets/imgs/ultraviolette-full-logo.png';

export default function USPComp(props) {
    useEffect(() => {
        const initKeyShotXR = () => {
            const nameOfDiv = "KeyShotXR";
            const folderName = "/bike.19"; // Correct path relative to `public`
            const viewPortWidth = 1918;
            const viewPortHeight = 1079;
            const backgroundColor = "#FFFFFF";
            const uCount = 30;
            const vCount = 1;
            const uWrap = true;
            const vWrap = false;
            const uMouseSensitivity = -0.0833333;
            const vMouseSensitivity = 1;
            const uStartIndex = 15;
            const vStartIndex = 0;
            const minZoom = 1;
            const maxZoom = 1;
            const rotationDamping = 0.96;
            const downScaleToBrowser = true;
            const addDownScaleGUIButton = false;
            const downloadOnInteraction = false;
            const imageExtension = "jpg";
            const showLoading = true;
            const loadingIcon = "/bike.19/files/ks_logo.png";
            const allowFullscreen = true;
            const uReverse = false;
            const vReverse = false;
            const hotspots = {};
            const isIBooksWidget = false;

            // eslint-disable-next-line
            const keyshotXR = new window.keyshotXR(
                nameOfDiv,
                folderName,
                viewPortWidth,
                viewPortHeight,
                backgroundColor,
                uCount,
                vCount,
                uWrap,
                vWrap,
                uMouseSensitivity,
                vMouseSensitivity,
                uStartIndex,
                vStartIndex,
                minZoom,
                maxZoom,
                rotationDamping,
                downScaleToBrowser,
                addDownScaleGUIButton,
                downloadOnInteraction,
                imageExtension,
                showLoading,
                loadingIcon,
                allowFullscreen,
                uReverse,
                vReverse,
                hotspots,
                isIBooksWidget
            );
        };

        initKeyShotXR();
    }, []);

    return (
        <div className="usp-comp-main-container">
            <div id="KeyShotXR"></div>
            <div className="heading-section">
                <img src={Logo} alt="Ultraviolette Logo" className="logo-img" />
                <p className="heading-text">USP</p>
                <p className="text-one text">
                    <span className="circle-span" />Charged <br />Seamlessly
                </p>
                <p className="text-two text">
                    <span className="circle-span" />Design to <br />connect
                </p>
                <p className="text-three text">
                    <span className="circle-span" />Super <br /> Sonic
                </p>
            </div>

            <div className="bottom-content">
                <p className="text-one">
                    360<span className="degree">&#8728;</span>
                    <span className="span1">View</span>
                </p>
            </div>
        </div>
    );
}
