import React, { useState, useEffect } from "react";
import Select from "./Select";
import { getUsers } from "@/api/users";

const UsersSelect = ({ id }) => {
    const [users, setUsers] = useState(null);
    console.log(id);
    useEffect(() => {
        const fetchRoles = async () => {
            const usersFetch = await getUsers();
            console.log(usersFetch);
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
