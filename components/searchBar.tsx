import Link from "next/link";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { searchCategories } from "../types/searchCategories";
import SearchIcon from "./icons/searchIcon";

type PropType = {};

const SearchBar: React.FC<PropType> = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [userSearched, setUserSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("hello");
  }, [searchValue]);

  return (
    <div className="flex self-center flex-col">
      <div className="flex self-center">
        <input
          ref={inputRef}
          placeholder="Search"
          onChange={(e) => setSearchValue(e.currentTarget.value)}
        />
        <SearchIcon />
      </div>

      {searchValue && document.activeElement === inputRef.current && (
        <div className="bg-white flex flex-col border-solid border-gray-300 border-2">
          {searchCategories.map((category, index) => (
            <button key={index}>
              <Link
                href={`/AllCategories/${category}`}
                onClick={() => setUserSearched((prev) => !prev)}
              >
                {category}
              </Link>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
