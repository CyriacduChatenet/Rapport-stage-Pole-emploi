import axios, { AxiosResponse } from "axios";
import { useEffect } from "react"
import { ApiDataType } from '../types/global';

export const UseFetch = (data: object, setData : any, link : string) => {
    const getArticles = async (): Promise<AxiosResponse<ApiDataType>> => {
        try {
            const todos: AxiosResponse<ApiDataType> = await axios.get(link);
            setData(todos.data)
            
            return todos;
        } catch (error) {
            throw new Error();
        }
    };

    useEffect(() => {
        getArticles()
    },[])
}