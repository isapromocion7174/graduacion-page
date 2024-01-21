import { API_URL } from "@/config/config";

import { GET as GETS } from '../pages/api/anecdotas/index.json';
import { GET as GET } from '../pages/api/anecdotas/[id]';
export const getAnecdotas = async () => {
    try {
        const response = await GETS();
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: true, mensaje: error };
    }
};

export const getAnecdota = async (id) => {
    try {
        const response = await GET({params: {id}});
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: true, mensaje: error };
    }
};

export const createAnecdota = async (body, token) => {
    try {
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
    } catch (error) {
        return { error: true, mensaje: error };
    }
};

export const updateAnecdota = async (id, body, token) => {
    try {
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
    } catch (error) {
        return new Error(error);
    }
};

export const deleteAnecdota = async (id, token) => {
    try {
        const response = await fetch(`${API_URL}/anecdota/${id}`, {
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
