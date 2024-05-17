import {createBrowserRouter} from "react-router-dom";
import React from "react";
import MainLayout from "../layout/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";


export const routerConfig = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        errorElement: <h1>
            the page does not exist</h1>,
        children: [
            {index: true, element: <UsersPage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>}
        ]
    },
]);