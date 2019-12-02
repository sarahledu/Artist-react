import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMain() {
  return (
    <nav className="nav-main">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/manage-artists"> Manage artists</NavLink>
      <NavLink to="/manage-albums">Manage albums</NavLink>
      <NavLink to="/create-artist">Create artist</NavLink>
      <NavLink to="/create-album">Create album</NavLink>
    </nav>
  );
}
