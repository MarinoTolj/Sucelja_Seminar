import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { searchCategories } from "../helpers/constants";
import useOnClickOutside from "../helpers/useOnClickOutside";
import SearchIcon from "./icons/searchIcon";

type PropType = {};

const SearchBar: React.FC<PropType> = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [userClicked, setUserClicked] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef(null);
  const router = useRouter();

  useOnClickOutside(dropdownRef, () => setUserClicked(0));

  const handleSearch = () => {
    router.push(`/${searchValue}`);
  };

  const handleInputClick = () => {
    setUserClicked((prev) => prev + 1);
  };

  return (
    <div className="relative flex self-center mb-2 w-full flex-col md:order-2 md:mb-0">
      <div className="flex w-full self-center justify-center">
        <form onSubmit={handleSearch} className="w-5/6 max-w-4xl">
          <input
            ref={inputRef}
            placeholder="Search"
            onChange={(e) => setSearchValue(e.currentTarget.value)}
            onClick={handleInputClick}
            className="w-full h-9 pl-1"
          />
        </form>
        <SearchIcon searchValue={searchValue} />
      </div>

      {userClicked >= 1 && document?.activeElement === inputRef.current && (
        <div
          ref={dropdownRef}
          className="bg-white absolute top-9 flex flex-col border-solid border-gray-300 border-2 z-10 w-5/6 self-center max-w-4xl mr-9"
        >
          {searchCategories
            .filter((category) =>
              category
                .toLocaleLowerCase()
                .startsWith(searchValue.toLocaleLowerCase())
            )
            .map((category, index) => (
              <Link key={index} href={`/${category}`} className="text-center">
                <button>{category}</button>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
