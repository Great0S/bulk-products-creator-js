import React from "react";
import {Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Read from "./web/read";
import Create from "./web/create";
import Update from "./web/update";

function App() {
  return (
      <div className="main">
        <h2>Bulk Products Creator</h2>
        <div>
          <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/read">Read</Link>
            </li>
            <li>
                <Link to="/create">Create</Link>
            </li>
            <li>
                <Link to="/update">Update</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route exact path="/read" element={<Read/>}/>
          <Route exact path="/create" element={<Create />}/>
          <Route exact path="/update" element={<Update />}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
