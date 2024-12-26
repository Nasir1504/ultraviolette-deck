
//styles
import "./info-card.scss";

//imgs

import Img1 from 'assets/imgs/market-scope/Frame30.png';
import Img2 from 'assets/imgs/market-scope/Frame31.png';
// const Img1 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/market-scope/Frame30.png';
// const Img2 = 'https://rentblob.blob.core.windows.net/template/ultraviolette/imgs/market-scope/Frame31.png';


export default function InfoCard(props) {

   
    return (
            <div className="info-card-main-container">
                <div className="left-div">
                    <img src={Img1} alt="" className="img-one" />
                    <div className="upper-sec">
                        <p className="name"
                            style={{
                                color: props.NameTextColor
                            }}
                        >{props.name}</p>
                        <p className="details">{props.Detail} <br />
                            Market <span>{props.ValueOne} M x {props.ValueTwo}</span>
                        </p>

                    </div>
                    <div className="down-sec" />

                </div>
                <div className="right-div">
                    <img src={Img2} alt="" className="img-one" />
                    <div className="upper-sec"
                        style={{
                            color: props.NameTextColor,
                            transform: !props.ProgressBar && 'translateX(0)'

                        }}
                    >
                        <p>
                            <b>{props.Result} <span> cr/year</span></b>
                        </p>
                    </div>
                    <div className="down-sec">

                    </div>
                </div>

            </div >
    );
}