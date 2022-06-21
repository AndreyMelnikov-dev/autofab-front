import s from './Sidebar.module.scss'
import SideNotification from './SideNotification/SideNotification'
import SideProfile from './SideProfile/SideProfile'
import SideNavigation from './SideNavigation/SideNavigation'

const Sidebar = () => {
    return <div className={s.box}>
        <div className={s.sticky}>
            <SideProfile />
            <SideNotification />
            <SideNavigation />
        </div>
    </div>
}

export default Sidebar