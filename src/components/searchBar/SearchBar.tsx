import React, { useState, useEffect } from 'react';

function SearchBar() {
  //const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked times`;
  });
/*
  function handleSubmit() {
    alert('submit')
  }
*/
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="md-form">
            <input placeholder="Select starting date" type="date" id="startingDate" className="form-control"/>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="md-form">
            <input placeholder="Select ending date" type="date" id="endingDate" className="form-control"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;