import React from "react";
import "../assets/scss/button.scss";
function EqualButton(props) {
    const calculate = () => {
        document.querySelector("input").value = eval(document.querySelector("input").value)
    }
    return (
        <div className={props.theme ? "equal-button btn light" : "equal-button btn dark"} onClick={calculate} style={{ width: props.width ? props.width : '' }}>
            =
        </div>
    )
}

export default EqualButton; 