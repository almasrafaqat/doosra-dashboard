import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

interface MenuItem {
  id: number;
  label: string;
  title: string;
  url?: string;
  icon: string;
  listItems?: ListItem[];
}

interface ListItem {
  id: number;
  title: string;
  url: string;
}

const MenuCard: React.FC<MenuItem> = (item) => {
  const hasarrow = item?.listItems;

  const [open, setOpen] = useState(false);

  const onClickHandler = () => {
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
        {item.url && (
          <Link
            to={item.url}
            className={combinedClassName}
            onClick={onClickHandler}
          >
            <img src={item.icon} alt={item.label} />
            {item.title}
          </Link>
        )}

        {item.listItems && (
          <ul className={` ${open ? "show" : "content"}`}>
            {item.listItems?.map((list) => (
              <li className="menu--list" key={list.id}>
                {list.url && (
                  <Link to={list.url}>
                    <FaLongArrowAltRight />
                    {list.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default MenuCard;
