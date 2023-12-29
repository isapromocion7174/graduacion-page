import { getUserByToken } from "@/api/users";
export const isLogged = async (token) => {
    if (token) {
        const user = await getUserByToken();

        if (!user) return false;

        return user;
    } else {
        return false;
    }
};

export const verifyLogin = async (token) => {
    const user = await isLogged(token);
    return user;
};
