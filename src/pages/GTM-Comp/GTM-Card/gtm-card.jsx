import React from 'react';

//styles
import './gtm-card.scss';

//imgs
import Lamp from 'assets/imgs/go-to-market/Group98.png';
// const Lamp = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/go-to-market/Group98.png';

export default function GTMCard({ Date, firstName, lastName, LampOn }) {
    return (
        <div className="gtm-card-main-container">
            <p className="date-text">{Date}</p>
            <p className="city-name-text">
                {firstName} <br />
                <span className="span1">
                    {lastName}
                </span>
            </p>
            <div className="lamp-img"
                style={{
                    backgroundImage: `url(${Lamp})`,
                    opacity: LampOn && '1'
                }}
            />

        </div>
    )
}
