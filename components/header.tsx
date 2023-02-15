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
      <div className="relative m-auto w-full h-32 md:order-1 md:w-auto invisible md:visible">
        <Link
          href="/"
          className="absolute text-center left-1/3 md:order-0 md:static"
        >
          <Image
            src="/photos/BuyBirdsLogo.png"
            alt="Logo"
            className="w-32 md:w-64"
            width={200}
            height={100}
          />
        </Link>
      </div>
      <div className="flex gap-3 md:order-3 items-center p-1 pr-0">
        <AccountIcon size={2} />
        <div className="m-auto w-full h-auto md:order-1 md:w-auto pt-{10px} text-center md:hidden">
          <Link href="/" className="left-1/3 md:order-0 md:static">
            <Image
              src="/photos/BuyBirdsLogo.png"
              alt="Logo"
              className="w-32 md:w-64"
              width={200}
              height={100}
            />
          </Link>
        </div>
        <ShoppingCart />
        <HamburgerMenu />
      </div>
      <SearchBar />
      <NavCategories />
    </header>
  );
};
export default Header;
