import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { useRouter } from "next/router";
import Link from "next/link";

const SearchIcon = (props: { searchValue: string }) => {
  const router = useRouter();

  const onClick = () => {
    router.push;
  };
  return (
    <Link
      href={`/${props.searchValue}`}
      className="bg-gray-300 w-9 flex justify-center items-center"
      aria-label="shopping-cart-icon"
    >
      <Icon path={mdiMagnify} size={1} />
    </Link>
  );
};
export default SearchIcon;
