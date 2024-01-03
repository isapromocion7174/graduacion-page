import React from "react";
import StringToHTML from "@/utils/StringToHTML";
const ModaText = ({ anecdota }) => {
    return (
        <>
            <dialog id={anecdota?.titulo} class="rounded-lg">
                <form
                    method="dialog"
                    class="flex flex-col justify-center items-center w-full p-6 min-w-96 min-h-96 md:p-6 h-full rounded-lg max-w-screen-lg shadow-lg dark:bg-gray-800 dark:text-gray-100 bg-white
                    "
                >
                    <div
                        class="   w-full flex flex-col
                            flex-1 text-pretty

                    "
                    >
                        <h2 class="text-xl font-bold mb-2">
                            {anecdota?.titulo}
                        </h2>
                        <div class="flex-1 overflow-y-hidden text-pretty text-ellipsis w-full">
                            <StringToHTML html={anecdota?.descripcion || ""} />
                        </div>
                        <div class="w-full flex flex-col gap-4 mt-8">
                            <span class="text-gray-500 text-sm">
                                ~{" "}
                                {anecdota?.usuario?.nombres +
                                    " " +
                                    anecdota?.usuario?.apellidos}
                            </span>
                            <button
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => {
                                    document.querySelector("dialog").close();
                                }}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </form>
            </dialog>
        </>
    );
};

export default ModaText;
