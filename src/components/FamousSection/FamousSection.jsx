import React, { useState, useEffect } from 'react';
import './FamousSection.css';
import axios from 'axios';
import FamousList from '../FamousList/FamousList.jsx';
import FamousForm from '../FamousForm/FamousForm.jsx';

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


    return (
      <section className="new-person-section">
        <FamousForm 
          famousPersonName={famousPersonName}
          setPersonName={setPersonName}
          famousPersonRole={famousPersonRole}
          setPersonRole={setPersonRole}
          fetchPeople={fetchPeople}
          personObject={personObject}
          setPersonObject={setPersonObject}
        />

        <FamousList famousPeopleArray={famousPeopleArray} />
        
      </section>
    );
}

export default FamousSection;
