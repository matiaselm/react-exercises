import React, { useState } from 'react';

const SearchField = (props) => {

    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
        console.log('input changed: ' + value)
    }

    const handleSubmit = () => {
        console.log('Submitting value: ' + value)
        setValue('')
    }

    return (
        <div>
            <input type='text' onChange={handleChange} value={value}></input>
            <input type='submit' value='Search' onClick={handleSubmit}></input>
        </div>
    )
}

export default SearchField