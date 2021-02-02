import React, { useState } from "react";
import  { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA"); //this is a hook. All hooks begin with "use".
  const [breeds, setBreeds] = useState([]); // Empty array because we are requesting from API. "I have a dog, give me back all of the dog breeds"
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

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
        <AnimalDropdown />
        <BreedDropdown />
        <button>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchParams;