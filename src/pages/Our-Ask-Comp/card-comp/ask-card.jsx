import React from 'react';
import './ask-card.scss';

export default function AskCard({ Progress, ProgressColor, Name, HiddenLayer }) {

    return (
        <div className="ask-card-main-container"
            style={{
                opacity: HiddenLayer && '1'
            }}
        >
            <div className="top-hr-bar">
                <div className="progress"
                    style={{
                        width: HiddenLayer ? `${Progress}%` : '0%',
                        backgroundColor: `${ProgressColor}`,
                        boxShadow: `0 0 15px ${ProgressColor}`

                    }}
                />
            </div>
            <div className="percentage-div"
                style={{
                    fontSize: `${Math.max(4, (Progress * 0.075))}vw`,
                    opacity: HiddenLayer && '1'
                }}
            >
                <b>{Progress}</b>
                <span className='unit-span'
                    style={{
                        fontSize: `${Math.max(2, (Progress * 0.04))}vw`
                    }}
                >%</span>
            </div>

            <p className="name-text">{Name}</p>
            <p className="detail-text">Lorem ipsum dolor sit amet.</p>

        </div>
    )
}
