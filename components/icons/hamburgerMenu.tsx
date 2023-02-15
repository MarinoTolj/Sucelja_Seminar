import Icon from "@mdi/react";
import { mdiMenu, mdiBackburger } from "@mdi/js";
import { useState } from "react";
import Link from "next/link";
import { searchCategories } from "../../helpers/constants";

const HamburgerMenu = () => {
  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);

  const toggleHamburger = () => {
    setToggleHamburgerMenu((prev) => !prev);
  };

  return (
    <nav className="bg-hamburger-menu-background flex items-center text-center relative md:hidden">
      <button onClick={toggleHamburger}>
        <Icon path={mdiMenu} size={2} />
      </button>
      {toggleHamburgerMenu && (
        <aside className="fixed flex flex-col overflow-y-auto top-0 right-0 bg-dark-green text-light-green gap-3 h-full z-20 w-44">
          <button onClick={() => setToggleHamburgerMenu((prev) => !prev)}>
            <Icon path={mdiBackburger} size={2} />
          </button>
          <Link href={`/Login`} onClick={toggleHamburger}>
            Login
          </Link>
          <hr />
          <Link href={`/Register`} onClick={toggleHamburger}>
            Register
          </Link>
          <hr />
          {searchCategories.map((category, index) => (
            <>
              <Link href={`/${category}`} onClick={toggleHamburger} key={index}>
                {category}
              </Link>
              <hr key={index + searchCategories.length} />
            </>
          ))}
        </aside>
      )}
    </nav>
  );
};
export default HamburgerMenu;
