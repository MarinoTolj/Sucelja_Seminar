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
    <Link href={`/AllCategories/${props.searchValue}`} className="bg-gray-300">
      <Icon path={mdiMagnify} size={0.5} style={{ marginTop: "5 px" }} />
    </Link>
  );
};
export default SearchIcon;
