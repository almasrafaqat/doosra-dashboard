import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listitem) => (
            <Link to={listitem.url} className="listItem" key={listitem.id}>
              <img src={listitem.icon} />
              <span className="listItemTitle">{listitem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
