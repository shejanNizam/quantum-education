"use client";

import LOGO from "../assets/logo.png";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMouseEnter = (index) => setActiveMenu(index);
  const handleMouseLeave = () => setActiveMenu(null);

  const menuItems = [
    { href: "/about-us", label: "About Us" },
    { href: "/academics", label: "Academics" },
    { href: "/tution-financial", label: "Tuition & Financial Aid" },
    { href: "/current-students", label: "Current Students" },
    { href: "/news-media", label: "News and Media" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-1 sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link href="/">
            <Image src={LOGO} alt="logo" width={100} height={100} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((menu, index) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center font-semibold py-2 px-4 rounded-md hover:bg-primary/10 focus:outline-none ${
                  isScrolled ? "text-black" : "text-primary"
                }`}
                aria-haspopup="true"
                aria-expanded={activeMenu === index ? "true" : "false"}
                onClick={() => window.innerWidth <= 768 && setActiveMenu(index)} // Toggle on mobile click
              >
                {menu.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 ml-2 transform transition-transform duration-300 ease-in-out ${
                    activeMenu === index ? "rotate-180" : "rotate-0"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 text-primary dark:text-white rounded-lg shadow-lg transition-all duration-200 ease-in-out ${
                  activeMenu === index
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
                aria-hidden={activeMenu !== index}
              >
                <Link
                  href={`/${menu.label.toLowerCase().replace(" ", "-")}`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none"
                >
                  Link 11111
                </Link>
                <Link
                  href={`/${menu.label
                    .toLowerCase()
                    .replace(" ", "-")}-details`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none"
                >
                  Link 2
                </Link>
                <Link
                  href={`/${menu.label.toLowerCase().replace(" ", "-")}-info`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none"
                >
                  Link 3
                </Link>
              </div>
            </div>
          ))}
          {/* Contact Us Button for Desktop */}
          <button className="customButton">Contact Us</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          {menuItems.map((menu, index) => (
            <div key={menu.label} className="relative w-full">
              <button
                className="text-lg text-primary dark:text-white py-2 px-4 w-full text-left flex justify-between items-center"
                onClick={() =>
                  setActiveMenu(activeMenu === index ? null : index)
                }
              >
                {menu.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 ml-2 transform transition-transform duration-300 ease-in-out ${
                    activeMenu === index ? "rotate-180" : "rotate-0"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </button>

              <div
                className={`${
                  activeMenu === index ? "block" : "hidden"
                } mt-2 pl-4 w-full space-y-2`}
              >
                <Link
                  href={`/${menu.label.toLowerCase().replace(" ", "-")}`}
                  className="block px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none"
                >
                  Link 1
                </Link>
                <Link
                  href={`/${menu.label
                    .toLowerCase()
                    .replace(" ", "-")}-details`}
                  className="block px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none"
                >
                  Link 2
                </Link>
                <Link
                  href={`/${menu.label.toLowerCase().replace(" ", "-")}-info`}
                  className="block px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none"
                >
                  Link 3
                </Link>
              </div>
            </div>
          ))}
          {/* Contact Us Button for Mobile */}
          <button className="customButton">Contact Us</button>
        </div>
      </div>
    </nav>
  );
}
