import React from "react";
import "../assets/scss/actionButton.scss";
function ActionButton(props) {
    return (
        <div className={props.theme ? "action-button btn light" : "action-button btn dark"} style={{width: props.width ? props.width :  '' }}>
            <span>{props.action}</span>
        </div>
    )
}

export default ActionButton;