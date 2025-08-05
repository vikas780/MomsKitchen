'use client'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import '@/app/globals.css'
import Link from 'next/link'
import logo from '@/public/logo1.svg'
import Image from 'next/image'
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
const Navbar = () => {
  const { user } = useKindeBrowserClient()

  console.log('USer from navbar', user)
  const [toggle, setToggle] = useState(false)

  //For small screen navigation
  const handelToggle = () => {
    setToggle(!toggle)
  }

  //To get current path such that we can change our Link color when it is active
  const pathname = usePathname()

  // To prevent hyderation cause due to data present in local storage

  return (
    <header className='flex   px-4 sm:pl-2  sm:pr-10 bg-white  min-h-[70px] tracking-wide relative z-50 '>
      <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
        <Link href='/'>
          <Image src={logo} width={100} height={30} alt='Logo' priority />
        </Link>

        <div
          id='collapseMenu'
          className={`${
            toggle ? 'block' : 'hidden'
          } lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            id='toggleClose'
            onClick={handelToggle}
            className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 fill-black'
              viewBox='0 0 320.591 320.591'
            >
              <path
                d='M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z'
                data-original='#000000'
              ></path>
              <path
                d='M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z'
                data-original='#000000'
              ></path>
            </svg>
          </button>

          <ul className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li className='mb-6 hidden max-lg:block'>
              <Link href='/'></Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-4'>
              <Link
                href='/'
                className={`${
                  pathname === '/'
                    ? 'text-[#8c3e75] font-bold'
                    : 'text-gray-700'
                } hover:border-b-2 border-gray-600 duration-100`}
              >
                Home
              </Link>
            </li>
            <li className='max-lg:border-b max-lg:py-3 px-4'>
              <Link
                href='https://drive.google.com/file/d/1rRB-ropPQize01S1pxsRQ0qNt9fFjUJV/view?usp=sharing'
                target='_blank'
                className={`${
                  pathname === '/menu'
                    ? 'text-blue-700 font-bold'
                    : 'text-gray-700'
                } hover:border-b-2 border-gray-600 duration-100`}
              >
                Menu
              </Link>
            </li>
          </ul>
        </div>

        <div className='flex items-center max-lg:ml-auto space-x-5'>
          {user === undefined ? null : user ? (
            <LogoutLink className='bg-[#8c3e75] p-3 rounded-lg m-4 text-white font-bold'>
              Logout
            </LogoutLink>
          ) : (
            <LoginLink className='bg-[#8c3e75] p-3 rounded-lg m-4 text-white font-bold'>
              Login
            </LoginLink>
          )}

          <button
            id='toggleOpen'
            className='lg:hidden !ml-7'
            onClick={handelToggle}
          >
            <svg
              className='w-7 h-7'
              fill='#000'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
