import Button from "./button";
import { searchCategories } from "../helpers/constants";
import Link from "next/link";

type PropType = {};

const NavCategories: React.FC<PropType> = (props) => {
  return (
    <nav className="hidden md:flex md:gap-5 md:absolute md:justify-center md:top-20 md:w-full">
      <Link href="/">
        <Button className="w-32 h-10 pb-1 text-lg">Home</Button>
      </Link>
      {/* <Link href="/Login">
        <Button className="w-20 h-10 pb-1">Login</Button>
      </Link>
      <Link href="/Register">
        <Button className="w-20 h-10 pb-1">Register</Button>
      </Link> */}
      {searchCategories.map((category, index) => (
        <Link href={`/${category}`} key={index}>
          <Button key={index} className="w-32 h-10 pb-1 text-lg">
            {category}
          </Button>
        </Link>
      ))}
    </nav>
  );
};
export default NavCategories;
