import Date from "./inputs/inputsdate";

import Text from "./inputs/inputstext";
import { useUserStore } from "@/stores/userStore.js";
import React, { useEffect } from "react";

const index = () => {
    const user = useUserStore((state) => state.user);
    const token = useUserStore((state) => state.token);

    useEffect(() => {
        if (!user && !token) {
            window.location.href = "/login";
        }
    }, []);

    return (
        <form class="flex flex-col w-full p-10 gap-6 bg-white rounded-lg shadow dark:bg-gray-800 sm:w-96 md:w-96 lg:w-96">
            <Text />
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <Date />
            </div>
            <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Guardar
            </button>
        </form>
    );
};

export default index;
