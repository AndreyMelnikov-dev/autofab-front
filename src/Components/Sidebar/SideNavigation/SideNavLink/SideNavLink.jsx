import s from './SideNavLink.module.scss'
import { NavLink } from 'react-router-dom'

const navClass = `${s.link} t4 flex-w align-c `
const navClassAcitve = navClass + s.active
const SideNavLink = (props) => {
    return <NavLink to={props.to}
        className={({ isActive }) => isActive ? navClassAcitve : navClass}>
        <div className={s.icon}></div>
        <span>{props.title}</span>
    </NavLink>
}

export default SideNavLink