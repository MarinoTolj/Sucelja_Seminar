import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import AccountIcon from "../../components/icons/accountIcon";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logoutUser, usersSelector, UserType } from "../../redux/users";

type PropType = {};

const findUserByName = (name: string | undefined, users: UserType[]) => {
  if (name === undefined)
    return {
      name: "",
      email: "",
      isLoggedIn: false,
      password: "",
    };
  for (let i = 0; i < users.length; i++) {
    if (name === users[i].name && users[i].isLoggedIn) {
      return users[i];
    }
  }
  return false;
};

const UserName: React.FC<PropType> = (props) => {
  const router = useRouter();
  const users = useAppSelector(usersSelector);
  const [user, setUser] = useState<UserType>({
    name: "",
    email: "",
    isLoggedIn: false,
    password: "",
  });
  const title = `${user.name} | BuyBirds`;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = findUserByName(
      router.query.userName as string | undefined,
      users
    );
    if (user) {
      setUser(user);
    } else {
      router.replace("/Login");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>{title}</title>
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
          <p>{user.name}</p>
          <Link href="#" className="text-2xl text-dark-green underline">
            Change Password
          </Link>
          <Button
            className="w-1/2 h-10"
            onClick={() => dispatch(logoutUser(user.name))}
          >
            Log out
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-center pt-3 text-2xl bg-beige">MY BIRDS</h2>
      </div>
    </>
  );
};
export default UserName;
