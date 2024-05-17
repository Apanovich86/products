import React, {useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {userApiService} from "../../services/userService";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        userApiService.getAllUsers().then(({data})=> setUsers(data))
    }, []);
    return (
        <div>
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};