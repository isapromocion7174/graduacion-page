import React, { useState } from "react";
import ModaText from "./ModaText";
import StringToHTML from "@/utils/StringToHTML";
const CardText = ({ anecdotas }) => {
    const [anecdota, setAnecdota] = useState(null);

    return (
        <>
            <ModaText anecdota={anecdota} />
            {anecdotas.map((anecdota) => (
                <div
                    class="bg-white rounded-lg shadow-lg p-6 h-96 flex flex-col
                    hover:shadow-xl transition-shadow duration-300 ease-in-out
                    dark:bg-gray-800 dark:hover:shadow-xl dark:text-gray-100
                "
                    key={anecdota._id}
                >
                    <h2 class="text-xl font-bold mb-2">{anecdota.titulo}</h2>

                    <div class="flex-1 overflow-y-hidden text-pretty text-ellipsis">
                        <StringToHTML html={anecdota.descripcion} />
                    </div>

                    <div class="w-full flex flex-col gap-4 ">
                        <span class="text-gray-500 text-sm">
                            ~{" "}
                            {anecdota.usuario.nombres +
                                " " +
                                anecdota.usuario.apellidos}
                        </span>
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                            transition-all duration-300 ease-in-out
                            dark:bg-blue-600 dark:hover:bg-blue-700
                            "
                            onClick={() => {
                                setAnecdota(anecdota);
                                document.querySelector("dialog").showModal();
                            }}
                        >
                            Ver más
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardText;
