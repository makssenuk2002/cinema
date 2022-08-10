import React, { FC } from 'react'
import Menu from './Menu'
import {firstMenu, userMenu} from "@/components/layout/Navigation/MenuContainer/menu.data";
import GenresMenu from "@/components/layout/Navigation/MenuContainer/general/GeneralMenu";

const MenuContainer:FC = () => {
  return (
      <div>
        <Menu menu={firstMenu}/>
        <GenresMenu/>
        <Menu menu={userMenu}/>
      </div>
  )
}

export default MenuContainer