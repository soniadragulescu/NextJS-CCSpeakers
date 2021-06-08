import React, { useState, useEffect } from 'react'

const InputElement = () => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  })

  return (
    isLoading
      ? <div>Loading...</div>
      : <div>
        <input onChange = {(e) => {
          setInput(e.target.value)
          setHistory([...history, e.target.value])
        }}
        placeholder="Enter some text"/>
        <br/>
        {input}
        <br/>
        <ol>
          {history.map((i) => {
            return <li key={i}>{i}</li>
          })}
        </ol>
    </div>
  )
}

export default InputElement
