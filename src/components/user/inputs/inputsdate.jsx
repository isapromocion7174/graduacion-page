import React from "react";

const inputsdate = () => {
    return (
        <>
            <div>
                <label
                    htmlFor="birthdate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Fecha de Nacimiento <span className="text-red-500">*</span>
                </label>
                <input
                    type="date"
                    id="birthdate"
                    name="fechaNacimiento"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="birthplace"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Lugar de Nacimiento <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="birthplace"
                    name="lugarNacimiento"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ciudad, País"
                    required
                />
            </div>
        </>
    );
};

export default inputsdate;
