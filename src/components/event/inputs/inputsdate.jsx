import React from "react";

const inputsdate = ({ fechaInicio, fechaFin }) => {
    const formatFecha = (fecha) => {
        if (!fecha) return null;
        const date = new Date(fecha);
        const dateformat = date.toISOString().split("T")[0];
        const timeformat = date.toLocaleTimeString("es-ES", {
            hour: "numeric",
            minute: "numeric",
        });
        const formated = `${dateformat}T${timeformat}`;
        return formated;
    };
    return (
        <>
            <div>
                <label
                    for="birthdate"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Fecha de inicio del evento{" "}
                    <span class="text-red-500">*</span>
                </label>
                <input
                    type="datetime-local"
                    id="birthdate"
                    name="fechaInicio"
                    defaultValue={formatFecha(fechaInicio)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
            </div>
            <div>
                <label
                    for="birthdate"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Fecha de cierre del evento{" "}
                    <span class="text-red-500">*</span>
                </label>
                <input
                    type="datetime-local"
                    id="birthdate"
                    defaultValue={formatFecha(fechaFin)}
                    name="fechaFinal"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
      "
                    required
                />
            </div>
        </>
    );
};

export default inputsdate;
