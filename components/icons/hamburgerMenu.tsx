import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

const HamburgerMenu = () => {
  return (
    <div className="bg-hamburger-menu-backgorund">
      <Icon path={mdiMenu} size={2} />
    </div>
  );
};
export default HamburgerMenu;
