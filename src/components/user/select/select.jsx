import React from "react";

const select = () => {
    return (
        <>
            <div>
                <label
                    htmlFor="genero"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Sexo
                </label>
                <select
                    id="genero"
                    name="genero"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange="handleGenderChange(this)"
                >
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
            </div>
            <div>
                <label
                    htmlFor="estadoCivil"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Estado civil
                </label>
                <select
                    id="estadoCivil"
                    name="estadoCivil"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange="handleGenderChange(this)"
                >
                    <option value="masculino">Soltero/a</option>
                    <option value="femenino">Casado/a</option>
                    <option value="otro">Unión libre o unión de hecho.</option>\
                    <option value="femenino">Separado/a</option>
                    <option value="femenino">Divorciado/a</option>
                    <option value="femenino">Viudo/a</option>
                </select>
            </div>
        </>
    );
};

export default select;
