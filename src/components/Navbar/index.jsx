import { navbarOptions } from "../../config/config";
import NavbarItem from "./NavbarItem";
import SwitcherDarkMode from "./SwitcherDarkMode.jsx";
import React from "react";
import { useEffect, useState } from "react";
import { useUserStore } from "@/stores/userStore.js";
import { useThemeStore } from "@/stores/themeStore.js";

const ADMIN_ROLE = import.meta.env.PUBLIC_ADMIN_ROLE;

const LogoDarkMode = (props) => {
    return (
        <img
            src="https://res.cloudinary.com/di1hmzv5y/image/upload/v1703890101/TakeThis_te0wjp.png"
            alt="ISA LOGO"
            {...props}
        />
    );
};

const LogoLightMode = (props) => {
    return (
        <img
            src="https://res.cloudinary.com/di1hmzv5y/image/upload/v1703888573/Instituto-Superior-de-Agricultura-ISA-removebg-preview_d7xypv.png"
            alt="ISA LOGO"
            {...props}
        />
    );
};

const index = () => {
    const user = useUserStore((state) => state.user);
    const theme = useThemeStore((state) => state.theme);
    const setTheme = useThemeStore((state) => state.setTheme);
    useEffect(() => {
        if (
            localStorage.getItem("color-theme") === "dark" ||
            (!("color-theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
            setTheme("light");
        }
    }, []);
    return (
        <nav className="bg-[#d0fff3] rela border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-full ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <a
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    {theme == "dark" ? (
                        <LogoDarkMode
                            className="h-6 ms:h-9 
                    md:h-10
                    lg:h-12
                    xl:h-14
                    "
                        />
                    ) : (
                        <LogoLightMode
                            className="h-6 ms:h-9 
                    md:h-10
                    lg:h-12
                    xl:h-14
                    "
                        />
                    )}
                    <span
                        className="self-center text-lg font-semibold whitespace-nowrap dark:text-white
                        ms:text-lg
                        md:text-xl
                    "
                    >
                        ISA PROMOCION 71-74
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-dropdown"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
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
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-dropdown"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700 items-center justify-center">
                        {navbarOptions.map((item, index) => {
                            const notIsAdmin =
                                item.admin &&
                                !(user?.rol?.nombre == ADMIN_ROLE);

                            return (
                                <NavbarItem
                                    key={`${item.name}-${index}`}
                                    name={item.name}
                                    path={item.path}
                                    dropDown={item.dropDown}
                                    dropDownOptions={item.dropDownOptions}
                                    admin={item.admin}
                                    className={notIsAdmin ? "hidden" : ""}
                                />
                            );
                        })}
                        <li>
                            <SwitcherDarkMode />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default index;
