import React, {FC} from "react";

import {IUserModel} from "../../models/IUserModel";

type IProps = { user: IUserModel }

type IPropsType = IProps & { children?: React.ReactNode } & { lift?: (userId: number) => void };
const User: FC<IPropsType> = ({user, lift}) => {
    const onClickHandler = () => {
        if (lift) {
            lift(user.id);
        }
    };

    return (
        <>
            <h3>Users posts:</h3>
            user# - {user.id}. {user.username} {user.lastName}
            <div>
                <button onClick={onClickHandler}>show posts of users</button>
            </div>

            <hr/>
        </>
    );
};

export default User;