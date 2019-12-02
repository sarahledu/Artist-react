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
  console.log(albums);
  return albums.map((v, i) => (
    <tr key={i}>
      <td>{v.title}</td>
      <td>{v.releaseDate}</td>
      <td>{v.artist}</td>
      <td>
        <img className="cover" src={v.cover} alt="" />
      </td>
      <td>{v.description}</td>
      <td>{v.rates}</td>
      <td>{v.rates}</td>
      <td>{v.rates}</td>
    </tr>
  ));
}
