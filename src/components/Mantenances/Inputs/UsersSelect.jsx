import React, { useState, useEffect } from "react";
import Select from "./Select";
import { getUsers } from "@/api/users";

const UsersSelect = ({ id }) => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchRoles = async () => {
            const usersFetch = await getUsers();

            setUsers(
                usersFetch.map((user) => {
                    return {
                        _id: user._id,
                        nombre: user.nombres + " " + user.apellidos,
                    };
                })
            );
        };
        fetchRoles();
    }, []);
    return (
        <>
            {users && (
                <Select
                    selected={id}
                    objects={users}
                    title="Usuario"
                    name="usuario"
                />
            )}
        </>
    );
};

export default UsersSelect;
