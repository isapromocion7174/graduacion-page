import React, { useState, useRef } from "react";
import UserPlaceHolderImg from "@/assets/img/userPlaceHolder.jpg";
import { useUserStore } from "@/stores/userStore";
import { toast } from "react-toastify";

const index = ({ headers, data, deleteObject, messages, setId }) => {
    const user = useUserStore((state) => state.user);
    const token = useUserStore((state) => state.token);
    const [filter, setFilter] = useState(data);
    const formRef = useRef();
    console.log(user, token);
    const handleDelete = (id) => {
        if (user._id == id)
            return toast.error("No puedes eliminar tu propio usuario");
        if (user?.rol?._id == id)
            return toast.error("No puedes eliminar tu propio rol");

        // Quiero que me salga el aviso de si quiero eliminar el usuario
        const deleted = confirm(
            messages?.delete || "¿Seguro que desea eliminar este objeto?"
        );

        if (!deleted) return;

        const res = toast.promise(deleteObject(id, token), {
            pending: messages?.pending || "Eliminando objeto...",
            success: messages?.success || "Objeto eliminado",
            error: messages?.error || "Error al eliminar objeto",
        });

        console.log(res);

        window.location.reload();
    };

    const handleEdit = (id) => {
        setId(id);
        document.querySelector("dialog").showModal();
    };

    const handleFilter = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const info = Object.fromEntries(form.entries());
        console.log(info);
        const filter = info.filter.toLowerCase();
        if (!filter) return setFilter(data);
        const filterData = data.filter((row) => {
            console.log(row);
            return Object.keys(row).some((key) =>
                row[key]?.toString()?.toLowerCase()?.includes(filter)
            );
        });
        setFilter(filterData);
    };
    return (
        <div
            className="flex flex-col w-full gap-6 px-6
            sm:max-w-screen-sm
            md:max-w-screen-md
            lg:max-w-screen-lg
        "
        >
            <div className=" flex gap-14 items-center w-full justify-between">
                <form onSubmit={handleFilter} className="w-96" ref={formRef}>
                    <label
                        for="default-search"
                        class=" text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Ingrese valor de busqueda."
                            name="filter"
                        />
                        <button
                            type="submit"
                            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>

                <button
                    className="
                        text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-800 h-10
                        truncate
                    "
                    onClick={() => {
                        formRef.current.reset();
                        setFilter(data);
                    }}
                >
                    Limpiar Filtros
                </button>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {headers.map((header, index) => (
                                <th scope="col" class="px-6 py-3" key={index}>
                                    {header.name}
                                </th>
                            ))}

                            <th scope="col" class="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filter.map((row, index) => (
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                key={index}
                            >
                                <td class="px-6 py-4 hidden" key={index}>
                                    {row.id}
                                </td>

                                {headers.map((header, index) => {
                                    if (header.key == "img_url") {
                                        return (
                                            <td class="px-6 py-4" key={index}>
                                                <img
                                                    src={
                                                        row[header.key] ||
                                                        UserPlaceHolderImg.src
                                                    }
                                                    class="w-10 h-10 rounded-full object-cover"
                                                />
                                            </td>
                                        );
                                    }

                                    return (
                                        <td class="px-6 py-4" key={index}>
                                            {row[header.key]}
                                        </td>
                                    );
                                })}
                                <td class="px-6 py-4">
                                    <div class="flex gap-4">
                                        <button
                                            onClick={() => handleEdit(row.id)}
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Editar
                                        </button>

                                        <button
                                            onClick={() => handleDelete(row.id)}
                                            class={`font-medium text-red-600 dark:text-red-500 hover:underline 
                                            disabled:opacity-50 disabled:hover:no-underline
                                        `}
                                            disabled={
                                                user?._id == row.id ||
                                                user?.rol?._id == row.id
                                            }
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default index;
