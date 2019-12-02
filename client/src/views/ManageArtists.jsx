import React, { useState, useEffect } from "react";
import APIHandler from "../api/handler";

const handler = new APIHandler();
console.log("handler=>", handler);

const ManageArtists =()=> {
    const [artists, setArtists] =useState([]);


    useEffect(()=> {
        handler
          .get("/manage-artists")
          .then(apiRes => {
            console.log("here", apiRes);
            setArtists(apiRes.data)
            
          })
          .catch(apiErr => console.error(apiErr));
      },[])
    
    
    return (
        <div>
            <h1>Manage Artists</h1>
            <span>{artists}</span>
    
        </div>
    )
}

export default ManageArtists