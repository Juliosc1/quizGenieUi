import React from "react";
import { Link } from "react-router-dom";
import { PiBooks } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { RiRobot2Line } from "react-icons/ri";
import { FaFolder } from "react-icons/fa";
import styles from "../../styles";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="fixed inset-y-0 left-0 z-50 flex items-center justify-start flex-col w-20 bg-white border-r gap-6 transition-transform transform md:relative md:translate-x-0">
      <Link to="/" onClick={toggleSidebar}>
        <div className={`${styles.flexCenter} flex-col ${styles.iconLarge} mt-4 mb-10`}>
          <PiBooks className={`text-blue-600 ${styles.iconMedium}`} />
          <p className="text-xs font-semibold">Quiz</p>
        </div>
      </Link>
      <Link to="/" onClick={toggleSidebar}>
        <div className={`${styles.flexCenter} ${styles.iconLarge} border border-gray-300 rounded-md`}>
          <AiOutlineHome className={`text-blue-600 font-semibold ${styles.iconSmall}`}/>
        </div>
      </Link>
      <Link to="/generator" onClick={toggleSidebar}>
        <div className={`${styles.flexCenter} ${styles.iconLarge} border border-gray-300 rounded-md`}>
          <RiRobot2Line className={`text-blue-600 font-semibold ${styles.iconSmall}`}/>
        </div>
      </Link>
      <div className={`${styles.flexCenter} ${styles.iconLarge} border border-gray-300 rounded-md`}>
        <FaFolder className={`text-blue-600 font-semibold ${styles.iconSmall}`}/>
      </div>
    </div>
  );
};

export default Sidebar;
