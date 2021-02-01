import React, { useState } from "react";
import  { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA"); //this is a hook. All hooks begin with "use".
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]); // Empty array because we are requesting from API. "I have a dog, give me back all of the dog breeds"

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input 
            id="location" 
            value={location} 
            placeholder="Location" 
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          animal
          <select 
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}>
            <option>All</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label>
          Breed
          <select
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={!breeds.length}>
            <option>All</option>
            {breeds.map(breedString => (
              <option key={breedString} value={breedString}>{breedString}</option>
            ))}
            </select>
        </label>
        <button>
          Submit
        </button>
      </form>
    </div>
  )
}

export default SearchParams;