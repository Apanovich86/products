import React, {FC, PropsWithChildren} from 'react';
import {IUserModel} from "../../models/IUserModel";

interface IProps extends PropsWithChildren {
    user: IUserModel;
}
const User:FC<IProps> = ({user}) => {
    const {id, name, username} = user;
    return (
        <div>
          <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <br/>
        </div>
    );
};

export default User;