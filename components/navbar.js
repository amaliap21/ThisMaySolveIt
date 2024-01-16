import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import HamburgerIcon from "./icons/hamburger-icon";
import CrossIcon from "./icons/cross-icon";

const Navbar = ({ expandNavbar, setExpandNavbar, contactRef }) => {
  const pathname = usePathname();
  const blackBgRef = useRef(null);

  // Define the path data as an array of objects
  const path = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Ideas",
      url: "/Ideas",
    },
    {
      name: "About",
      url: "/About",
    },
    {
      name: "",
      url: "/Ideas/Ideas-6",
    },
  ];

  // Close Navbar when user clicks on black background stuffs
  useEffect(() => {
    function handleClickOutside(event) {
      if (blackBgRef.current && blackBgRef.current.contains(event.target)) {
        setExpandNavbar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setExpandNavbar]);

  const handleContactClick = () => {
    setExpandNavbar(false);

    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="sticky left-0 right-0 top-0 flex justify-between  z-20  w-full bg-neutral-800 py-3 px-7 lg:px-20 xl:px-40 2xl:px-52 lg:py-3">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Logo tmsi"
        width={110}
        height={56}
        className="w-[50px] lg:w-[50px] aspect-video rounded"
      />

      {/* Hamburger button to popUp menu on mobile  */}
      <button
        onClick={() => setExpandNavbar(!expandNavbar)}
        aria-label="Hamburger Button"
      >
        <HamburgerIcon
          size={35}
          className="fill-white w-[35px] h-[35px] flex lg:hidden"
        />
      </button>

      {/* Container for mapping links */}
      <ul
        className={`fixed right-0 top-0 z-10 flex h-full w-7/12 flex-col bg-neutral-800 px-10 sm:px-20 md:px-24 max-lg:py-10 font-montserrat text-base duration-300 ease-in-out lg:static lg:h-auto lg:flex-1 lg:justify-end lg:translate-x-0 lg:flex-row lg:items-end lg:border-none lg:bg-transparent xl:text-xl ${expandNavbar ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          onClick={() => setExpandNavbar(false)}
          className="ml-auto block lg:hidden"
        >
          <CrossIcon size={20} className="fill-white" />
        </button>

        {path.map((item) => {
          // If the button have subtitle to mapping with dropdown
          return (
            // If the path has no subtitle
            <Link key={item.name} href={item.url}>
              <li
                className={`${pathname.toLowerCase() === item.url.toLowerCase()
                  ? "text-custom-yellow"
                  : "text-white"
                  }  lg:ml-8 xl:ml-8 2xl:ml-8 hover:text-custom-yellow`}
              >
                {/* gap-5 lg:gap-4 xl:gap-6 2xl:gap-8 */}
                {item.name}
              </li>
            </Link>
          );
        })}

        {/* "Contact" menu item */}
        <li
          onClick={handleContactClick}
          className={`text-white hover:text-custom-yellow cursor-pointer`}
        >
          Contact
        </li>
      </ul>

      {/* Black background on mobile behind click detail navbar */}
      {expandNavbar && (
        <div
          ref={blackBgRef}
          className="fixed inset-0 z-0 h-full w-full bg-opacity-40 bg-black lg:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;
