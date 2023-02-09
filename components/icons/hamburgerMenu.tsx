import Icon from "@mdi/react";
import { mdiMenu, mdiBackburger } from "@mdi/js";
import { useState } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [toggleHumbergerMenu, setToggleHumbergerMenu] = useState(false);

  return (
    <div className="bg-hamburger-menu-background flex items-center relative">
      <button onClick={() => setToggleHumbergerMenu((prev) => !prev)}>
        <Icon path={mdiMenu} size={2} />
      </button>
      {toggleHumbergerMenu && (
        <aside className="fixed flex flex-col overflow-y-auto top-0 right-0 bg-dark-green text-light-green gap-3 h-full z-20 w-32">
          <button onClick={() => setToggleHumbergerMenu((prev) => !prev)}>
            <Icon path={mdiBackburger} size={2} />
          </button>
          <Link href="/AllCategories">All categories</Link>
          <hr />
          <Link href="/AllCategories/Birds">Birds</Link>
          <hr />
        </aside>
      )}
    </div>
  );
};
export default HamburgerMenu;
