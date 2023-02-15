import Link from "next/link";
import AccountIcon from "./icons/accountIcon";
import HamburgerMenu from "./icons/hamburgerMenu";
import ShoppingCart from "./icons/shoppingCartIcon";
import NavCategories from "./navCategories";
import SearchBar from "./searchBar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-main-green-color h-36 flex flex-col justify-between md:flex-row md:items-center md:relative">
      <div className="flex items-start gap-3 md:order-0">
        <AccountIcon size={2} />
        <Link href="/" className="md:order-0">
          <Image
            src="/photos/BuyBirdsLogo.png"
            alt="Logo"
            className="w-24 md:w-64"
            width={200}
            height={100}
          />
        </Link>
        <ShoppingCart />
        <HamburgerMenu />
      </div>
      <SearchBar />
      <NavCategories />
    </header>
  );
};
export default Header;
