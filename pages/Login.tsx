import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../components/button";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loginUser, usersSelector } from "../redux/users";
import Head from "next/head";

export default function Login() {
  const dispatch = useAppDispatch();
  const [userNameEmail, setUserNameEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      loginUser({
        name: userNameEmail,
        password,
      })
    );
    router.push("/Profile/" + userNameEmail);
  };

  return (
    <>
      <Head>
        <title>Login | BuyBirds</title>
      </Head>
      <div className="flex flex-col items-center text-center w-full md:w-3/4 mx-auto pb-48 md:bg-beige">
        <h2 className="mt-5 text-lg font-semibold">Log in to buy birds!</h2>
        <form
          className="flex flex-col gap-3 w-3/4 max-w-md mt-16 text-left"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="cursor-pointer">
              Username/Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Username/Email"
              className="p-1 border-2 border-solid border-slate-200 h-10 mt-1"
              onChange={(e) => setUserNameEmail(e.currentTarget.value)}
              value={userNameEmail}
            />
          </div>

          <div className="flex flex-col mt-3">
            <label htmlFor="password" className="cursor-pointer">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="p-1 border-2 border-solid border-slate-200 h-10 mt-1"
              onChange={(e) => setPassword(e.currentTarget.value)}
              value={password}
            />
          </div>
          <Button
            type="submit"
            className="w-full mt-7 mb-7 max-w-md m-auto h-10"
          >
            Login
          </Button>
        </form>

        <Link href="#" className="text-dark-green mt-5 mb-7 underline">
          Forgot Password?
        </Link>
        <p>Don&apos;t have an account?</p>
        <Link href="/Register" className="text-dark-green underline">
          Click here!
        </Link>
      </div>
    </>
  );
}
