import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formValues, setFormValues] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData();
    for (let key in formValues) {
      formData.append(key,formValues[key])
    }
      // formData.append("firstName", formValues.firstName);
      // formData.append("lastName", formValues.lastName);
      // formData.append("userName", formValues.userName);
      // formData.append("image", formValues.image);

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/users", formData)
      .then(apiRes => {
        console.log(apiRes);
      })
      .catch(apiErr => {
        console.log(apiErr);
      });
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    if (e.target.type === "file") {
      setFormValues({ ...formValues, [key]: e.target.files[0] });
    } else {
      setFormValues({ ...formValues, [key]: value });
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" name="userName" />
        <label htmlFor="firstname">First Name</label>
        <input id="firstname" type="text" name="firstName" />
        <label htmlFor="lastname">Lat Name</label>
        <input id="lastname" type="text" name="lastName" />
        <label htmlFor="image">Upload image</label>
        <input id="image" type="file" name="image" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
