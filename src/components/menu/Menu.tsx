import "./menu.scss";
import { menu } from "../../data";
import MenuCard from "../menu-card/MenuCard";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item, index) => (
        <MenuCard {...item} key={index} />
      ))}
    </div>
  );
};

export default Menu;
