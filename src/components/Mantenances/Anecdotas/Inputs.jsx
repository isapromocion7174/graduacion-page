import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import Text from "../Inputs/Text";
import UsersSelect from "../Inputs/UsersSelect";
import Quill from "../Inputs/Quill";
import {
    createAnecdota,
    updateAnecdota,
    getAnecdota,
} from "@/api/anectodas.js";

import { useUserStore } from "@/stores/userStore.js";
const AnectodasForm = ({ id = false }) => {
    const user = useUserStore((state) => state.user);
    const token = useUserStore((state) => state.token);
    const [quillValue, setQuillValue] = useState("");
    const [objEdit, setObjEdit] = useState(false);
    const formRef = useRef();
    useEffect(() => {
        formRef.current.reset();
        setObjEdit(false);
        setQuillValue("");
        if (id) {
            const fetchUser = async () => {
                const anecdota = await getAnecdota(id);
                setObjEdit(anecdota);
                setQuillValue(anecdota.descripcion);
            };
            fetchUser();
        }
    }, [id]);

    useEffect(() => {
        if (!user && !token) {
            window.location.href = "/login";
        }
    }, []);

    const handleSubmit = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        const form = new FormData(e.target);

        const data = Object.fromEntries(form.entries());
        data.descripcion = quillValue;
        console.log(data);
        document.querySelector("dialog").close();
        if (id) {
            const userUpdated = await toast.promise(
                updateAnecdota(id, data, token),
                {
                    pending: "Actualizando Anecdota...",
                    success: "Anecdota actualizada ",
                    error: "Error al actualizar Anecdota",
                }
            );
            console.log(userUpdated);
        } else {
            const userCreated = await toast.promise(
                createAnecdota(data, token),
                {
                    pending: "Creando Anecdota...",
                    success: "Anecdota creada",
                    error: "Error al crear Anecdota",
                }
            );
            console.log(userCreated);
        }

        e.target.reset();
        window.location.reload();
    };

    return (
        <>
            {!user && !token ? (
                <h1>Sin Acesso</h1>
            ) : (
                <form
                    ref={formRef}
                    className="p-10 rounded-lg bg-white shadow-md dark:bg-gray-800    flex flex-col gap-6    items-center justify-center "
                    onSubmit={handleSubmit}
                    method="dialog"
                >
                    <div
                        className={`grid grid-cols-1 gap-6 
                        w-full
              sm:grid-cols-2
              `}
                    >
                        <Text
                            name={"titulo"}
                            title={"Titulo"}
                            value={objEdit?.titulo}
                            required={true}
                        />
                        <UsersSelect id={objEdit?.usuario?._id} />
                    </div>

                    <div className="w-full md:min-h-96 flex flex-col dark:text-gray-100">
                        <Quill state={quillValue} setState={setQuillValue} />
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-64 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 mt-8"
                    >
                        Guardar
                    </button>
                </form>
            )}
        </>
    );
};

export default AnectodasForm;
