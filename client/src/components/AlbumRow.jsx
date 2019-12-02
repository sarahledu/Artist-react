import React from "react";
import { useState, useEffect } from "react";
import APIHandler from "../api/handler";

const handler = new APIHandler();

export default function AlbumRow() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    handler
      .get("/manage-albums")
      .then(apiRes => {
        setAlbums(apiRes.data);
      })
      .catch(apiErr => console.error(apiErr));
  }, []);

  const deleteAlbum = e => {
    console.log("delete button activated");
  };
  const editAlbum = e => {
    console.log("edit button activated");
  };

  return albums.map((v, i) => (
    <tr key={i}>
      <td>{v.title}</td>
      <td>{v.releaseDate.slice(0, 10)}</td>
      <td>{v.artist}</td>
      <td>
        <img className="cover" src={v.cover} alt="" />
      </td>
      <td>{v.description}</td>
      <td>Coming..</td>
      <td>
        <button onClick={editAlbum}>Edit</button>
      </td>
      <td>
        <button onClick={deleteAlbum}>Delete</button>
      </td>
    </tr>
  ));
}
