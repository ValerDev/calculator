import React from 'react';
import "./index.scss"
import "./App.scss"
import NumberButton from './components/NumberButton';
import ActionButton from './components/ActionButton';
import { useState } from 'react'

function App() {
  const state = {
    validInput: /^[A-Za-z]+$/,
    value: 0,
  }
  const [theme, setTheme] = useState(false)
  const changeTheme = () => {
    setTheme(!theme)
  }

  const handleInput = (event) => {
    let inputValue = event.target.value
    if (state.validInput.test(inputValue[inputValue.length - 1])) {
      document.querySelector("input").value = document.querySelector("input").value.substring(0, document.querySelector("input").value.length - 1)
      document.querySelector(".calculator .input-output-block>.warning").style.opacity = '1'
    } else {
      document.querySelector("input").value = inputValue
    }
    setTimeout(() => {
      document.querySelector(".calculator .input-output-block>.warning").style.opacity = '0'
    }, 800)
  }

  setTimeout(() => {
    document.querySelectorAll(".action-button").forEach(btn => {
      btn.onclick = () => {
        state.value = btn.innerText
        document.querySelector("input").value = document.querySelector("input").value + state.value
      }
    })

    document.querySelectorAll(".number-button").forEach(btn => {
      btn.onclick = () => {
        state.value = btn.innerText
        document.querySelector("input").value = document.querySelector("input").value + state.value
      }
    })
  }, 0)
  return (
    <div id="App" className={theme ? "app light" : "app dark"}>
      <button className={theme ? "theme-btn light" : "theme-btn dark"} onClick={changeTheme}>Change Theme</button>
      <div className="calculator">
        <div className={theme ? "input-output-block light" : "input-output-block dark"}>
          <span className="warning">Must contain only numbers or actions</span>
          <input type="text" onChange={handleInput} className={theme ? "light" : "dark"} />
        </div>
        <div className="actions-numbers-block">
          <div className="left-side">
            {["-", "/", "*"].map(action => <ActionButton action={action} theme={theme} />)}
            {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.'].map(num => <NumberButton number={num} theme={theme} />)}
          </div>
          <div className="right-side">
            {["c", "+", "(", ")", "="].map(action => <ActionButton action={action} theme={theme} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;