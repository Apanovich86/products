import {AxiosResponse} from "axios";
import {axiosInstance} from "./api.service";
import {urls} from "../constants/urls";
import {ICommentModel} from "../models/ICommentModel";

const commentApiService = {
    getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get(urls.comments);
    },
}

export {
    commentApiService
}