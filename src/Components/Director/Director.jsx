import s from './Director.module.scss'
import Sidebar from '../Sidebar/Sidebar'
import { Route, Routes } from 'react-router'

const Director = () => {
    return <div className='flex-w'>
        <Sidebar />
        <div className={s.content}>
            <Routes>
                <Route path='' element='' />
            </Routes>
        </div>
    </div>
}

export default Director