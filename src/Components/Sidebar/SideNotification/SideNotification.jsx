import s from './SideNotification.module.scss'

const SideNotification = () => {
    return <div className={s.box}>
        <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0C12.5536 0 11.3797 1.176 11.3797 2.625V3.8418C6.86078 5.00867 3.51866 9.1084 3.51866 14V22.75H24.4813V14C24.4813 9.1084 21.1392 5.00867 16.6203 3.8418V2.625C16.6203 1.176 15.4464 0 14 0V0ZM1.77177 26.25C1.14178 26.2411 0.555794 26.5727 0.238198 27.1178C-0.0793992 27.6629 -0.0793992 28.3371 0.238198 28.8822C0.555794 29.4273 1.14178 29.7589 1.77177 29.75H10.9771C10.6695 30.2818 10.5071 30.8854 10.5062 31.5C10.5062 33.433 12.0704 35 14 35C15.9296 35 17.4938 33.433 17.4938 31.5C17.4919 30.8851 17.3283 30.2815 17.0195 29.75H26.2282C26.8582 29.7589 27.4442 29.4273 27.7618 28.8822C28.0794 28.3371 28.0794 27.6629 27.7618 27.1178C27.4442 26.5727 26.8582 26.2411 26.2282 26.25H1.77177Z" fill="white" />
        </svg>
        <div className={s.value}>99+</div>
    </div>
}

export default SideNotification