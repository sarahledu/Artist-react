import React, { useState, useEffect } from "react";
import APIHandler from "../api/handler";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes } from '@fortawesome/free-solid-svg-icons'

const handler = new APIHandler();
console.log("handler=>", handler);

const ManageArtists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    handler
      .get("/manage-artists")
      .then(apiRes => {
        console.log("here", apiRes.data);
        setArtists(apiRes.data);
      })
      .catch(apiErr => console.error(apiErr));
  }, []);

  const deleteArtist= ()=>{
    
  }

  return (
    <div>
      <h1>Manage Artists</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Style</th>
            <th>Description</th>
            <th>Is it a band ?</th>
            <th>Rates</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((a, i) => (
            <tr key={i}>
              <td>{a.name}</td>
              <td>{a.style}</td>
              <td>{a.description}</td>
              {a.isBand ? <td>Yes !</td> : <td>No!</td>}
              <td>{a.Rates}</td>
              <td>Edit</td>
              <td onClick={deleteArtist}>X</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageArtists;
