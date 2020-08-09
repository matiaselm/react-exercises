import React from 'react';

/*
Searchfield's events are handled on parent level with callback functions. 
    - This way it can work with the data fetching-part
*/

const SearchField = (props) => {

    return (
        <div>
            <input type='text' name='id' placeholder='id' onChange={props.handleChange} value={props.idValue}></input>
            <input type='text' name='phone' placeholder='phonenumber' onChange={props.handleChange} value={props.phoneValue}></input>
            <input type='text' name='name' placeholder='name' onChange={props.handleChange} value={props.nameValue} p   ></input>
            <input type='submit' value='Search' onClick={props.handleSubmit}></input>
        </div>
    )
}

export default SearchField