import React from "react";
import { Switch, Route } from "react-router-dom";

//Import views
import Home from "./views/Home";
import ManageArtists from "./views/ManageArtists";
import ManageAlbums from "./views/ManageAlbums";
import CreateArtist from "./views/CreateArtist";
import CreateAlbum from "./views/CreateAlbum";

//Import components
import NavMain from "./components/NavMain";


import "./App.css";

function App() {
  return (
    <div className="App">
        <NavMain />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/manage-artists" component={ManageArtists} />
          <Route path="/manage-albums" component={ManageAlbums} />
          <Route path="/create-artist" component={CreateArtist} />
          <Route path="/create-album" component={CreateAlbum} />
        </Switch>
    </div>
  );
}

export default App;
