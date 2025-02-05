"use client";

import CustomButtonComp from "@/lib/CustomButtonComp";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaChevronRight, FaTimes } from "react-icons/fa";
import LOGO from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMouseEnter = (index) => setActiveMenu(index);
  const handleMouseLeave = () => setActiveMenu(null);

  const toggleSubMenu = (menuIndex, subMenuIndex) => {
    setActiveSubMenu((prev) => ({
      ...prev,
      [`${menuIndex}-${subMenuIndex}`]: !prev[`${menuIndex}-${subMenuIndex}`],
    }));
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setActiveMenu(null);
    setActiveSubMenu({});
  };

  const menuItems = [
    {
      href: "/about-us",
      label: "About Us",
      subMenu: [
        {
          href: "/about-us/message-founder",
          label: "Message from the Founder",
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
        { href: "/contact", label: "Contact Information" },
        { href: "/about-us/alumni-association", label: "Alumni Association" },
        { href: "/about-us/faqs", label: "FAQs" },
      ],
    },
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
    {
      href: "/tuition-financial",
      label: "Tuition & Financial Aid",
      subMenu: [
        { href: "/tuition-financial/tuition-fees", label: "Tuition and Fees" },
        {
          href: "/tuition-financial/cancellation-refund-policy",
          label: "Cancellation & Refund Policy",
        },
      ],
    },
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
    {
      href: "/news-media",
      label: "News and Media",
      subMenu: [
        { href: "/news-media/press-release", label: "Press Release" },
        { href: "/news-media/news-events", label: "News and Events" },
        { href: "/news-media/blog", label: "Blog" },
      ],
    },
    {
      href: "/partnership",
      label: "Partnership",
      subMenu: [
        { href: "/partnership/hire-our-grads", label: "Hire our Grads" },
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
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div>
          <Link href={`/`}>
            <Image
              objectFit="cover"
              priority={true}
              src={LOGO}
              alt="logo"
              width={120}
              height={120}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          {menuItems.map((menu, menuIndex) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(menuIndex)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center">
                {/* Menu Label as Link */}
                <button
                  className={`flex justify-center items-center gap-1 font-semibold p-2 rounded hover:text-white hover:bg-primary focus:outline-none ${
                    isScrolled ? "text-black" : "text-primary"
                  }`}
                  onClick={closeMobileMenu}
                >
                  <span className="text-sm">{menu.label}</span>
                  <FaChevronDown
                    className={`transform transition-transform duration-300 ${
                      activeMenu === menuIndex ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Submenu Toggle Button */}
                {menu.subMenu && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveMenu(
                        activeMenu === menuIndex ? null : menuIndex
                      );
                    }}
                    className={`ml-1 focus:outline-none ${
                      isScrolled ? "text-black" : "text-primary"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={activeMenu === menuIndex ? "true" : "false"}
                  ></button>
                )}
              </div>

              {/* Submenu */}
              {menu.subMenu && (
                <div
                  className={`absolute left-0 mt-2 p-2 w-72 bg-white text-primary rounded shadow-xl transition-all duration-200 ease-in-out ${
                    activeMenu === menuIndex
                      ? "opacity-200 visible"
                      : "opacity-0 invisible"
                  }`}
                  aria-hidden={activeMenu !== menuIndex}
                >
                  {menu.subMenu.map((sub, subIndex) => (
                    <div
                      key={sub.label}
                      className="relative group"
                      onMouseEnter={() =>
                        sub.subSubMenu
                          ? setActiveSubMenu((prev) => ({
                              ...prev,
                              [`${menuIndex}-${subIndex}`]: true,
                            }))
                          : null
                      }
                      onMouseLeave={() =>
                        sub.subSubMenu
                          ? setActiveSubMenu((prev) => ({
                              ...prev,
                              [`${menuIndex}-${subIndex}`]: false,
                            }))
                          : null
                      }
                    >
                      <div className="flex justify-between items-center px-4 py-2 cursor-pointer hover:text-white hover:bg-primary">
                        {sub.subSubMenu ? (
                          <>
                            <span className="font-medium">{sub.label}</span>
                            <FaChevronRight className="text-sm" />
                          </>
                        ) : (
                          <Link
                            href={sub.href}
                            className="block w-full"
                            onClick={() => setActiveMenu(null)}
                          >
                            {sub.label}
                          </Link>
                        )}
                      </div>

                      {/* Sub-Submenu */}
                      {sub.subSubMenu && (
                        <div
                          className={`absolute top-0 left-full mt-0 p-2 w-72 bg-white text-primary rounded-lg shadow-lg transition-all duration-200 ease-in-out ${
                            activeSubMenu[`${menuIndex}-${subIndex}`]
                              ? "opacity-100 visible"
                              : "opacity-0 invisible"
                          }`}
                          aria-hidden={
                            !activeSubMenu[`${menuIndex}-${subIndex}`]
                          }
                        >
                          {sub.subSubMenu.map((subSub) => (
                            <Link
                              key={subSub.label}
                              href={subSub.href}
                              className="block px-4 p-2 hover:text-white hover:bg-primary"
                              onClick={() => {
                                setActiveMenu(null);
                                setActiveSubMenu({});
                              }}
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
          <Link href={`/career-consultation`}>
            {" "}
            <motion.button
              whileHover={{ scale: 1.1 }} // Animation when hovered
              whileTap={{ scale: 0.8 }} // Animation when clicked
              initial={{ opacity: 0, y: 10 }} // Initial animation on render
              animate={{ opacity: 1, y: 0 }} // Final state of the animation
              transition={{ duration: 0.3 }}
              className="md:text-xs  xl:text-sm customButtonN"
            >
              Schedule Free Career Consultation
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary focus:outline-none"
          aria-label="Toggle Menu"
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
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white z-50 shadow-lg overflow-y-auto">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center px-4 py-3 border-b">
                <Link href={`/`}>
                  <Image
                    objectFit="cover"
                    priority={true}
                    src={LOGO}
                    alt="logo"
                    width={80}
                    height={80}
                  />
                </Link>
                <button onClick={toggleMenu} className="focus:outline-none">
                  <FaTimes size={24} className="text-primary" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col px-4 py-2 space-y-4 bg-white">
                {menuItems.map((menu, menuIndex) => (
                  <div key={menu.label}>
                    <div
                      className="flex justify-between items-center text-lg font-medium text-primary bg-white rounded p-2 hover:text-white hover:bg-primary cursor-pointer "
                      onClick={() => {
                        // If the menu has no subMenu, navigate and close the menu
                        if (!menu.subMenu) {
                          closeMobileMenu();
                        } else {
                          // If it has a subMenu, toggle it
                          setActiveMenu(
                            activeMenu === menuIndex ? null : menuIndex
                          );
                        }
                      }}
                    >
                      {/* Main Menu Link */}
                      {menu.label}
                      <FaChevronDown
                        className={`transform transition-transform ${
                          activeMenu === menuIndex ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Submenu for Mobile */}
                    {menu.subMenu && activeMenu === menuIndex && (
                      <div className="pl-4 mt-2 space-y-2">
                        {menu.subMenu.map((sub, subIndex) => (
                          <div key={sub.label}>
                            <div className="">
                              {/* Submenu Link or Toggle */}
                              {sub.subSubMenu ? (
                                <>
                                  <div
                                    className="focus:outline-none flex justify-between items-center text-primary bg-white rounded p-2 hover:text-white hover:bg-primary cursor-pointer "
                                    onClick={() =>
                                      toggleSubMenu(menuIndex, subIndex)
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={
                                      activeSubMenu[`${menuIndex}-${subIndex}`]
                                        ? "true"
                                        : "false"
                                    }
                                  >
                                    {sub.label}
                                    <FaChevronRight
                                      className={`transform transition-transform ${
                                        activeSubMenu[
                                          `${menuIndex}-${subIndex}`
                                        ]
                                          ? "rotate-90"
                                          : ""
                                      }`}
                                    />
                                  </div>
                                </>
                              ) : (
                                <Link
                                  href={sub.href}
                                  className="block text-sm p-2 font-medium text-primary rounded hover:text-white hover:bg-primary "
                                  onClick={closeMobileMenu}
                                >
                                  {sub.label}
                                </Link>
                              )}
                            </div>

                            {/* Sub-Submenu for Mobile */}
                            {sub.subSubMenu &&
                              activeSubMenu[`${menuIndex}-${subIndex}`] && (
                                <div className="pl-4 mt-1 space-y-1">
                                  {sub.subSubMenu.map((subSub) => (
                                    <Link
                                      key={subSub.label}
                                      href={subSub.href}
                                      className="block text-sm p-2 rounded text-primary hover:text-white hover:bg-primary"
                                      onClick={closeMobileMenu}
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

                {/* Contact Us Button for Mobile */}
                <Link href={`/career-consultation`}>
                  <CustomButtonComp onClick={closeMobileMenu}>
                    <span className="text-sm">
                      Schedule Free Career Consultation
                    </span>
                  </CustomButtonComp>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
