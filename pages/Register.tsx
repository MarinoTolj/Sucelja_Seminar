import Link from "next/link";
import React from "react";
import Button from "../components/button";

export default function Register() {
  return (
    <div className="flex flex-col items-center text-center w-full md:w-3/4 mx-auto pb-48 md:bg-beige">
      <h2 className="mt-5">REGISTRATION</h2>
      <form className="flex flex-col gap-3 w-3/4 max-w-md mt-16 text-left">
        <div className="flex flex-col">
          <label htmlFor="username" className="cursor-pointer">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="p-1 border-2 border-solid border-slate-200 h-10 mt-1"
          />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="email" className="cursor-pointer">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="p-1 border-2 border-solid border-slate-200 h-10 mt-1"
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
          />
        </div>
        <Button type="submit" className="w-full mt-7 mb-7 max-w-md m-auto h-10">
          Create an account
        </Button>
      </form>

      <p className="mt-5">Already have an account?</p>
      <Link href="#" className="text-dark-green underline">
        Click here!
      </Link>
    </div>
  );
}
