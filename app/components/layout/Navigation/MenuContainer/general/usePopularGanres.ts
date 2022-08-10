import { useQuery } from 'react-query'
import {GenreService} from "@/services/genre.servis";
import { getGenreUrl } from 'config/url.config';
import { IMenuItem } from '../menu.interface';

export const usePopularGenres = () => {
    // @ts-ignore
    const queryData = useQuery(
        'popular genres menu',
        () => GenreService.getAll(),
        {
            select: ({ data }) =>
                data
                    .map(
                        (genre): IMenuItem => ({
                            icon: genre.icon,
                            link: getGenreUrl(genre.slug),
                            title: genre.name,
                        })
                    )
                    .splice(0, 4),

        }
    )

    return queryData
}
