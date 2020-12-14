import React from 'react';
import "./index.scss"
import "./App.scss"
import NumberButton from './components/NumberButton';
import ActionButton from './components/ActionButton';
import {useState} from 'react'

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
    }, 1000)
    
  }
  
  return (
    <div id="App" className={theme ? "app light":"app dark"}>
      <button className={theme ? "theme-btn light":"theme-btn dark"} onClick={changeTheme}>Change Theme</button>
      <div className="calculator">
        <div className={theme ? "input-output-block light" : "input-output-block dark"}>
          <span className="warning">Must contain only numbers or actions</span>
          <input type="text" onChange={handleInput} className={theme ? "light":"dark"}/>
        </div>
        <div className="actions-numbers-block">
          <div className="left-side">
            <ActionButton action="-" theme={theme}/>
            <ActionButton action="/" theme={theme} />
            <ActionButton action="*" theme={theme} />
            <NumberButton number="7" theme={theme} />
            <NumberButton number="8" theme={theme} />
            <NumberButton number="9" theme={theme} />
            <NumberButton number="4" theme={theme} />
            <NumberButton number="5" theme={theme} />
            <NumberButton number="6" theme={theme} />
            <NumberButton number="1" theme={theme} />
            <NumberButton number="2" theme={theme} />
            <NumberButton number="3" theme={theme} />
            <NumberButton number="0" theme={theme} width="66.666%" />
            <NumberButton number="." theme={theme} />
          </div>
          <div className="right-side">
            <ActionButton action="^" width="100%" theme={theme}/>
            <ActionButton action="/" width="100%" theme={theme}/>
            <ActionButton action="x" width="100%" theme={theme}/>
            <div className="parentheses">
              <NumberButton number="(" width="100%" theme={theme}/>
              <NumberButton number=")" width="100%" theme={theme}/>
            </div>
            <ActionButton action="=" width="100%" theme={theme}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;