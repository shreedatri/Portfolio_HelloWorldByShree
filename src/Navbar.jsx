import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 1000); // wait 2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/*INTRO TO SPLASH SCREEN*/}
      <AnimatePresence>
        {!animate && (

          <motion.div
            className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 via-cyan-500 to-purple-950 z-50 space-y-4"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Image with shared layoutId */}
            <motion.img
              layoutId="logo-img"
              src="Profile-Photoroom.png"
              alt="Logo"
              className="h-24 w-24 rounded-full border-4 border-purple-400 bg-gradient-to-br from-purple-900 via-cyan-500 to-purple-950 shadow-[0_0_20px_black]"
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              transition={{ duration: 1 }}
            />

            {/* Name with shared layoutId */}
            <motion.h1
              layoutId="logo-text"
              className="text-5xl md:text-6xl font-bold text-rose-100"
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              transition={{ duration: 1 }}

            >
              𝐒𝐡𝐫𝐞𝐞𝐝𝐚𝐭𝐫𝐢 𝐒𝐚𝐡𝐚
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>



      <nav className="md:rounded-lg lg:md:rounded-lg bg-neutral-950 fixed w-full z-20 top-0 start-0 border-b border-2 border-cyan-400 shadow-[0_0_20px_cyan] mb-5">
        <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {animate && (
              <>
                <motion.img
                  layoutId="logo-img"
                  src="portfolio.jpg"
                  alt="Logo"
                  className="h-8 rounded-full border-2 border-cyan-400 hover:scale-110 transition-transform"
                />
                <motion.span
                  layoutId="logo-text"
                  className="self-center text-white font-semibold whitespace-nowrap"
                >
                  Shreedatri Saha
                </motion.span>
              </>
            )}
          </a>

          {/* Right buttons */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">


            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center 
                       text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
                       "
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Menu links */}
          <div
            className={` items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"
              }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 
               rounded-lg bg-nuetral-950 md:space-x-8 rtl:space-x-reverse md:flex-row 
               md:mt-0 md:border-0 md:bg-neutral-950 dark:bg-neutral-950 md:dark:bg-gray-900 
               dark:border-gray-700 text-gray-900 md:text-white dark:text-gray-300
               sm:text-white ">
              <li className="">
                <a
                  href="#"
                  className="block py-2 px-3 text-white sm:text-black rounded-sm
                           md:bg-transparent md:text-cyan-300 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  &lt;Home /&gt;
                </a>
              </li>
              {/* <li>
                <a
                  href="#edu"
                  className="block py-2 px-3 text-gray-100 rounded-sm hover:bg-gray-100 
                           md:hover:bg-transparent md:hover:text-cyan-300 md:p-0 
                           md:dark:hover:text-blue-500 dark:text-white 
                           dark:hover:bg-gray-700 dark:hover:text-white 
                           md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  &lt;Education /&gt;
                </a>
              </li> */}
              <li>
                <a
                  href="#skills"
                  className="block py-2 px-3 text-gray-100 rounded-sm hover:bg-gray-100 
                           md:hover:bg-transparent md:hover:text-cyan-300 md:p-0 
                           md:dark:hover:text-blue-500 dark:text-white 
                           dark:hover:bg-gray-700 dark:hover:text-white 
                           md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  &lt;Skills /&gt;
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-3 text-gray-100 rounded-sm hover:bg-gray-100 
                           md:hover:bg-transparent md:hover:text-cyan-300 md:p-0 
                           md:dark:hover:text-blue-500 dark:text-white 
                           dark:hover:bg-gray-700 dark:hover:text-white 
                           md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  &lt;Projects /&gt;
                </a>
              </li>
              <li>
                <a
                  href="#exp"
                  className="block py-2 px-3 text-gray-100 rounded-sm hover:bg-gray-100 
                           md:hover:bg-transparent md:hover:text-cyan-300 md:p-0 
                           md:dark:hover:text-blue-500 dark:text-white 
                           dark:hover:bg-gray-700 dark:hover:text-white 
                           md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  &lt;Experience /&gt;
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 text-gray-100 rounded-sm hover:bg-gray-100 
                           md:hover:bg-transparent md:hover:text-cyan-300 md:p-0 
                           md:dark:hover:text-blue-500 dark:text-white 
                           dark:hover:bg-gray-700 dark:hover:text-white 
                           md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  &lt;Connect /&gt;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
