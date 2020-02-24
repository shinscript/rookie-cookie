/**
 * ************************************
 *
 * @module ClassForm
 * @description Form Child Component for the Modal Component that has an initialState for 
 *              input values to fill. Unsplash API is also used here to search through images
 *              and select and set image urls;
 *
 * ************************************
 */

import React, { useState } from 'react';
import { fetchImages } from "../api/unsplash";

const ClassForm = ({ hide, addClasses }) => {
  const initialFormState = {
    id: null,
    title: "",
    instructor: "",
    description: "",
    duration: "",
    featureImage: "",
    classType: ""
  };

  const [ classItem, setClassItem ] = useState(initialFormState);
  const [ searched, setSearched ] = useState(null);
  const [ selectedImg, setSelectedImg ] = useState(null);
  const times = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, '60+'];

  //On change handler for filling classItems;
  const handleOnChange = event => {
    const { name, value } = event.target;
    setClassItem({ ...classItem, [name]: value });
  };

  //Search Image handler to set the featuredImage as the url found from the result of calling the API
  const searchImage = () => {
    fetchImages(classItem.featureImage)
      .then(res => setSearched(res.results));
  };

  //Setting clicked image as main image to use when user creates a new card.
  const chosenImage = event => {
    setSelectedImg(event.target.src);
  };

  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        if (
          !classItem.title ||
          !classItem.description ||
          !classItem.instructor ||
          !classItem.duration ||
          !classItem.featureImage ||
          !classItem.classType
        )
          return alert("Enter all fields below!");
        addClasses({ ...classItem, featureImage: selectedImg });
        setClassItem(initialFormState);
        hide();
    }}>
      <input
        type="text"
        name="title"
        value={classItem.title}
        placeholder="Enter Title..."
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="instructor"
        value={classItem.instructor}
        placeholder="Enter Instructor..."
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="description"
        value={classItem.description}
        placeholder="Enter Description..."
        onChange={handleOnChange}
      />
      <div className="selector">
        <label>Duration: </label>
        <select name="duration" onChange={handleOnChange}>
          {times.map((el, index) => (
              <option
                key={index} 
                value={el}>
                {el}
              </option>))}
        </select>
        min
      </div>
      <div className="selector">
        <label>Broadcasting Type: </label>
        <select name="classType" onChange={handleOnChange}>
          <option value="">--Select--</option>
          <option value="live">Live</option>
          <option value="on-demand">On-Demand</option>
        </select>
      </div>
      <input
        type="text"
        name="featureImage"
        placeholder="Enter Image..."
        value={classItem.featureImage}
        onChange={handleOnChange}
      />
      <div className="images">
        {searched
          ? searched.map(image => (
              <img
                className="selected-img"
                style={{
                  height: "100px",
                  width: "100px",
                  margin: "7px"
                }}
                key={image.id}
                src={image.urls.thumb}
                alt={image.alt_description}
                onClick={chosenImage}
              />
            ))
          : null}
      </div>
      <button
        id="searchbtn"
        className="addbtn"
        type="button"
        onClick={searchImage}
        style={{ marginTop: "1em" }}
      >
        Search with <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Unsplash_wordmark_logo.svg/1280px-Unsplash_wordmark_logo.svg.png" alt="unsplash-logo" style={{width: "60px"}}/>
      </button>
      <input type="submit" value="Create Class" />
    </form>
  )
}

export default ClassForm