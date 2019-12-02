import React from "react";
import AlbumRow from "./../components/AlbumRow";

export default function AlbumTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>release Date</th>
          <th>Artist</th>
          <th>Cover</th>
          <th>description</th>
          <th>Rates</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <AlbumRow />
      </tbody>
    </table>
  );
}
