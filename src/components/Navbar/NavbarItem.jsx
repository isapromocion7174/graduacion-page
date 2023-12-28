import Dropdown from "./Dropdown.jsx";
import React, { useEffect } from "react";
import { useUserStore } from "@/stores/userStore.js";

const NavbarItem = ({
    name,
    path,
    dropDown,
    dropDownOptions,
    admin = false,
    className = "",
}) => {
    const id = `dropdownNavbar ${name} ${crypto.randomUUID()}`;
    return (
        <>
            {!dropDown ? (
                <li className={className}>
                    <a
                        href={path}
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                        {name}
                    </a>
                </li>
            ) : (
                <li className={className}>
                    <button
                        id="dropdownNavbarLink"
                        data-dropdown-toggle={id}
                        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    >
                        {name}
                        <svg
                            className="w-2.5 h-2.5 ms-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                    {dropDownOptions && (
                        <Dropdown
                            id={id}
                            dropDownOption={dropDownOptions}
                            admin={admin}
                        />
                    )}
                </li>
            )}
        </>
    );
};

export default NavbarItem;
