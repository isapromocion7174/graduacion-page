import { API_URL } from "@/config/config";

export const getEventos = async () => {
    const response = await fetch(`${API_URL}/event`);
    const data = await response.json();
    return data;
};

export const getEvento = async (id) => {
    const response = await fetch(`${API_URL}/event/${id}`);
    const data = await response.json();
    return data;
};

export const createEvento = async (form, token) => {
    const response = await fetch(`${API_URL}/event`, {
        method: "POST",
        headers: {
            "x-token": token,
        },
        body: form,
    });
    const data = await response.json();
    return data;
};

export const updateEvento = async (id, form, token) => {
    const response = await fetch(`${API_URL}/event/${id}`, {
        method: "PUT",
        headers: {
            "x-token": token,
        },
        body: form,
    });
    const data = await response.json();
    return data;
};

export const deleteEvento = async (id, token) => {
    const response = await fetch(`${API_URL}/event/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-token": token,
        },
    });
    const data = await response.json();
    return data;
};
