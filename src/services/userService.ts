import {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {axiosInstance} from "./api.service";
import {urls} from "../constants/urls";

const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get(urls.users);
    },
    getByUserId: async (userId: number): Promise<AxiosResponse<IUserModel>> => {
        return await axiosInstance.get(`${urls.users}/${userId}`);
    }
}

export {
    userApiService
}