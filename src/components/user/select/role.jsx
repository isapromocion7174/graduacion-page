import React, { useEffect, useState } from "react";
import { getRoles } from "@/api/roles";

const role = () => {
    const [roles, setRoles] = useState(null);
    useEffect(() => {
        const fetchRoles = async () => {
            const roles = await getRoles();
            console.log(roles);
            setRoles(roles);
        };
        fetchRoles();
    }, []);
    return (
        <div>
            <label
                htmlFor="rol"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Rol
            </label>
            <select
                id="rol"
                name="rol"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange="handleGenderChange(this)"
                defaultValue={"None"}
            >
                {roles &&
                    roles.map((rol) => {
                        return (
                            <option key={rol._id} value={rol._id}>
                                {rol.nombre}
                            </option>
                        );
                    })}
            </select>
        </div>
    );
};

export default role;
