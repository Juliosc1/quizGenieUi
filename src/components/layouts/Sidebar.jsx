import React from "react";
import { Link } from "react-router-dom";
import { PiBooks } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { RiRobot2Line } from "react-icons/ri";
import { FaRegFolder } from "react-icons/fa";
import styles from "../../styles";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="fixed inset-y-0 left-0 top-20 md:top-0 z-50 flex items-center justify-start flex-col w-full md:w-24 bg-white border-r gap-6 transition-transform transform md:relative md:translate-x-0">
      <Link to="/" onClick={toggleSidebar}>
        <div className={`${styles.flexCenter} flex-col ${styles.iconLarge} mt-4 mb-10`}>
          <PiBooks className={`text-primary_color ${styles.iconMedium}`} />
          <p className="text-xs font-semibold">Quiz</p>
        </div>
      </Link>
      <Link to="/" onClick={toggleSidebar}>
        <div className={`${styles.flexCenter} ${styles.iconLarge} border-b md:border border-gray-300 md:rounded-md px-20 md:px-0`}>
          <AiOutlineHome className={`hidden md:flex text-primary_color font-semibold ${styles.iconSmall}`}/>
          <p className={`flex md:hidden ${styles.paragraph} whitespace-nowrap`}>Home</p>
        </div>
      </Link>
      <Link to="/generator" onClick={toggleSidebar}>
        <div className={`${styles.flexCenter} ${styles.iconLarge} border-b md:border border-gray-300 md:rounded-md px-20 md:px-0`}>
          <RiRobot2Line className={`hidden md:flex text-primary_color font-semibold ${styles.iconSmall}`}/>
          <p className={`flex md:hidden ${styles.paragraph} whitespace-nowrap`}>Ai Generator</p>
        </div>
      </Link>
      <div className={`${styles.flexCenter} ${styles.iconLarge} border-b md:border border-gray-300 md:rounded-md px-20 md:px-0`}>
        <FaRegFolder className={`hidden md:flex text-primary_color font-semibold ${styles.iconSmall}`}/>
        <p className={`flex md:hidden ${styles.paragraph} whitespace-nowrap`}>My Courses</p>
      </div>
    </div>
  );
};

export default Sidebar;
