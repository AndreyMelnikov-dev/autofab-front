import { Link } from 'react-router-dom'
import s from './Team.module.scss'
import NotFound from '../../UI/NotFound/NotFound.jsx'
import Preloader from '../../UI/Preloader/Preloader'
import { useState } from 'react'
import TeamList from './TeamList/TeamList'

const Team = ({ team }) => {

    const [isLoading, setLoading] = useState(true)

    setTimeout(function () {
        setLoading(false)
    }, 500)

    return <div className={s.box}>
        <div className={`${s.top} flex-w just-sb align-c`}>
            <h1 className={`t1 dark`}>Команда</h1>
            <Link className={'btn green'} to='new'>Добавить сотрудника</Link>
        </div>

        <div className={s.list}>
            {
                isLoading
                    ? <Preloader />
                    : <TeamList team={team} />
            }
        </div>
    </div>
}

export default Team