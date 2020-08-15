import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

/*
Searchfield's events are handled on parent level with callback functions. 
    - This way it can work with the data fetching-part
*/

const SearchField = (props) => {

    // The searchField rendered depends on the type-prop given from the parent component
    // Supported types atm: 'user', 'bill'
    const type = props.type;
    const [search, setSearch] = useState('uid')

    // To toggle different search-types to the searchfield, not supported to do multiple at the same time
    const changeSearch = () => {
        switch (search) {
            case 'uid':
                props.clearValue()
                return setSearch('phone');
            case 'phone':
                props.clearValue()
                return setSearch('name');
            case 'name':
                props.clearValue()
                return setSearch('uid');
            default:
                props.clearValue()
                return setSearch('uid');
        }
    }

    return (<div>
        {type === 'user' &&
            < div >
                <InputGroup className="mb-3">

                    <Button style={{ marginRight: '1ch' }} variant="secondary" onClick={changeSearch}>Change search</Button>

                    {search === 'uid' && <FormControl onChange={props.handleChange} value={props.uidValue} name='uid'
                        placeholder="uid"
                        aria-label="uid"
                        aria-describedby="uid"
                    />}
                    {search === 'phone' &&
                        <FormControl onChange={props.handleChange} value={props.phoneValue} name='phone'
                            placeholder="phonenumber"
                            aria-label="phonenumber"
                            aria-describedby="phonenumber"
                        />}
                    {search === 'name' &&
                        <FormControl onChange={props.handleChange} value={props.nameValue} name='name'
                            placeholder="name"
                            aria-label="name"
                            aria-describedby="name"
                        />}
                    <InputGroup.Append>
                        <Button variant="outline-primary" type='submit' value='Search' onClick={props.handleSubmit}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>

            </div>}

    </div>
    )
}

export default SearchField