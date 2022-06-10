const Login = ({ s }) => {
    return <>
        <h2 className={`${s.title} t2`}>Вход в аккаунт</h2>
        <form className={s.form}>
            <div className={s.line}>
                <input type='text' name='Email' className='in' placeholder='Почта' />
            </div>
            <div className={s.line}>
                <input type='text' name='Password' className='in' placeholder='Пароль' />
            </div>
            <button type='button' className={`btn green ${s.btn}`}>Войти в аккаунт</button>
        </form>
    </>
}

export default Login