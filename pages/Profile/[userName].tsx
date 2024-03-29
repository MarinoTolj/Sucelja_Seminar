import Photo from "../../components/photo";
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
      <h2 className="bg-beige text-center text-4xl mb-10 py-5">My dashboard</h2>
      <div className="bg-white pt-3 flex justify-between relative">
        <div className="flex flex-col items-center mr-auto mb-5">
          <div>
            <AccountIcon size={4} />
          </div>
          <Link href="#" className="text-dark-green underline">
            Edit icon
          </Link>
        </div>
        <div className="absolute left-1/2 right-1/2 w-1/2 flex flex-col">
          <p className="text-4xl">{user.name}</p>
          <Link href="#" className="text-xl text-dark-green underline">
            Change Password
          </Link>
          <Button
            className="w-32 h-10"
            onClick={() => dispatch(logoutUser(user.name))}
          >
            Log out
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <div className="">
          <h2 className="bg-beige text-center text-4xl mb-10 py-5">My birds</h2>
          <div className="flex flex-col bg-white mt-3 items-center gap-5 md:flex-row md:flex-wrap md:justify-center">
            <Photo
              src={`/photos/birds/Canary.jpg`}
              alt={"Canary"}
              overlayText={"Canary"}
              clickable
              productType="birds"
            />
            <Photo
              src={`/photos/birds/Crow.jpg`}
              alt={"Crow"}
              overlayText={"Crow"}
              clickable
              productType="birds"
            />
            <Photo
              src={`/photos/birds/Eagle.jpg`}
              alt={"Eagle"}
              overlayText={"Eagle"}
              clickable
              productType="birds"
            />
            <Photo
              src={`/photos/birds/Robin.jpg`}
              alt={"Robin"}
              overlayText={"Robin"}
              clickable
              productType="birds"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 mb-10">
        <h2 className="bg-beige text-center text-4xl mb-10 py-5">
          My purchase history
        </h2>
        <div className="flex flex-col">
          <div className="flex justify-between gap-10 bg-dark-green p-5">
            <p className="text-light-green">Canary, 99€</p>
            <p className="text-light-green">Date: 14.2</p>
            <p className="text-light-green">Amount: x1</p>
          </div>
          <div className="flex justify-between gap-10 bg-white p-5">
            <p className="text-dark-green">Crow, 350€</p>
            <p className="text-dark-green">Date: 14.2</p>
            <p className="text-dark-green">Amount: x1</p>
          </div>
          <div className="flex justify-between gap-10 bg-dark-green p-5">
            <p className="text-light-green">Robin, 200€</p>
            <p className="text-light-green">Date: 13.1</p>
            <p className="text-light-green">Amount: x2</p>
          </div>
          <div className="flex justify-between gap-10 bg-white p-5">
            <p className="text-dark-green">Eagle, 400€</p>
            <p className="text-dark-green">Date: 2.1</p>
            <p className="text-dark-green">Amount: x1</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserName;
