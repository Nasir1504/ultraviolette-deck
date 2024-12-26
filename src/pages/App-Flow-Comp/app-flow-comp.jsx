import React, { useState, useEffect } from "react";
import "./app-flow-comp.scss";
import { LIST_DATA } from "./AppFlowCompData";
import TouchAppIcon from '@mui/icons-material/TouchApp';

//-----------------Sub Comp-------------------------------------
import CompOne from "./Nested-Comp/Comp-One/comp-one";
import CompTwo from "./Nested-Comp/Comp-Two/comp-two";
import CompThree from "./Nested-Comp/Comp-Three/comp-three";
import CompFour from "./Nested-Comp/Comp-Four/comp-four";
import CompFive from "./Nested-Comp/Comp-Five/comp-five";
import CompSix from "./Nested-Comp/Comp-Six/comp-six";


//--------------------------------------------------------------
import Logo1 from 'assets/imgs/app-flow/Group88.png';
import Logo from 'assets/imgs/ultraviolette-full-logo.png';




export default function AppFlowComp() {
    const [listId, setListId] = useState(0);
    // eslint-disable-next-line


    function handleMouseEnterEvent(id) {
        setListId(id)
    }

    
    const [upDownEffect, setUpDownEffect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 800)

    }, [upDownEffect])

    return (
        <>
            <div className="app-flow-comp-main-container">

                <div className="left-div">
                    <div className="top-div">
                        <div className="heading-div">
                            <div className="logo-img-div">
                                <img className="logo-img" src={Logo} alt="" />
                            </div>
                            <div className="text-heading">
                                <b>App Flow</b>
                            </div>

                        </div>
                    </div>
                    <div className="bottom-div">
                        <div className="list-div">

                            <div className="hr-line-div"
                                style={{
                                    top: `calc(${(listId * 10) + 6.5}%)`,
                                    marginLeft: "-4%",
                                }}
                            >
                                <img src={Logo1} alt="" />

                            </div>

                            {
                                LIST_DATA.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="properties-para"
                                        >
                                            <p
                                                onMouseOver={() => {
                                                    handleMouseEnterEvent(index)
                                                }}
                                                style={{
                                                    color: listId === index && "#fff",
                                                    transform: listId === index && `scale(${1.08})`,
                                                    top: ` calc(${index * 10}%)`,

                                                }}
                                            >{item.listPara}
                                                <span className="tap-icon-div"
                                                    style={{
                                                        visibility: listId === index && "hidden"
                                                    }}
                                                >
                                                    <TouchAppIcon className="tap-icon"
                                                        style={{
                                                            animation: upDownEffect && "tapIcon-KeyFrame 0.2s"
                                                        }}
                                                    />
                                                </span>
                                            </p>
                                        </div>
                                    );
                                })
                            }
                        </div>

                    </div>
                </div>
                <div className="right-div">

                    {
                        (listId + 1) === 1 ? <CompOne HoverID={listId + 1} /> :
                            (listId + 1) === 2 ? <CompTwo HoverID={listId + 1} /> :
                                (listId + 1) === 3 ? <CompThree HoverID={listId + 1} /> :
                                    (listId + 1) === 4 ? <CompFour HoverID={listId + 1} /> :
                                        (listId + 1) === 5 ? <CompFive HoverID={listId + 1} /> :
                                            (listId + 1) === 6 ? <CompSix HoverID={listId + 1} /> : ''
                    }



                </div>
            </div>
        </>
    );
}