import React from "react";
import "../assets/scss/button.scss";
function NumberButton(props) {
    function submitButoon(e) {
        document.querySelector("input").value = document.querySelector("input").value + e.target.innerText
        document.querySelectorAll(".action-button").forEach(btn => {
            btn.classList.remove('disabled-btn')
        })
    }
    return (
        <div className={props.theme ? "number-button btn light" : "number-button btn dark"} style={{ width: props.width ? props.width : "" }} onClick={submitButoon}>
            {props.number}
        </div>
    )
}

export default NumberButton;


