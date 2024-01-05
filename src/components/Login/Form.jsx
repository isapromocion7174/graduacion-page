import React from "react";
import { login } from "@/api/users";
import { useEffect } from "react";
import { useUserStore } from "@/stores/userStore";
import { toast } from "react-toastify";

const Form = () => {
    const token = useUserStore((state) => state.token);
    const setToken = useUserStore((state) => state.setToken);

    useEffect(() => {
        if (token) {
            window.location.href = "/";
        }
    }, [token]);

    const handleSubmit = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        const form = new FormData(e.target);
        const data = Object.fromEntries(form);
        const { email, password } = data;

        const result = await login(email, password);
        console.log(result);
        if (result.error) return toast.error("Error al iniciar sesion");

        const { token } = result;
        setToken(token);
        localStorage.setItem("x-token", token);
    };
    return (
        <form
            className="space-y-4 md:space-y-6 mt-4 md:mt-6"
            onSubmit={handleSubmit}
        >
            <div>
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Correo Electronico
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Contraseña
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*******"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            aria-describedby="remember"
                            name="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label
                            htmlFor="remember"
                            className="text-gray-500 dark:text-gray-300"
                        >
                            Recuerdame
                        </label>
                    </div>
                </div>
                <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                    Olvidaste la contraseña?
                </a>
            </div>
            <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                Iniciar Sesion
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                No tienes una cuenta?{" "}
                <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                    Registrarse
                </a>
            </p>
        </form>
    );
};

export default Form;
