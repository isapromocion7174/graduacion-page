import Date from "./inputs/inputsdate";

import Text from "./inputs/inputstext";
import { useUserStore } from "@/stores/userStore.js";
import Photo from "@/components/user/inputs/inputphoto";
import React, { useEffect, useState, useRef } from "react";
import { getEvento, createEvento, updateEvento } from "@/api/eventos";
import { toast } from "react-toastify";
const EventForm = ({ id = false }) => {
    const user = useUserStore((state) => state.user);
    const token = useUserStore((state) => state.token);
    const [objEdit, setObjEdit] = useState(false);
    const formRef = useRef();
    useEffect(() => {
        if (!user && !token) {
            window.location.href = "/login";
        }
    }, []);

    useEffect(() => {
        formRef.current.reset();
        setObjEdit(false);
        if (id) {
            const fetchData = async () => {
                const evento = await getEvento(id);
                setObjEdit(evento);
            };
            fetchData();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        const form = new FormData(e.target);

        const data = Object.fromEntries(form.entries());

        document.querySelector("dialog").close();
        if (id) {
            const userUpdated = await toast.promise(
                updateEvento(id, form, token),
                {
                    pending: "Actualizando Evento...",
                    success: "Evento actualizado ",
                    error: "Error al actualizar Evento",
                }
            );
        } else {
            const userCreated = await toast.promise(createEvento(form, token), {
                pending: "Creando Evento...",
                success: "Anecdota creada",
                error: "Error al crear Anecdota",
            });
        }

        e.target.reset();
        window.location.reload();
    };

    return (
        <form
            onSubmit={handleSubmit}
            ref={formRef}
            class="flex flex-col w-full p-10 gap-6 bg-white rounded-lg shadow dark:bg-gray-800 "
        >
            <Text
                direccion={objEdit?.direccion}
                lugar={objEdit?.lugar}
                nombre={objEdit?.nombreEvento}
            />
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <Date
                    fechaFin={objEdit?.fechaFinal}
                    fechaInicio={objEdit?.fechaInicio}
                />
            </div>
            <Photo src={objEdit?.foto?.img_url} />
            <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Guardar
            </button>
        </form>
    );
};

export default EventForm;
