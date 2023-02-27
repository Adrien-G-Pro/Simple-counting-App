import React from 'react'
import { Link } from 'react-router-dom'

export default function TitleApp() {
    return (
        <div className='titleApp'>
            <h1>Simple Counting App</h1>
            <Link to='/'>
                Click here to come home !
            </Link>
        </div>
    )
}
