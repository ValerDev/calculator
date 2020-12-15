import React from "react";
import "../assets/scss/button.scss";
function ClearButton(props) {
    const clearInput = () => {
        document.querySelector("input").value = ''
    }
    return (
        <div className={props.theme ? "clear-button btn light" : "clear-button btn dark"} onClick={clearInput} style={{ width: props.width ? props.width : '' }}>
            AC
        </div>
    )
}

export default ClearButton;