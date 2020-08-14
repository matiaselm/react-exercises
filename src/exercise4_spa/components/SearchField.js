import React from 'react';
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

    return (<div>
        {type === 'user' &&
            < div >
                <InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl onChange={props.handleChange} value={props.idValue} name='id'
                            placeholder="id"
                            aria-label="id"
                            aria-describedby="id"
                        />
                        <FormControl onChange={props.handleChange} value={props.phoneValue} name='phone'
                            placeholder="phonenumber"
                            aria-label="phonenumber"
                            aria-describedby="phonenumber"
                        />
                        <FormControl onChange={props.handleChange} value={props.nameValue} name='name'
                            placeholder="name"
                            aria-label="name"
                            aria-describedby="name"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" type='submit' value='Search' onClick={props.handleSubmit}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </InputGroup>
            </div>}
        {type === 'bill' &&
            <div>
                <InputGroup>
                    <FormControl onChange={props.handleChange} value={props.idValue} name='id' placeholder='user-id'
                        placeholder="id"
                        aria-label="id"
                        aria-describedby="id"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" type='submit' value='Search' onClick={props.handleSubmit}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>}
    </div>
    )
}

export default SearchField