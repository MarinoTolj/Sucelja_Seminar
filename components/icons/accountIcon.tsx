import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";

type PropType = {};

const AccountIcon: React.FC<PropType> = (props) => {
  return (
    <div className="flex-none order-0 flex-grow">
      <Icon path={mdiAccountCircle} title="User Profile" size={1.5} />
    </div>
  );
};
export default AccountIcon;
