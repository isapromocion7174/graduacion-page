import { API_URL } from "@/config/config";
import { useUserStore } from "@/stores/userStore";

export const getUsers = async (query) => {
    const response = await fetch(`${API_URL}/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
    });
    const data = await response.json();
    return data;
};

export const getUser = async (id, query) => {
    const response = await fetch(`${API_URL}/user/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
    });
    const data = await response.json();
    return data;
};

export const createUser = async (query, token) => {
    const response = await fetch(`${API_URL}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-token": token,
        },
        body: JSON.stringify(query),
    });
    const data = await response.json();
    return data;
};

export const updateUser = async (id, query, token) => {
    const response = await fetch(`${API_URL}/user/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-token": token,
        },
        body: JSON.stringify(query),
    });
    const data = await response.json();
    return data;
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
        console.log(error);
        return null;
    }
};

export const login = async (correo, password) => {
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

    if (data.mensaje) {
        throw new Error(data.mensaje);
    }
    return data;
};
