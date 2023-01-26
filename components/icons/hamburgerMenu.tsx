import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

const HamburgerMenu = () => {
  return (
    <div className="bg-hamburger-menu-backgorund">
      <Icon path={mdiMenu} size={1.5} />
    </div>
  );
};
export default HamburgerMenu;
