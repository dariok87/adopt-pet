import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA"); //this is a hook. All hooks begin with "use".

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
        <button>
          Submit
        </button>
      </form>
    </div>

  )
}

export default SearchParams;