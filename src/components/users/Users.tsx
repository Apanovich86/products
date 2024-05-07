import {FC, useEffect, useState} from "react";
import {IUserModel} from "../../models/IUserModel";
import {getAllUsers} from "../../services/users.api.service";
import User from "../user/User";

type IPropsType = { lift?: (userId: number) => void }

const Users: FC<IPropsType> = ({lift}) => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        getAllUsers().then(({data: {users}}) => setUsers(users));
        console.log(users);
    }, []);

    return (
        <div>
            <h2>USERS</h2>
            {users.map((user) => (<User key={user.id} user={user} lift={lift}/>))}
        </div>
    )
}

export default Users;