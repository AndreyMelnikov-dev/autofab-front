import { Route, Routes } from 'react-router'
import s from './Auth.module.scss'
import Login from './Login/Login'
import Registration from './Registration/Registration'

const Auth = () => {
    return <div className={s.box}>
        <Routes>
            <Route path='login' element={<Login s={s} />} />
            <Route path='registration' element={<Registration s={s} />} />
        </Routes>
    </div>
}

export default Auth