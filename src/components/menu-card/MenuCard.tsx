import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const MenuCard = (item) => {
  const hasarrow = item?.listItems;
  const [open, setOpen] = useState(false);

  const onClickHandler = (event) => {
    setOpen((prevState) => !prevState);
    // setOpen(!open);
  };
  const combinedClassName = `${hasarrow ? "has-arrow" : ""} ${
    open && hasarrow ? "has-arrow arrow-down" : ""
  }`;

  return (
    <ul className="menu-list">
      <li className="menu-label">{item.label}</li>
      <li>
        <NavLink to={item.url && item.url} className={combinedClassName} onClick={onClickHandler}>
          <img src={item.icon} alt={item.label} />
          {item.title}
        </NavLink>
        {item.listItems && (
          <ul className={` ${open ? "show" : "content"}`}>
            {item.listItems?.map((list) => (
              <li className="menu--list" key={list.id}>
                <NavLink to={list.url}>
                  <FaLongArrowAltRight />
                  {list.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default MenuCard;
