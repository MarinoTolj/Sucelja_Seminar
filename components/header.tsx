import Link from "next/link";
import AccountIcon from "./icons/accountIcon";
import HamburgerMenu from "./icons/hamburgerMenu";
import ShoppingCart from "./icons/shoppingCartIcon";
import SearchBar from "./searchBar";

const Header = () => {
  return (
    <header className="bg-main-green-color h-36 flex flex-col justify-between md:flex-row md:items-center">
      <p className="text-center text-2xl md:order-1">
        <Link href="/">BuyBirds</Link>
      </p>
      <div className="flex items-start gap-3 md:order-3">
        <AccountIcon size={2} />
        <ShoppingCart />
        <HamburgerMenu />
      </div>
      <SearchBar />
    </header>
  );
};
export default Header;
