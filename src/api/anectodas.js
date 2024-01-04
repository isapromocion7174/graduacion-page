import { API_URL } from "@/config/config";

export const getAnecdotas = async () => {
    const response = await fetch(`${API_URL}/anecdota`);
    const data = await response.json();
    return data;
};

export const getAnecdota = async (id) => {
    const response = await fetch(`${API_URL}/anecdota/${id}`);
    const data = await response.json();
    return data;
};

export const createAnecdota = async (body, token) => {
    const response = await fetch(`${API_URL}/anecdota`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-token": token,
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
};

export const updateAnecdota = async (id, body, token) => {
    const response = await fetch(`${API_URL}/anecdota/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-token": token,
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
};

export const deleteAnecdota = async (id, token) => {
    const response = await fetch(`${API_URL}/anecdota/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-token": token,
        },
    });
    const data = await response.json();
    return data;
};
