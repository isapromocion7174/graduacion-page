import React, { useEffect, useState, useRef } from "react";
import Photo from "./inputs/inputphoto";
import { toast } from "react-toastify";
import Date from "./inputs/inputsdate";
import Number from "./inputs/inputsnumber";
import Text from "./inputs/inputstext.jsx";
import Select from "./select/select";
import RoleSelect from "./select/role";
import { createUser, updateUser, getUser } from "@/api/users.js";
import Celular from "./inputs/inputcelular";
import { useUserStore } from "@/stores/userStore.js";
const UserForm = ({ id = false }) => {
    const user = useUserStore((state) => state.user);
    const token = useUserStore((state) => state.token);
    const [userEdit, setUserEdit] = useState(false);
    const formRef = useRef();

    useEffect(() => {
        setUserEdit(false);
        if (id) {
            const fetchUser = async () => {
                const user = await getUser(id);
                setUserEdit(user);
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

        if (id) {
            const userUpdated = await toast.promise(
                updateUser(id, form, token),
                {
                    pending: "Actualizando usuario...",
                    success: "Usuario actualizado",
                    error: "Error al actualizar usuario",
                }
            );
        } else {
            const userCreated = await toast.promise(createUser(form, token), {
                pending: "Creando usuario...",
                success: "Usuario creado",
                error: "Error al crear usuario",
            });
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
                    className="p-10 rounded-lg bg-white shadow-md dark:bg-gray-800    flex flex-col gap-6    items-center justify-center  "
                    onSubmit={handleSubmit}
                    method="dialog"
                >
                    <div
                        className={`grid grid-cols-1 gap-6 
              sm:grid-cols-2
              `}
                    >
                        <Text
                            apellidos={userEdit.apellidos}
                            correo={userEdit.correo}
                            nombres={userEdit.nombres}
                            telefonoCasa={userEdit.telefonoCasa}
                            ultimoGradoEstudio={userEdit.ultimoGradoEstudio}
                        />
                        <Number cantidadHijos={userEdit.cantidadHijos} />
                        <Date
                            fechaNacimiento={userEdit.fechaNacimiento}
                            lugarNacimiento={userEdit.lugarNacimiento}
                        />
                        <Celular number={userEdit.telefonoCelular} />
                        <Select
                            estadoCivil={userEdit.estadoCivil}
                            sexo={userEdit.sexo}
                        />
                        <RoleSelect id={userEdit?.rol?._id} />
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
                            defaultValue={userEdit?.direccion || ""}
                            required
                        ></textarea>
                    </div>
                    <div className="w-full">
                        <label
                            htmlFor="descripcion"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Descripcion <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            defaultValue={userEdit?.descripcion || ""}
                            rows="4"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Ingrese a lo que se dedica actualmente..."
                            required
                        ></textarea>
                    </div>
                    <Photo src={userEdit?.foto?.img_url} />
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-64 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                        Guardar
                    </button>
                </form>
            )}
        </>
    );
};

export default UserForm;
