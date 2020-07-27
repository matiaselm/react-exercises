import React from 'react';

const SearchField = (props) => {

    return (
        <div>
            <input type='text' onChange={props.handleChange} value={props.value}></input>
            <input type='submit' value='Search' onClick={props.handleSubmit}></input>
        </div>
    )
}

export default SearchField