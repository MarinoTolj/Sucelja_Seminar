import Link from 'next/link'
import React from 'react'
import Button from "../components/button"


export default function Login() {

  return (
    <div className='flex flex-col items-center text-center w-full md:w-3/4 mx-auto md:bg-light-green'>
      <form className="flex flex-col gap-3 w-3/4 max-w-md mt-16 text-left">
        <div className='flex flex-col'>
          <label htmlFor="email">Username/Email</label>
          <input type="text" id="email" placeholder='Username/Email' className='p-1 border-2 border-solid border-slate-200 h-10 mt-1 cursor-pointer'/>
        </div>

        <div className='flex flex-col mt-3'>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder='Password' className='p-1 border-2 border-solid border-slate-200 h-10 mt-1 cursor-pointer'/>
        </div>
        <Button type="submit" className='w-full mt-7 mb-7 max-w-md h-10'>Login</Button>
      </form>

        <Link href="#" className='text-dark-green mt-5 mb-7 underline'>Forgot Password?</Link>
        <p>Don't have an account?</p>
        <Link href="#" className='text-dark-green underline mb-16'>Click here!</Link>
    </div>
  )
}
