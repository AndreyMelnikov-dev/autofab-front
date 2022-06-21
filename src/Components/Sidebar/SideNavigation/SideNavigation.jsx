import s from './SideNavigation.module.scss'
import SideNavLink from './SideNavLink/SideNavLink'

const SideNavigation = () => {
    return <div className={s.list}>
        <SideNavLink title='Главная' to='./'/>
        <SideNavLink title='Сообщения' to='messages'/>
        <SideNavLink title='Проекты' to='projects'/>
        <SideNavLink title='Склад' to='stock'/>
        <SideNavLink title='Команда' to='team'/>
        <SideNavLink title='Оборудование' to='equipment'/>
        <SideNavLink title='Метрики' to='metrics'/>
    </div>
}

export default SideNavigation