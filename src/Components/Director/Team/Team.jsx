import { Link } from 'react-router-dom'
import s from './Team.module.scss'

const Team = () => {
    return <div className={s.box}>
        <div className={`${s.top} flex-w just-sb align-c`}>
            <h1 className={`t1 dark`}>Команда</h1>
            <Link className={'btn green'} to='new'>Добавить сотрудника</Link>
        </div>

        <div className={s.list}>

        </div>
    </div>
}

export default Team