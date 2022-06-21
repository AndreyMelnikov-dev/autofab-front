import TeamItem from "./TeamItem/TeamItem"

const TeamList = ({ team }) => {

    const itemsList = team.map(item =>
        <TeamItem item={item} key={item.id} />
    )

    return <div className='TeamList'>
        {itemsList}
    </div>
}

export default TeamList