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
      <div className="relative m-auto w-40 h-32 md:order-1 md:w-40 invisible md:visible">
        <Link
          href="/"
          className="absolute text-center left-1/3 md:order-0 md:static"
        >
          <Image
            src="/photos/Logo.png"
            alt="Logo"
            className="w-1 md:w-64 bg-cover"
            width={200}
            height={100}
          />
        </Link>
      </div>
      <div className="flex gap-3 md:order-3 items-center p-1 pr-0">
        <AccountIcon size={2} />
        <div className="m-auto w-20 h-auto pt-{10px} text-center md:hidden">
          <Link href="/" className="left-1/3 md:order-0 md:static">
            <Image
              src="/photos/Logo.png"
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
