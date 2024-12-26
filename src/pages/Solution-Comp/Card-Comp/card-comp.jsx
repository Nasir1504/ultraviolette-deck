import React from 'react';

//styels
import './card-comp.scss';

//imgs
import Vector from 'assets/imgs/solution-comp/Vector79.png';
import Vector1 from 'assets/imgs/solution-comp/Vector80.png';
import ecoFriendly from 'assets/imgs/solution-comp/image31.png';
// const Vector = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/solution-comp/Vector79.png';
// const Vector1 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/solution-comp/Vector80.png';
// const ecoFriendly = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/solution-comp/image31.png';


export default function CardComp({ Type, Heading, Detail }) {
    return (
        <div className="card-comp-main-container">

            <div className="top-most-part"
                style={{
                    display: Type !== 3 && 'none'
                }}
            >
                <div className="inner-part"
                    style={{
                        backgroundImage: `url(${ecoFriendly})`,
                    }}
                />
            </div>

            <div className="heading1"
                style={{
                    backgroundImage: `url(${Vector})`,
                    display: Type !== 1 && 'none'
                }}
            >
                {Heading}
                <span className="hr-line" />
            </div>

            <div className="heading2"
                style={{
                    backgroundImage: `url(${Vector1})`,
                    display: Type !== 2 && 'none'
                }}
            >
                {Heading}
                <span className="hr-line" />
            </div>

            <div className="heading3"
                style={{
                    backgroundImage: `url(${Vector1})`,
                    display: Type !== 3 && 'none'
                }}
            >
                {Heading}
                <span className="hr-line" />
            </div>

            <div className="content-div"
                style={{
                    display: Type === 3 && 'none'
                }}
            >
                <div className="inner-content-div">
                    {Detail}
                </div>

            </div>

        </div>
    )
}
