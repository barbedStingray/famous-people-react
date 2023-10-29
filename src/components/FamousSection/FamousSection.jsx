import React, { useState, useEffect } from 'react';
import './FamousSection.css';
import axios from 'axios';
import FamousList from '../FamousList/FamousList.jsx';

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);
  let [personObject, setPersonObject] = useState({});

  // TODO: on load, call the fetchPeople() function
  useEffect(() => {
    fetchPeople();
  }, []);


  const fetchPeople = () => {
    // TODO: fetch the list of people from the server // GET request
      axios.get('/people').then((response) => {
        console.log(`/books GET response`, response.data);

        setPeopleArray(response.data);

      }).catch((error) => {
        console.log(`/people GET error`, error);
        alert(`error in /people GET`);
      });
  }

  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    
    // TODO: create POST request to add this new person to the database
        console.log(`in /people POST request`);

        setPersonObject({
          name: famousPersonName,
          role: famousPersonRole
        });
        console.log('personObject', personObject);

        axios.post('/people', {
                          name: famousPersonName,
                          role: famousPersonRole
                              }
          ).then((response) => {
          console.log(`/people POST success`);

          // reset the inputs
          setPersonName('');
          setPersonRole('');

          fetchPeople();

        }).catch((error) => {
          console.log('/people POST error', error);
          alert(`/people POST error`);
        })

  
  }

    return (
      <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" value={famousPersonName} onChange={e => setPersonName(e.target.value)} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" value={famousPersonRole} onChange={e => setPersonRole(e.target.value)} />
          <button type="submit">Done</button>
        </form>
        <p>
          {famousPersonName} is famous for "{famousPersonRole}".
        </p>

        <FamousList />
        <ul>
          {/* TODO: Render the list of famous people */}
          {famousPeopleArray.map((person) => {
              return (
                <div id="person">
                  <li key={person.id}>{person.name} plays the role of {person.role}</li>
                </div>  
              );
          })
          } 
        </ul>
      </section>
    );
}

export default FamousSection;
