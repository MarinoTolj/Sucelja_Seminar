import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";
import Link from "next/link";

type PropType = {
  size: number;
};

const AccountIcon: React.FC<PropType> = (props) => {
  return (
    <Link href="/Profile/4" className="flex-none order-0 md:order-2">
      <Icon path={mdiAccountCircle} title="User Profile" size={props.size} />
    </Link>
  );
};
export default AccountIcon;
