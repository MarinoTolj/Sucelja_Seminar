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
    <div className="bg-hamburger-menu-background flex items-center relative">
      <button onClick={toggleHamburger}>
        <Icon path={mdiMenu} size={2} />
      </button>
      {toggleHamburgerMenu && (
        <aside className="fixed flex flex-col overflow-y-auto top-0 right-0 bg-dark-green text-light-green gap-3 h-full z-20 w-32">
          <button onClick={() => setToggleHamburgerMenu((prev) => !prev)}>
            <Icon path={mdiBackburger} size={2} />
          </button>
          <Link href="/AllCategories" onClick={toggleHamburger}>
            All categories
          </Link>
          <hr />
          {searchCategories.map((category, index) => (
            <>
              <Link
                href={`/AllCategories/${category}`}
                onClick={toggleHamburger}
                key={index}
              >
                {category}
              </Link>
              <hr key={index + searchCategories.length} />
            </>
          ))}
        </aside>
      )}
    </div>
  );
};
export default HamburgerMenu;
