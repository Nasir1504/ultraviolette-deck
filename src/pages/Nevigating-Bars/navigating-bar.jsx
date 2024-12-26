import React, { useState } from "react";
// import React, { useEffect, useRef } from 'react';
import "./navigating-bar.scss";
import { NAVIGATING_BAR_DATA } from "./NevigatingBarData";


export default function NavigatingBar(props) {

  let [itemID, setItemID] = useState(0)


  function handleItemId(id) {
    setItemID(id)
  }


  return (
    <div className="navigating-bar-main-container"

      onMouseLeave={props.HandleNavbarVisibilityFalse}
      style={{
        top: !props.NavbarVisibility && "-200%"
      }}
    >
      <div className="top-layer">
        <div className="hidden-layer-div"
          onMouseEnter={props.HandleNavbarVisibilityTrue}
        ></div>
        {/* <hr className="hr-1" /> */}
        <p>{props.NavID + 1} / {NAVIGATING_BAR_DATA.length}</p>

        <hr className="hr-2" />

        <p>Quick Access Bar</p>

        <hr className="hr-3" />

        <div className="para-div">{
          NAVIGATING_BAR_DATA.map((item, index) => {
            return <p key={index}>{props.NavID === index && item.name}</p>
          })
        }
        </div>
      </div>

      <div className="bottom-layer">
        {
          NAVIGATING_BAR_DATA.map((item, index) => {

            return (
              <div
                className="btn-div" key={index} >
                <div className="name-div2"
                  onMouseEnter={() => {
                    handleItemId(index)
                  }}
                  onMouseLeave={() => {
                    handleItemId(-1)
                  }}
                  onClick={() => {
                    props.HandleClick(index, 'instant')
                  }}
                  style={{
                    color: itemID === index ? '#fff' : '#898989'

                  }}
                >
                  <p
                    style={{
                      color: props.NavID === index ? '#fff' : '#898989'

                    }}
                  >{item.shortName}</p>

                </div>

              </div>
            )
          })
        }
      </div>


    </div >
  )
}