
//styles
import "./range-card.scss";

export default function RangeCard(props) {
    return (
            <div className="range-card-main-container">
                <div className="top-part-div">
                    <div className="left-part-div">
                        <p>{props.mainDetail}<br />
                            <span>
                                {props.censusYear}
                            </span>
                        </p>
                    </div>
                    <div className="rigth-part-div">
                        <p>{props.censusCount} <span>{props.censusUnit}</span></p>
                    </div>
                </div>
                <div className="bottom-part-div">
                    <div className="main-div">
                        <div className="div1"
                            style={{
                                width: !props.ProgressBar && `${props.progressValue}%`
                            }}
                        />
                        <div className="div2" />

                    </div>

                </div>

            </div>
    )
}