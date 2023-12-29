import React from "react";

const Dropdown = ({ dropDownOption, id, admin = false }) => {
    return (
        <div
            id={id}
            className="z-50 absolute hidden font-normal bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700 dark:divide-gray-600 border-gray-300 dark:border-none shadow-sm border-2"
        >
            <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownLargeButton"
            >
                {dropDownOption.map((item, index) => {
                    return (
                        <li key={index}>
                            <a
                                href={item.path}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                {item.name}
                            </a>
                        </li>
                    );
                })}
            </ul>

            {admin && (
                <div className="py-1">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Sign out
                    </a>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
