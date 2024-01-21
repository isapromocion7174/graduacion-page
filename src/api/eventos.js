import { API_URL } from "@/config/config";

import { GET as GETS } from '../pages/api/eventos/index.json';
import { GET as GET } from '../pages/api/eventos/[id]';

export const getEventos = async () => {
    try {
        const response = await GETS();
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: true, mensaje: error };
    }
};

export const getEvento = async (id) => {
    try {
        const response = await GET({params: {id}});
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: true, mensaje: error };
    }
};

export const createEvento = async (form, token) => {
    try {
        const response = await fetch(`${API_URL}/event`, {
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

export const updateEvento = async (id, form, token) => {
    try {
        const response = await fetch(`${API_URL}/event/${id}`, {
            method: "PUT",
            headers: {
                "x-token": token,
            },
            body: form,
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return new Error(error);
    }
};

export const deleteEvento = async (id, token) => {
    try {
        const response = await fetch(`${API_URL}/event/${id}`, {
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
