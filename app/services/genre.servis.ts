import {getGenresUrl} from "../config/api.config";
import {IGenre} from "@/shared/types/movies.typse";
import {axiosClassic} from "../api/interseptors";


export const GenreService = {
    async getAll(searchTerm?: string){
        return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
            params: searchTerm ? {searchTerm} : {}
        })
    }

}