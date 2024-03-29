import { API_URL, URL_FRONTEND } from "@/config/config";

export const getUsers = async () => {
    try {
        const response = await fetch(`${API_URL}/user`);
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: true, mensaje: error };
    }
};

export const getUser = async (id) => {
    try {
        const response = await fetch(`${API_URL}/user/${id}`)
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: true, mensaje: error };
    }
};

export const createUser = async (form, token) => {
    try {
        const response = await fetch(`${API_URL}/user`, {
            method: "POST",
            headers: {
                "x-token": token,
            },
            body: form,
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: true, mensaje: error };
    }
};

export const updateUser = async (id, form, token) => {
    try {
        const response = await fetch(`${API_URL}/user/${id}`, {
            method: "PUT",
            headers: {
                "x-token": token,
            },
            body: form,
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: true, mensaje: error };
    }
};

export const getUserByToken = async (token) => {
    try {
        const response = await fetch(`${API_URL}/user/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-token": token,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: true, mensaje: error };
    }
};

export const login = async (correo, password) => {
    try {
        const obj = {
            correo,
            password,
        };
        const response = await fetch(`${API_URL}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });
        const data = await response.json();
        if (data?.mensaje) {
            throw new Error(data.mensaje);
        }
        return data;
    } catch (error) {
        return { error: true, mensaje: error };
    }
};

export const deleteUser = async (id, token) => {
    try {
        const response = await fetch(`${API_URL}/user/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-token": token,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return new Error(error);
    }
};
