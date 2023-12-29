import React, { useEffect } from "react";
import Photo from "./inputs/inputphoto";

import Date from "./inputs/inputsdate";
import Number from "./inputs/inputsnumber";
import Text from "./inputs/inputstext.jsx";
import Select from "./select/select";
import RoleSelect from "./select/role";

import Celular from "./inputs/inputcelular";
import { useUserStore } from "@/stores/userStore.js";
const UserForm = () => {
    const user = useUserStore((state) => state.user);
    const token = useUserStore((state) => state.token);

    useEffect(() => {}, [user]);

    const handleSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const form = new FormData(e.target);
        console.log(form.entries());
        const data = Object.fromEntries(form.entries());
        console.log(data);
    };

    return (
        <form
            className="p-10 rounded-lg bg-white shadow-md dark:bg-gray-800    flex flex-col gap-6    items-center    justify-center  mb-12  "
            onSubmit={handleSubmit}
        >
            <div
                className={`grid grid-cols-1 gap-6 
      sm:grid-cols-2
      `}
            >
                <Text />
                <Number />
                <Date />
                <Celular />
                <Select />
                <RoleSelect />
            </div>

            <div className="w-full">
                <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Dirección <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="address"
                    name="direccion"
                    rows="4"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ingrese su dirección aquí..."
                    required
                ></textarea>
            </div>
            <Photo />
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-64 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Guardar
            </button>
        </form>
    );
};

export default UserForm;
