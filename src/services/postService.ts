import {AxiosResponse} from "axios";
import {axiosInstance} from "./api.service";
import {urls} from "../constants/urls";
import {IPostModel} from "../models/IPostModel";

const postApiService = {
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(urls.posts);
    },
}

export {
    postApiService
}