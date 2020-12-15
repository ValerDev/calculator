import React from 'react';
import "./index.scss"
import "./App.scss"
import NumberButton from './components/NumberButton';
import ActionButton from './components/ActionButton';
import ClearButton from './components/clearButton';
import { useState } from 'react'
import EqualButton from './components/equalBuntton';

function App() {
  const state = {
    validInput: /^[A-Za-z]+$/,
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
  return (
    <div id="App" className={theme ? "app light" : "app dark"}>
      <button className={theme ? "theme-btn light" : "theme-btn dark"} onClick={changeTheme}>Change Theme</button>
      <div className="calculator">
        <div className={theme ? "input-output-block light" : "input-output-block dark"}>
          <span className="warning">Must contain only numbers or actions</span>
          <input type="text" onChange={handleInput} className={theme ? "light" : "dark"} onSubmit={() => { console.log(111); }} />
        </div>
        <div className="actions-numbers-block">
          <div className="left-side">
            {["-", "/", "*"].map(action => <ActionButton action={action} theme={theme} />)}
            {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.'].map(num => <NumberButton number={num} theme={theme} />)}
          </div>
          <div className="right-side">
            <ClearButton theme={theme} />
            {["+"].map(action => <ActionButton action={action} theme={theme} />)}
            {["(", ")"].map(num => <NumberButton number={num} theme={theme} />)}
            <EqualButton theme={theme} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;