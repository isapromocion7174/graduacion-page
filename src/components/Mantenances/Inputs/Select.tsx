type objetoSelect = {
    _id?: string;
    nombre: string;
};
interface Props {
    selected: string;
    objects: objetoSelect[];
    title: string;
    name: string;
}

import React from "react";

const Select = ({ selected, objects, title, name }: Props) => {
    console.log(objects);
    console.log(selected);
    return (
        <div>
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {title}
            </label>
            <select
                id={name}
                name={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={selected}
            >
                {objects &&
                    objects.map((obj) => {
                        return (
                            <option
                                key={obj._id || obj.nombre}
                                value={obj._id || obj.nombre}
                                selected={selected === obj._id}
                            >
                                {obj.nombre}
                            </option>
                        );
                    })}
            </select>
        </div>
    );
};

export default Select;
