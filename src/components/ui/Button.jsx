import React from 'react'
import styles from '../../styles';

const Button = ({ children, color, onClick }) => {
  
  let colorBtn = "";

  if (color === "primary") {
    colorBtn = "bg-blue-500 hover:bg-blue-600 text-white"
  } else if (color === "secondary") {
    colorBtn = "bg-blue-700 hover:bg-blue-800 text-white"
  } else if (color === "basic") {
    colorBtn = "bg-gray-100 border border-gray-200 hover:bg-gray-200 text-text_color"
  } else if (color === "basic_outline") {
    colorBtn = "border border-gray-500 hover:bg-gray-200 hover:border-none text-text_color"
  } else if (color === "success") {
    colorBtn = "bg-green-500 hover:bg-green-500_hover hover:border-none text-white"
  }

  return (
    <button type='submit' onClick={onClick} className={`${styles.label2} ${colorBtn} h-[40px] px-4 rounded-md w-full`}>{children}</button>
  )
}

export default Button