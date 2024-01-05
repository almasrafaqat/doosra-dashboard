import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuList = ({title}) => {
 
  return (
    <Link to="" className="listItem sub-item">
      <FaLongArrowAltRight />
      <span>{title}</span>
    </Link>
  );
};

export default MenuList;
