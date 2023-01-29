import Link from "next/link";
import AccountIcon from "./icons/accountIcon";
import HamburgerMenu from "./icons/hamburgerMenu";
import ShoppingCart from "./icons/shoppingCart";
import SearchBar from "./searchBar";

type PropType = {};

const Header: React.FC<PropType> = (props) => {
  return (
    <header className="bg-main-green-color h-36 flex flex-col justify-between">
      <p className="text-center text-2xl">
        <Link href="/">BuyBirds</Link>
      </p>
      <div className="flex items-start gap-3">
        <AccountIcon />
        <ShoppingCart />
        <HamburgerMenu />
      </div>
      <SearchBar />
    </header>
  );
};
export default Header;
