import React from "react";
import "../assets/scss/button.scss";
function ActionButton(props) {
    function addAction(e) {
        document.querySelector("input").value = document.querySelector("input").value + e.target.innerText
        document.querySelectorAll(".action-button").forEach(btn => {
            btn.classList.add('disabled-btn')
        })
    }
    return (
        <div className={props.theme ? "action-button btn light" : "action-button btn dark"} style={{ width: props.width ? props.width : '' }} onClick={addAction}>
            {props.action}
        </div>
    )
}

export default ActionButton;