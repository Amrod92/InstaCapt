import { type NextPage } from 'next'

import { PageLayout } from '~/components/layout'
import Example from './example'

const PricingPage: NextPage = () => {
  return (
    <section
      className="
   relative
   z-20
   overflow-hidden
   pb-12
   pt-20
   lg:pb-[90px]
   lg:pt-[120px]
   "
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="text-primary mb-2 block text-lg font-semibold dark:text-white">
                Pricing Table
              </span>
              <h2
                className="
                  text-dark
                  mb-4
                  text-3xl
                  font-bold
                  dark:text-white
                  sm:text-4xl
                  md:text-[40px]
                  "
              >
                Our Pricing Plan
              </h2>
              <p className="text-body-color text-base dark:text-white">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="
               border-primary
               shadow-pricing
               relative
               z-10
               mb-10
               overflow-hidden
               rounded-xl border border-opacity-20
               px-8
               py-10
               dark:border-none
               dark:bg-neutral-800
               sm:p-12 lg:px-6
               lg:py-10
               xl:p-12
               "
            >
              <span className="text-primary mb-4 block text-lg font-semibold dark:text-white">
                Personal
              </span>
              <h2 className="text-dark mb-5 text-[42px] font-bold dark:text-white">
                $59
                <span className="text-body-color text-base font-medium dark:text-white">
                  / year
                </span>
              </h2>
              <p
                className="
                  text-body-color mb-8
                  border-b
                  border-[#F2F2F2]
                  pb-8
                  text-base
                  dark:text-gray-400 
                  "
              >
                Perfect for using in a personal website or a client project.
              </p>
              <div className="mb-7">
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  1 User
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  All UI components
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  Lifetime access
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  Free updates
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  Use on 1 (one) project
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  3 Months support
                </p>
              </div>
              <a
                href="javascript:void(0)"
                className="
                  text-primary
                  hover:bg-primary
                  hover:border-primary
                  block
                  w-full
                  rounded-md
                  border
                  border-[#D4DEFF]
                  bg-transparent
                  p-4 text-center
                  text-base
                  font-semibold
                  transition
                  hover:text-white dark:text-white dark:hover:border-purple-600
                  dark:hover:bg-violet-800
                  "
              >
                Choose Personal
              </a>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                        <stop
                          offset="1"
                          stop-color="#C4C4C4"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="dark: absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      className="fill-blue-700 dark:fill-white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="
               border-primary
               shadow-pricing
               relative
               z-10
               mb-10
               overflow-hidden
               rounded-xl border border-opacity-20
               px-8
               py-10
               dark:border-none
               dark:bg-neutral-800
               sm:p-12 lg:px-6
               lg:py-10
               xl:p-12
               "
            >
              <span className="text-primary mb-4 block text-lg font-semibold dark:text-white ">
                Business
              </span>
              <h2 className="text-dark mb-5 text-[42px] font-bold dark:text-white">
                $199
                <span className="text-body-color text-base font-medium dark:text-white">
                  / year
                </span>
              </h2>
              <p
                className="
                  text-body-color mb-8
                  border-b
                  border-[#F2F2F2]
                  pb-8
                  text-base dark:text-gray-400
                  "
              >
                Perfect for using in a Business website or a client project.
              </p>
              <div className="mb-7">
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  5 Users
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  All UI components
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  Lifetime access
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  Free updates
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  Use on 3 (Three) project
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  4 Months support
                </p>
              </div>
              <a
                href="javascript:void(0)"
                className="
                  bg-primary
                  border-primary
                  block
                  w-full
                  rounded-md
                  border
                  p-4
                  text-center text-base
                  font-semibold
                  text-white
                  transition
                  hover:bg-opacity-90
                  dark:border-none
                  dark:bg-violet-800
                  dark:hover:border-purple-600
                  "
              >
                Choose Business
              </a>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                        <stop
                          offset="1"
                          stop-color="#C4C4C4"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      className="fill-blue-700 dark:fill-white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="
               border-primary
               shadow-pricing
               relative
               z-10
               mb-10
               overflow-hidden
               rounded-xl border border-opacity-20
               px-8
               py-10
               dark:border-none
               dark:bg-neutral-800
               sm:p-12 lg:px-6
               lg:py-10
               xl:p-12
               "
            >
              <span className="text-primary mb-4 block text-lg font-semibold dark:text-white ">
                Professional
              </span>
              <h2 className="text-dark mb-5 text-[42px] font-bold dark:text-white">
                $256
                <span className="text-body-color text-base font-medium dark:text-white">
                  / year
                </span>
              </h2>
              <p
                className="
                  text-body-color mb-8
                  border-b
                  border-[#F2F2F2]
                  pb-8
                  text-base dark:text-gray-400
                  "
              >
                Perfect for using in a Professional website or a client project.
              </p>
              <div className="mb-7">
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  Unlimited Users
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  All UI components
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  Lifetime access
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  Free updates
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  Use on Unlimited project
                </p>
                <p className="text-body-color mb-1 text-base leading-loose dark:text-white">
                  12 Months support
                </p>
              </div>
              <a
                href="javascript:void(0)"
                className="
                text-primary
                hover:bg-primary
                hover:border-primary
                block
                w-full
                rounded-md
                border
                border-[#D4DEFF]
                bg-transparent
                p-4 text-center
                text-base
                font-semibold
                transition
                hover:text-white dark:text-white dark:hover:border-purple-600
                dark:hover:bg-violet-800
                  "
              >
                Choose Professional
              </a>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                        <stop
                          offset="1"
                          stop-color="#C4C4C4"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      className="fill-blue-700 dark:fill-white"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      className="fill-blue-700 dark:fill-white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPage
