import React from 'react';
import './card-comp.scss';

export default function CardComp({ Name, imgURL, GR, SetContentId, cardId }) {


    return (
        <div className="problem-card-comp-main-container">
            <div className="top-section">

                <div className="color-gradient" >
                    <div className="gradient-div"
                        style={{
                            animation: GR === 1 ? `identifier1 5s linear infinite alternate-reverse` :
                                GR === 2 ? `identifier2 5s linear infinite alternate-reverse` :
                                    `identifier1 5s linear infinite alternate-reverse`
                        }}
                    />

                </div>
                <div className="inner-part">
                    <img src={imgURL} alt="" className="card-img" />
                    <p className='name'>{Name}</p>
                </div>
            </div>
            <div className="view-detail-btn"
                onClick={() => { SetContentId(cardId) }}
            >
                View Detail
            </div>

        </div>
    )
}
