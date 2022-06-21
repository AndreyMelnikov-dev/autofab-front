const SET_ITEMS = 'SET_ITEMS'

let initialState = [{
        id: '321321321',
        icon: 'https://img.freepik.com/free-vector/stylish-flat-black-white-human-avatar-social-media-presentation-people-avatar-icon-avatar-face-head-with-forearm-human-portrait-isolated-blue-background-vector-graphics_589396-126.jpg?w=2000',
        fio: 'Андрей Алексеевич Мельников',
        pos: 'Швея высшей категории – 3 года на фабрике',
        salary: '52 000',
        salary_title: 'Рассчет',
        date: '12 дней',
        date_title: 'До З/П'
    },
    {
        id: '123321321',
        icon: 'https://russian7.ru/wp-content/uploads/2018/08/1-72.jpg',
        fio: 'Альберт Альбертович Альберто',
        pos: 'Физик',
        salary: '999 999',
        salary_title: 'Рассчет',
        date: '29 дней',
        date_title: 'До З/П'
    },
]

let teamReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            {
                return {
                    ...state,
                }
            }
        default:
            return state
    }
}

export default teamReducer