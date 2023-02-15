import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import AccountIcon from "../../components/icons/accountIcon";

type PropType = {};

const UserName: React.FC<PropType> = (props) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.userName}</title>
      </Head>
      <h2 className="text-center pt-3 text-2xl bg-beige">MY DASHBOARD</h2>
      <div className="bg-beige flex pt-3 gap-12">
        <div className="flex flex-col items-center">
          <AccountIcon size={4} />
          <Link href="#" className="text-dark-green underline">
            Edit icon
          </Link>
        </div>
        <div>
          <p>PLACEHOLDER FOR USERNAME</p>
          <Link href="#" className="text-2xl text-dark-green underline">
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
export default UserName;
