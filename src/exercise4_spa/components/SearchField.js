import React from 'react';

/*
Searchfield's events are handled on parent level with callback functions. 
    - This way it can work with the data fetching-part
*/

const SearchField = (props) => {

    // The searchField rendered depends on the type-prop given from the parent component
    // Supported types atm: 'user', 'bill'
    const type = props.type;

    return (<div>
        {type === 'user' &&
            < div >
                <input type='text' name='id' placeholder='id' onChange={props.handleChange} value={props.idValue}></input>
                <input type='text' name='phone' placeholder='phonenumber' onChange={props.handleChange} value={props.phoneValue}></input>
                <input type='text' name='name' placeholder='name' onChange={props.handleChange} value={props.nameValue}></input>
                <input type='submit' value='Search' onClick={props.handleSubmit}></input>
            </div>}
        {type === 'bill' &&
            <div>
                <input type='text' name='id' placeholder='user-id' onChange={props.handleChange} value={props.idValue}></input>
                <input type='submit' value='Search' onClick={props.handleSubmit}></input>
            </div>}
    </div>
    )
}

export default SearchField