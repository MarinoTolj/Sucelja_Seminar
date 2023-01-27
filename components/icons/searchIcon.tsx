import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const SearchIcon = () => {
  return (
    <div className="bg-gray-300">
      <Icon path={mdiMagnify} size={0.5} style={{ marginTop: "5px" }} />
    </div>
  );
};
export default SearchIcon;
