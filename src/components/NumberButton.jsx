import React from "react";
import "../assets/scss/numberButton.scss";
function NumberButton(props) {
    return (
        <div className={props.theme ? "number-button btn light" : "number-button btn dark" } style={{ width: props.width ? props.width : 33.333 + '%' }}>
            <span>{props.number}</span>
        </div>
    )
}

export default NumberButton;