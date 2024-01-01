import React from "react";

const inputstext = () => {
    return (
        <>
            <div>
                <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Nombre del evento
                    <span class="text-red-500">*</span>
                </label>

                <input
                    type="text"
                    id="input-group-1"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ingrese el nombre del evento"
                    name="nombreEvento"
                    required
                />
            </div>
            <div>
                <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Lugar del evento <span class="text-red-500">*</span>
                </label>

                <input
                    type="text"
                    id="input-group-1"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Lugar del evento"
                    name="lugar"
                    required
                />
            </div>

            <div>
                <label
                    for="address"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Dirección del evento <span class="text-red-500">*</span>
                </label>
                <textarea
                    id="address"
                    name="direccion"
                    rows="4"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ingrese su dirección aquí..."
                    required
                ></textarea>
            </div>
        </>
    );
};

export default inputstext;