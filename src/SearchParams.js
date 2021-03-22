import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, updateLocation] = useState("Seattle, WA"); //this is a hook. All hooks begin with "use".
  const [breeds, updateBreeds] = useState([]); // Empty array because we are requesting from API. "I have a dog, give me back all of the dog breeds".
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS); // label, defaultState, options 
  const [breed, BreedDropdown, updateBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    })

    setPets(animals || []);
  }

  useEffect(() => {
    updateBreeds([]);
    updateBreed("");

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      updateBreeds(breedStrings);
    }, console.error);
  }, [animal, updateBreed, updateBreeds]); // only run when these things change, not after every single render.

  return (
    <div className="search-params">
      <form onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input 
            id="location" 
            value={location} 
            placeholder="Location" 
            onChange={e => updateLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;