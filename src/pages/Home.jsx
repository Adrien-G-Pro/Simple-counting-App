import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home'>
        <h2>Choose your number of counting</h2>
        <div>
            <Link to='/onecounting'>1</Link>
            <Link to='/twocounting'>2</Link>
            <Link to='/threecounting'>3</Link>
        </div>
    </div>
  )
}
