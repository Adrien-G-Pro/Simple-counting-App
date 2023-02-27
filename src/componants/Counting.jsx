import React, { useState } from 'react'

export default function Counting() {
  const [counting, setCounting] = useState(0)
  const [countingName, setCountingName] = useState("")
  return (
    <div className='counting'>
      <input onChange={(event) => setCountingName(event.target.value)} type="text" placeholder='Click to put a name' value={countingName} />
      <p>{counting}</p>
      <div>
        <button className='counting__plus' onClick={() => setCounting((counting) => counting += 1)}>
          Plus 1
        </button>
        <button className='counting__minus' onClick={() => setCounting((counting) => counting -= 1)}>
          Minus 1
        </button>
        <button className='counting__reset' onClick={() => setCounting(() => 0)}>
          Reset
        </button>
      </div>
    </div>
  )
}
