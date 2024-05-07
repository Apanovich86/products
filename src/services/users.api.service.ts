import axios, {AxiosResponse} from 'axios';
import {UsersResponseModel} from "../models/UsersResponseModel";
import {PostsResponseModel} from "../models/PostsResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});
const getAllUsers = (): Promise<AxiosResponse<UsersResponseModel>> => {
    return axiosInstance.get('/users');
}

const getPostsByUserId = (id: number): Promise<AxiosResponse<PostsResponseModel>> => {
    return axiosInstance.get(`https://dummyjson.com/posts/user/${id}`);
}

export {
    getAllUsers,
    getPostsByUserId
}