import s from './Director.module.scss'
import Sidebar from '../Sidebar/Sidebar'
import { Route, Routes } from 'react-router'
import Team from './Team/TeamContainer'

const Director = () => {
    return <div className='flex-w'>
        <Sidebar />
        <div className={s.content}>
            <Routes>
                <Route path='team' element={<Team />} />
            </Routes>
        </div>
    </div>
}

export default Director