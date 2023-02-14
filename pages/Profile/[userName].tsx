import Link from "next/link";
import AccountIcon from "../../components/icons/accountIcon";

type PropType = {};

const userName: React.FC<PropType> = (props) => {
  return (
    <>
      <h2 className="text-center pt-3 text-2xl bg-beige">MY DASHBOARD</h2>
      <div className="bg-beige flex pt-3 gap-12">
        <div className="flex flex-col items-center">
          <AccountIcon size={4} />
          <Link href="#" className="text-dark-green">
            Edit icon
          </Link>
        </div>
        <div>
          <p>PLACEHOLDER FOR USERNAME</p>
          <Link href="#" className="text-2xl text-dark-green">
            Change Password
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-center pt-3 text-2xl bg-beige">MY BIRDS</h2>
      </div>
    </>
  );
};
export default userName;
