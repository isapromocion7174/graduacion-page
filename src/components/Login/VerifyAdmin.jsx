import React from "react";
import { useEffect } from "react";
import { useUserStore } from "@/stores/userStore";
import { getUserByToken } from "@/api/users";

const VerifyLogin = () => {
    const token = useUserStore((state) => state.token);
    const setToken = useUserStore((state) => state.setToken);
    const setUser = useUserStore((state) => state.setUser);
    const user = useUserStore((state) => state.user);

    useEffect(() => {
        if (!token) {
            const tokenStorage = localStorage.getItem("x-token");
            console.log(tokenStorage);
            if (!tokenStorage) return;

            setToken(tokenStorage);
        }
    }, []);

    useEffect(() => {
        if (!token) return;

        const fetchUser = async () => {
            try {
                const user = await getUserByToken(token);
                if (!user) return;
                setUser(user);
                console.log(user);
            } catch (e) {
                console.log(e);
            }
        };
        fetchUser();
    }, [token]);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return <></>;
};

export default VerifyLogin;
