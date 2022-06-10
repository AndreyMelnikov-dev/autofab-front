const Registration = ({ s }) => {
    return <>
        <h2 className={`${s.title} t2`}>Регистрация</h2>
        <form className={s.form}>
            <div className={`${s.line} ${s.line_50}`}>
                <input type='text' name='Name' className='in' placeholder='Имя*' />
                <input type='text' name='Sername' className='in' placeholder='Фамилия*' />
            </div>
            <div className={s.line}>
                <input type='text' name='Email' className='in' placeholder='Почта*' />
            </div>
            <div className={s.line}>
                <input type='text' name='Password' className='in' placeholder='Пароль*' />
            </div>
            <div className={s.line}>
                <input type='text' name='Password2' className='in' placeholder='Повторите пароль*' />
            </div>
            <div className={s.line}>
                <input type='text' name='Organization' className='in' placeholder='Организация' />
            </div>
            <button type='button' className={`btn green ${s.btn}`}>Зарегистрироваться</button>
        </form>
    </>
}

export default Registration