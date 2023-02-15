import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../components/button";
import { useAppDispatch } from "../redux/hooks";
import { addUser } from "../redux/users";

export default function Register() {
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const router = useRouter();

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmedPassword) return false;

    dispatch(
      addUser({
        name: userName,
        email,
        password,
        isLoggedIn: false,
      })
    );
    router.push("/Login");
  };

  return (
    <div className="flex flex-col items-center text-center w-full md:w-3/4 mx-auto pb-48 md:bg-beige">
      <h2 className="mt-5">REGISTRATION</h2>
      <form
        className="flex flex-col gap-3 w-3/4 max-w-md mt-16 text-left"
        onSubmit={handleRegistration}
      >
        <div className="flex flex-col">
          <label htmlFor="username" className="cursor-pointer">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="p-1 border-2 border-solid border-slate-200 h-10 mt-1"
            onChange={(e) => setUserName(e.currentTarget.value)}
            value={userName}
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="emailInput" className="cursor-pointer">
            Email
          </label>
          <input
            type="email"
            id="emailInput"
            placeholder="Email"
            className="p-1 border-2 border-solid border-slate-200 h-10 mt-1"
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
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

        <div className="flex flex-col mt-3">
          <label htmlFor="confirm-password" className="cursor-pointer">
            Confirm password
          </label>
          <input
            id="confirm-password"
            type="password"
            placeholder="Password"
            className="p-1 border-2 border-solid border-slate-200 h-10 mt-1"
            onChange={(e) => setConfirmedPassword(e.currentTarget.value)}
            value={confirmedPassword}
          />
        </div>
        <Button type="submit" className="w-full mt-7 mb-7 max-w-md m-auto h-10">
          Create an account
        </Button>
      </form>

      <p className="mt-5">Already have an account?</p>
      <Link href="/Login" className="text-dark-green underline">
        Click here!
      </Link>
    </div>
  );
}
