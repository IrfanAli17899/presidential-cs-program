import React from "react"

const Banner = (props) => {
    const { heading1,heading2, tagline1,tagline2, courseLine ,className} = props;
    return (
        <div>
            <div className={className + " d-flex justify-content-center align-items-center"}>
                <div className="SliderData">
                    <h1 className="Artificial-Intelligence">{heading1}<br/>{heading2}</h1>
                    <p className="line">
                        {tagline1} <br/>{tagline2}
                    </p>
                </div>
            </div>
            <div className="line2">
            <h1 className="program">Program Structure</h1>
                {courseLine}
            </div>
        </div>
    )
}

export default Banner;