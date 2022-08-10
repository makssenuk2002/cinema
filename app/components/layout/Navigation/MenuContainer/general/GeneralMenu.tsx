import React, {FC} from 'react'
import {usePopularGenres} from "@/components/layout/Navigation/MenuContainer/general/usePopularGanres";
import Menu from "@/components/layout/Navigation/MenuContainer/Menu";

const GeneralMenu: FC = () => {

    const {isLoading, data} = usePopularGenres()
    return isLoading ? <div>Loading...</div> :
        <Menu menu={{title: 'Popular genres', items: data || []}}/>
}

export default GeneralMenu