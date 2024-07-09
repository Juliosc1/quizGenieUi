import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="container mx-auto p-4">
      <h1>Homepage</h1>
      <Link to="/generator">
        <button>Ai page</button>
      </Link>
    </div>
  );
}

export default Homepage;
