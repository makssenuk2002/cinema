import { FC } from 'react'
import style from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import SideBare from './SIdeBar/SideBare'
const Layout:FC = ({children}) => {
  return (
    <div className={style.layout}>
      <Navigation/>
      <div className={style.center}>{children}</div>
      <SideBare/>
    </div>
  )
}

export default Layout