import React, { useState } from "react";
import APIHandler from "../api/handler";
const handler = new APIHandler();
console.log("handler=>", handler);

const CreateArtist = props => {
  const [artist, setArtist] = useState({ isBand: false });

  const handleSubmit = e => {
    e.preventDefault();
    handler
      .post("/create-artist", artist)
      .then(apiRes => {
        props.history.push("/manage-artists");
      })
      .catch(apiErr => console.log(apiErr));
  };

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    if (e.target.type === "checkbox") {
      const checkedBoxValue = e.target.checked;

      setArtist({ ...artist, isBand: checkedBoxValue });
    } else {
      setArtist({ ...artist, [key]: value });
    }
  }

  return (
    <div>
      <h1>Create Artist</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
        {/* <label htmlFor="style">Style</label>
        <input id="style" type="text" name="style" /> */}
        <label htmlFor="description">Description</label>
        <input id="description" type="text" name="description" />
        <label htmlFor="isBand">Band</label>
        <input id="isBand" type="checkbox" name="isBand" value="true" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateArtist;
