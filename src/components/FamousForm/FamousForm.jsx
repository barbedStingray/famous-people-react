
import react, { useState } from 'react';
import axios from 'axios';

// FamousForm Component

function FamousForm(props) {


    const addPerson = (evt) => {
        evt.preventDefault();
        console.log(`The person is ${props.famousPersonName} and they're famous for ${props.famousPersonRole}`);


        // TODO: create POST request to add this new person to the database
            console.log(`in /people POST request`);
    
            props.setPersonObject({
              name: props.famousPersonName,
              role: props.famousPersonRole
            });
            console.log('personObject', props.personObject);
    
            axios.post('/people', {
                              name: props.famousPersonName,
                              role: props.famousPersonRole
                                  }
              ).then((response) => {
              console.log(`/people POST success`);
    
              // reset the inputs
              props.setPersonName('');
              props.setPersonRole('');
    
              props.fetchPeople();
    
            }).catch((error) => {
              console.log('/people POST error', error);
              alert(`/people POST error`);
            })
        }
    
    return (
        <div id="famous-form">
            <form onSubmit={addPerson}>
                <label htmlFor="name-input">Name:</label>
                <input id="name-input" value={props.famousPersonName} onChange={e => props.setPersonName(e.target.value)} />
                <label htmlFor="role-input">Famous for:</label>
                <input id="role-input" value={props.famousPersonRole} onChange={e => props.setPersonRole(e.target.value)} />
                <button type="submit">Done</button>
                </form>
            <p>
            {props.famousPersonName} is famous for "{props.famousPersonRole}".
            </p>

        </div>
    )
}

export default FamousForm;