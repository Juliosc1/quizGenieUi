import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles";
import Button from "../components/ui/Button";

function Homepage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/generator")
  }

  return (
    <div className="flex flex-col h-full w-full overflow-auto p-0 md:p-6">
      <div className={`${styles.flexCenter} flex-col h-full w-full p-6 rounded-md bg-white border border-gray-200 gap-6`}>
        <h1 className={`${styles.heading3}`}>Homepage</h1>
        <div className="flex w-40">
          <Button color="primary" onClick={handleClick}>Ai Generator</Button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
