import React, { useState } from "react";
import { CardsOption } from "@/config/distribucion/disti";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const YourComponent = () => {
    return (
        <div className="flex flex-col gap-6">
            {CardsOption.filter(
                (option) => option.dropDown && option.dropDownOptions
            ).map((option) => (
                <div key={option.categori}>
                    <div
                        className={` relative 
              flex items-center bg-white shadow-lg p-3 rounded-md borde 
              dark:bg-gray-800 
               dark:a
               px-4 py-2 text-center text-sm font-semibold
                text-gray-700 dark:text-gray-100 outline-none
                  focus-visible:ring
                   md:px-8 md:py-3 md:text-base mb-4
              `}
                    >
                        <h2> {option.categori} </h2>
                    </div>
                    <div>
                        <div className="flex flex-wrap mb-4 gap-3 justify-center sm:justify-start">
                            {option.dropDownOptions.map(
                                (dropdownOption, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl shadow-lg relative border-gray-200 dark:bg-gray-800 dark:border-gray-700 container justify-between text-center w-48 md:w-48 pb-6 mx-auto sm:mx-0
                                            hover:shadow-xl 
                                             hover:scale-105 transition-all duration-200 ease-in-out
                                        "
                                    >
                                        <div className="transform h-44 w-full overflow-hidden mb-3 rounded-t-2xl">
                                            <img
                                                src={dropdownOption.imageUrl}
                                                alt={dropdownOption.name}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <span className="dark:text-white text-gray-800 text-sm font-semibold mb-2 block">
                                            {dropdownOption.name}
                                        </span>
                                        <span className="dark:text-white text-gray-800 text-sm font-semibold mb-2 block">
                                            {dropdownOption.apodo}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default YourComponent;
