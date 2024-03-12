//creating logic for calculator
import React, { useState } from 'react';
import './App.css'

const App = () => {
    const [input,setInput] = useState('');

     const handleInput = (val) => {
        if (val === 'C'){
            setInput('');
        }
        else if(val === 'X'){
            setInput(input.slice(0,-1));
        }
        else if(val === '='){
            try{
            setInput(eval(input).toString());
            }catch(error){
                setInput('Invailid Argument')
            }
        }
        else{
            setInput((preValue) => preValue + val);
        }
    }
  return (
    <div className='container'>
        <div className="calc">
            <h1 id="input">{input}</h1>
            <div>
                <button onClick={() =>
                    {handleInput('C')}}>C</button>
                <button onClick={() =>
                    {handleInput('X')}}>X</button>
                <button onClick={() =>
                    {handleInput('%')}}>%</button>
                <button onClick={() =>
                    {handleInput('/')}}>/</button>
            </div>
            <div>
                <button onClick={() =>
                    {handleInput('7')}}>7</button>
                <button onClick={() =>
                    {handleInput('8')}}>8</button>
                <button onClick={() =>
                    {handleInput('9')}}>9</button>
                <button onClick={() =>
                    {handleInput('*')}}>*</button>
            </div>
            <div>
                <button onClick={() =>
                    {handleInput('4')}}>4</button>
                <button onClick={() =>
                    {handleInput('5')}}>5</button>
                <button onClick={() =>
                    {handleInput('6')}}>6</button>
                <button onClick={() =>
                    {handleInput('-')}}>-</button>
            </div>
            <div>
                <button onClick={() =>
                    {handleInput('1')}}>1</button>
                <button onClick={() =>
                    {handleInput('2')}}>2</button>
                <button onClick={() =>
                    {handleInput('3')}}>3</button>
                <button onClick={() =>
                    {handleInput('+')}}>+</button>
            </div>
            <div>
                <button onClick={() =>
                    {handleInput('8')}}>0</button>
                <button onClick={() =>
                    {handleInput('00')}}>00</button>
                <button onClick={() =>
                    {handleInput('.')}}>.</button>
                <button onClick={() =>
                    {handleInput('=')}}>=</button>
            </div>
        </div>
    </div>
  )
}

export default App
