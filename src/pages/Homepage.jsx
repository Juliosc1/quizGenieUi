import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="flex flex-col h-full w-full md:rounded-tl-lg overflow-auto gap-6 ">
      <h1>Homepage</h1>
      <Link to="/generator">
        <button>Ai page</button>
      </Link>
    </div>
  );
}

export default Homepage;
