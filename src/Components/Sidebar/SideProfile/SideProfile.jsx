import { Link } from 'react-router-dom'
import s from './SideProfile.module.scss'

const SideProfile = () => {
    return <div className={`${s.box} flex-w align-c`}>
        <Link className={`${s.avatar} avatar`} to='./'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bBA8LEMqRTyfxoQZ0gkoibprRTcfBlAPTQ&usqp=CAU' />
        </Link>
        <div className={`${s.name} t4`}>Андрей М.</div>
        <div className={s.arrow}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4L6 7L10 4" stroke="white" strokeLinecap="round" />
            </svg>
        </div>
    </div>
}

export default SideProfile