import { type NextPage } from 'next'
import { UserButton, useUser } from '@clerk/nextjs'
import { SignInButton } from '@clerk/nextjs'
import Link from 'next/link'

import ThemeChanger from './DarkSwitch'
import { Disclosure } from '@headlessui/react'

const Navbar: NextPage = () => {
  const user = useUser()

  const navigation = ['Product', 'Features', 'Pricing', 'Company', 'Blog']

  return (
    <div className="w-full">
      <nav className="flex flex-wrap items-center justify-around p-6 shadow-md">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
                <Link href="/">
                  <h1
                    id="instacapt_header"
                    className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-semibold text-transparent"
                  >
                    InstaCapt
                  </h1>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="dark:focus:bg-trueGray-700 ml-auto rounded-md px-2 py-1 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 lg:hidden"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="my-5 flex w-full flex-wrap lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href="/"
                        className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
                      >
                        {item}
                      </Link>
                    ))}
                    <Link
                      href="/"
                      className="mt-3 w-full rounded-md bg-indigo-600 px-6 py-2 text-center text-white lg:ml-5"
                    >
                      Get Started
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
            <li className="nav__item mr-3">
              <Link
                href="/"
                className="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-800 no-underline hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-200 dark:focus:bg-gray-800"
              >
                Home
              </Link>
            </li>
            <li className="nav__item mr-3">
              <Link
                href="/creator"
                className="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-800 no-underline hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-200 dark:focus:bg-gray-800"
              >
                Caption Creator
              </Link>
            </li>
            <li className="nav__item mr-3">
              <Link
                href="/pricing"
                className="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-800 no-underline hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-200 dark:focus:bg-gray-800"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav__item mr-3 hidden space-x-4 lg:flex">
          {!user.isSignedIn && (
            <SignInButton mode="modal">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-5 py-3 text-sm font-medium text-indigo-600 shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-purple-500"
              >
                <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 transform rounded-full bg-pink-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
                <span className="relative text-white">Get Started</span>
              </a>
            </SignInButton>
          )}
          {!!user.isSignedIn && <UserButton afterSignOutUrl="/" />}
          <ThemeChanger />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
