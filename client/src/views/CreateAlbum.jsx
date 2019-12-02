import React from "react";
import APIHandler from "../api/handler";
import { useState } from "react";

const handler = new APIHandler();
export default function CreateAlbum() {
  const [album, setAlbum] = useState({});
  const handleSubmit = evt => {
    evt.preventDefault();
    handler
      .post("/create-album", album)
      .then(apiRes => console.log(apiRes))
      .catch(apiErr => console.log(apiErr));
  };
  const handleChange = evt => {
    setAlbum({ ...album, [evt.target.id]: evt.target.value });
  };

  return (
    <div>
      <h1>Create Album</h1>
      <form onClick={handleSubmit} onChange={handleChange} className="form">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />
        <label htmlFor="releaseDate">Release Date</label>
        <input id="releaseDate" type="date" />
        <label htmlFor="cover">Cover</label>
        <input id="cover" type="text" />
        <label htmlFor="description">Description</label>
        <input id="description" type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}
