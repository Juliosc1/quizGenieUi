import React from 'react'
import { PiBooks } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { RiRobot2Line } from "react-icons/ri";
import { FaFolder } from "react-icons/fa";
import styles from '../../styles';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='flex items-center justify-start flex-col w-20 border gap-6'>
      <Link to="/">
        <div className={`${styles.flexCenter} flex-col ${styles.iconLarge} mt-4 mb-10`}>
          <PiBooks className={`text-blue-600  ${styles.iconMedium}`} />
          <p className='text-xs font-semibold'>Quiz</p> 
        </div>
      </Link>

      <Link to="/">
        <div className={`${styles.flexCenter} ${styles.iconLarge} border border-gray-300 rounded-md`}>
          <AiOutlineHome className={`text-blue-600 font-semibold ${styles.iconSmall}`} /> 
        </div>
      </Link>

      <Link to="/generator">
        <div className={`${styles.flexCenter} ${styles.iconLarge} border border-gray-300 rounded-md`}>
          <RiRobot2Line className={`text-blue-600 font-semibold ${styles.iconSmall}`} /> 
        </div>
      </Link>
      
      <div className={`${styles.flexCenter} ${styles.iconLarge} border border-gray-300 rounded-md`}>
        <FaFolder className={`text-blue-600 font-semibold ${styles.iconSmall}`} /> 
      </div>
    </div>
  )
}

export default Sidebar