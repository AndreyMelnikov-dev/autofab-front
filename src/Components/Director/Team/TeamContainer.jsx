import Team from './Team'
import { connect } from 'react-redux'

const TeamContainer = ({ team }) => {

    return <Team team={team} />
}

let mapStateToProps = (state) => {
    return {
        team: state.team
    }
}

let mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer)