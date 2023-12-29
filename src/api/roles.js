import { API_URL } from "@/config/config";

export const getRoles = async () => {
    try {
        const response = await fetch(`http://localhost:3000/role/`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getRole = async (id) => {
    const response = await fetch(`${API_URL}/role/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
};

export const createRole = async (query, token) => {
    const response = await fetch(`${API_URL}/role`, {
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

export const updateRole = async (id, query, token) => {
    const response = await fetch(`${API_URL}/role/${id}`, {
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
