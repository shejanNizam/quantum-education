"use client";

import { FaBars, FaChevronDown, FaChevronRight, FaTimes } from "react-icons/fa";
import LOGO from "../assets/logo.png";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMouseEnter = (index) => setActiveMenu(index);
  const handleMouseLeave = () => setActiveMenu(null);

  const handleSubMenuMouseEnter = (index) => setActiveSubMenu(index);
  const handleSubMenuMouseLeave = () => setActiveSubMenu(null);

  const handleMenuToggle = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleSubMenuToggle = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  const menuItems = [
    {
      href: "/about-us",
      label: "About Us",
      subMenu: [
        {
          href: "/about-us/message-founder",
          label: "Message from the Founder and Chancellor",
        },
        {
          href: "/about-us/message-president",
          label: "Message from the President",
        },
        { href: "/about-us/message-coo", label: "Message from the COO" },
        { href: "/about-us/leadership-staff", label: "Leadership and Staff" },
        { href: "/about-us/school-history", label: "School History" },
        {
          href: "/about-us/accreditation-certification",
          label: "Accreditation and Certification",
        },
        { href: "/about-us/contact-info", label: "Contact Information" },
        { href: "/about-us/alumni-association", label: "Alumni Association" },
        { href: "/about-us/faqs", label: "FAQs" },
      ],
    },
    // about us ok
    {
      href: "/academics",
      label: "Academics",
      subMenu: [
        {
          href: "/academics/professional-studies",
          label: "Professional Studies",
          subSubMenu: [
            {
              href: "/academics/professional-studies/digital-engineering",
              label: "Digital Engineering",
            },
            {
              href: "/academics/professional-studies/digital-business",
              label: "Digital Business",
            },
          ],
        },
        {
          href: "/academics/workforce-accelerator",
          label: "Workforce Accelerator",
          subSubMenu: [
            {
              href: "/academics/workforce-accelerator/digital-health",
              label: "Digital Health Workforce Accelerator",
            },
            {
              href: "/academics/workforce-accelerator/fintech",
              label: "FinTech Workforce Accelerator",
            },
            {
              href: "/academics/workforce-accelerator/executive-mentorship",
              label: "Executive Mentorship",
            },
          ],
        },
        { href: "/academics/graduate", label: "Graduate" },
        { href: "/academics/undergraduate", label: "Undergraduate" },
        { href: "/academics/faculty-members", label: "Faculty Members" },
        { href: "/academics/school-catalog", label: "School Catalog" },
        { href: "/academics/academic-calendar", label: "Academic Calendar" },
      ],
    },
    // academics ok
    {
      href: "/tution-financial",
      label: "Tuition & Financial Aid",
      subMenu: [
        { href: "/tution-financial/tuition-fees", label: "Tuition and Fees" },
        {
          href: "/tution-financial/cancellation-refund-policy",
          label: "Cancellation & Refund Policy",
        },
      ],
    },
    // tution-financial ok
    {
      href: "/current-students",
      label: "Current Students",
      subMenu: [
        { href: "/current-students/student-portal", label: "Student Portal" },
        {
          href: "/current-students/student-services",
          label: "Student Services",
        },
        { href: "/current-students/student-records", label: "Student Records" },
        {
          href: "/current-students/emergency-announcements",
          label: "Emergency Announcements",
        },
      ],
    },
    // current-students ok
    {
      href: "/news-media",
      label: "News and Media",
      subMenu: [
        { href: "/news-media/press-release", label: "Press Release" },
        { href: "/news-media/news-events", label: "News and Events" },
        { href: "/news-media/blog", label: "Blog" },
      ],
    },
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

        {/* Desktop and Tablet Menu */}
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
              >
                {menu.label}
                <FaChevronDown
                  className={`ml-2 transform transition-transform duration-300 ${
                    activeMenu === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {menu.subMenu && menu.subMenu.length > 0 && (
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 text-primary dark:text-white rounded-lg shadow-lg transition-all duration-200 ease-in-out ${
                    activeMenu === index
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                  aria-hidden={activeMenu !== index}
                >
                  {menu.subMenu.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="relative"
                      onMouseEnter={() => handleSubMenuMouseEnter(subIndex)}
                      onMouseLeave={handleSubMenuMouseLeave}
                    >
                      <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        {sub.subSubMenu ? (
                          <span className="text-primary dark:text-gray-200 font-medium">
                            {sub.label}
                          </span>
                        ) : (
                          <Link
                            href={sub.href}
                            className="block text-primary dark:text-gray-200 font-medium"
                          >
                            {sub.label}
                          </Link>
                        )}
                        {sub.subSubMenu && (
                          <FaChevronRight className="text-sm" />
                        )}
                      </div>
                      {sub.subSubMenu && sub.subSubMenu.length > 0 && (
                        <div
                          className={`absolute left-full top-0 mt-0 w-48 bg-gray-100 dark:bg-gray-800 text-primary dark:text-white rounded-lg shadow-lg transition-all duration-200 ease-in-out ${
                            activeSubMenu === subIndex
                              ? "opacity-100 visible"
                              : "opacity-0 invisible"
                          }`}
                          aria-hidden={activeSubMenu !== subIndex}
                        >
                          {sub.subSubMenu.map((subSub, subSubIndex) => (
                            <Link
                              key={subSubIndex}
                              href={subSub.href}
                              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                            >
                              {subSub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* Contact Us Button for Desktop */}
          <button className="customButton">
            <Link href={`/contact`}> Contact Us </Link>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
          <div className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white z-50 shadow-lg">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center px-4 py-3">
                <Image src={LOGO} alt="logo" width={80} height={80} />
                <button onClick={toggleMenu}>
                  <FaTimes size={24} className="text-primary" />
                </button>
              </div>
              <div className="flex flex-col px-4 py-2 space-y-4 overflow-y-auto">
                {menuItems.map((menu, index) => (
                  <div key={menu.label}>
                    <button
                      className="flex justify-between items-center w-full text-lg font-medium py-2 text-primary"
                      onClick={() => handleMenuToggle(index)}
                    >
                      {menu.label}
                      {menu.subMenu && (
                        <FaChevronDown
                          className={`transition-transform ${
                            activeMenu === index ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                    {menu.subMenu && activeMenu === index && (
                      <div className="pl-4 mt-2 space-y-2">
                        {menu.subMenu.map((sub, subIndex) => (
                          <div key={subIndex}>
                            <button
                              className="flex justify-between items-center w-full rounded-md text-sm font-medium px-2 py-2 bg-gray-300 hover:text-primary"
                              onClick={() => handleSubMenuToggle(subIndex)}
                            >
                              {sub.subSubMenu ? (
                                <>
                                  {sub.label}
                                  {sub.subSubMenu && (
                                    <FaChevronRight
                                      className={`transition-transform ${
                                        activeSubMenu === subIndex
                                          ? "rotate-90"
                                          : ""
                                      }`}
                                    />
                                  )}
                                </>
                              ) : (
                                <>
                                  <Link href={sub.href}>
                                    {sub.label}
                                    {sub.subSubMenu && (
                                      <FaChevronRight
                                        className={`transition-transform ${
                                          activeSubMenu === subIndex
                                            ? "rotate-90"
                                            : ""
                                        }`}
                                      />
                                    )}
                                  </Link>
                                </>
                              )}
                            </button>
                            {sub.subSubMenu && activeSubMenu === subIndex && (
                              <div className="pl-4 mt-2 space-y-1">
                                {sub.subSubMenu.map((subSub, subSubIndex) => (
                                  <Link
                                    key={subSubIndex}
                                    href={subSub.href}
                                    className="block rounded-md text-sm px-2 py-1 bg-gray-200 hover:text-primary"
                                  >
                                    {subSub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button className="customButton mt-6">
                  <Link href={`/contact`}> Contact Us </Link>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
