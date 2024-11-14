"use client"
import React, { useState } from 'react'

const Calculator = () => {
  const [num, setNum] = useState("")

  const handleClick = (e) => {
    setNum(num + e.target.name)
  }

  const clearAll = () => {
    setNum("")
  }

  const deleteLast = () => {
    setNum(num.slice(0, -1))
  }

  const calculate = () => {
    try {
      setNum(eval(num).toString())
    } catch (error) {
      setNum("Error")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='mt-10 w-full h-full flex justify-center text-white'>
      <div className='mt-10 bg-black bg-opacity-85 w-64 h-96 rounded-2xl'>
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            value={num} 
            className='w-56 h-10 p-2 m-4 rounded-xl border-none text-black' 
            readOnly 
          />
          <div className='mr-5 ml-5'>
          <button type='button' onClick={clearAll} className='bg-green-600 w-12 h-11 rounded-xl'>AC</button>
          <button type='button' onClick={deleteLast} className='bg-green-600 w-12 h-11 rounded-xl ml-2'>Dlt</button>
          <button type='button' name='/' onClick={handleClick} className='bg-white w-12 h-11 rounded-xl text-black ml-2'>/</button>
          <button type='button' name='.' onClick={handleClick} className='bg-white w-12 h-11 rounded-xl text-black ml-2'>.</button>
          <br />
          <button type='button' name='7' onClick={handleClick} className='bg-white w-12 h-11 rounded-xl text-black mt-2'>7</button>
          <button type='button' name='8' onClick={handleClick} className='bg-white w-12 h-11 rounded-xl text-black ml-2'>8</button>
          <button type='button' name='9' onClick={handleClick} className='bg-white w-12 h-11 rounded-xl text-black ml-2'>9</button>
          <button type='button' name='*' onClick={handleClick} className='bg-white w-12 h-11 rounded-xl text-black ml-2'>*</button>
          <br />
          <button type='button' name='4' onClick={handleClick} className='bg-white w-12 h-11 rounded-xl text-black mt-2'>4</button>
          <button type='button' name='5' onClick={handleClick} className='bg-white w-12 h-11 rounded-xl text-black ml-2'>5</button>
          <button type='button' name='6' onClick={handleClick} className='bg-white w-12 h-11 rounded-xl text-black ml-2'>6</button>
          <button type='button' name='+' onClick={handleClick} className='bg-white w-12 h-11 rounded-xl text-black ml-2'>+</button>
          
          <br />
          <button type='button' name='1' onClick={handleClick} className='bg-white w-12 h-11 rounded-xl text-black mt-2'>1</button>
          <button type='button' name='2' onClick={handleClick} className='bg-white w-12 h-11 rounded-xl text-black ml-2'>2</button>
          <button type='button' name='3' onClick={handleClick} className='bg-white w-12 h-11 rounded-xl text-black ml-2'>3</button>
          <button type='button' name='-' onClick={handleClick} className='bg-white w-12 h-11 rounded-xl text-black ml-2'>-</button>
          
          <br />
          <button type='button' name='0' onClick={handleClick} className='bg-white w-24 h-11 rounded-xl text-black mt-2'>0</button>
          
          <button type='button' name='=' onClick={calculate} className='bg-white w-28 h-11 rounded-xl text-black ml-2'>=</button>
          

          </div>
        </form>
      </div>
    </div>
  )
}

export default Calculator
