import React from "react";
import styles from "../../styles";
import AvatarUser from "../../assets/AvatarUser.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = ({ toggleSidebar, isSidebarActive }) => {
  return (
    <div className={`${styles.flexBetween} h-20 w-full border-b px-6`}>
      <p>Dashboard</p>
      <div className="flex items-center gap-3">
        <div
          className={`${styles.flexCenter} h-10 w-10 bg-orange-400 rounded-full`}
        >
          <img src={AvatarUser} alt="userLogo" />
        </div>

        <button onClick={toggleSidebar} className={`${styles.flexCenter} md:hidden h-8 w-8`}>
          {isSidebarActive ? <IoClose className={`${styles.iconSmall}`} /> : <IoMenu className={`${styles.iconSmall}`} />}
        </button>
      </div>
    </div>
  );
};

export default Header;
