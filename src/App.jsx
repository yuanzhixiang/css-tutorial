import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BasicTriangle from "./pages/BasicTriangle";
import "./style.css";

const tutorials = [
  { id: 1, title: "Basic Triangle Shapes", path: "/basic-triangle" }
];

function Home() {
  return (
    <div className="app">
      <h1>CSS Shape Tutorials</h1>
      <ul className="tutorial-list">
        {tutorials.map(tutorial => (
          <li key={tutorial.id}>
            <Link to={tutorial.path}>{tutorial.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic-triangle" element={<BasicTriangle />} />
      </Routes>
    </BrowserRouter>
  );
}
