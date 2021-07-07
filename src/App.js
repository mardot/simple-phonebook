import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "George Boris", number: "342-342343" },
    { id: 2, name: "Ada Luvit", number: "342-542432" },
  ]);
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newPerson,
      //date: new Date().toISOString,
      number: newNumber,
      id: persons.length + 1,
    };
    console.log("button clicked ", event.target);
    setPersons(persons.concat(personObject));
    setNewPerson([]);
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewPerson(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Persons key={persons.id} person={persons} />
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            Name: {person.name} Phone: {person.number}
          </li>
        ))}
      </ul>
      <Filter />
      {/* <PersonForm /> */}
      <h2>Add new person</h2>
      <form onSubmit={addPerson}>
        <input value={newPerson} onChange={handlePersonChange} />
        {/* <input value={newNumber} /> */}
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
