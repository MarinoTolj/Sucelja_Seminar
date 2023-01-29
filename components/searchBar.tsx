import Link from "next/link";
import { useRouter } from "next/router";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { searchCategories } from "../types/searchCategories";
import SearchIcon from "./icons/searchIcon";

type PropType = {};

const SearchBar: React.FC<PropType> = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [userClicked, setUserClicked] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/AllCategories/${searchValue}`);
  };

  const handleInputClick = () => {
    setUserClicked((prev) => prev + 1);
  };

  return (
    <div className="flex self-center flex-col">
      <div className="flex self-center">
        <form onSubmit={handleSearch}>
          <input
            ref={inputRef}
            placeholder="Search"
            onChange={(e) => setSearchValue(e.currentTarget.value)}
            onClick={handleInputClick}
          />
        </form>
        <SearchIcon searchValue={searchValue} />
      </div>
      {userClicked >= 1 && document?.activeElement === inputRef.current && (
        <div className="bg-white flex flex-col border-solid border-gray-300 border-2 z-10">
          {searchCategories
            .filter((category) =>
              category
                .toLocaleLowerCase()
                .startsWith(searchValue.toLocaleLowerCase())
            )
            .map((category, index) => (
              <Link
                key={index}
                href={`/AllCategories/${category}`}
                className="text-center"
              >
                <button>{category}</button>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
