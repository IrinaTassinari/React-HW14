import {connect} from 'react-redux'
import style from './User.module.css'

function User({name,status}){
    return(
        <div className={style.user_info}>
            <h3>Name: {name}</h3>
            <h4>Status: {status}</h4>
        </div>
    )
}

const mapStateToProps = (state) => ({
    name: state.name,
    status:state.status,
})

export default connect (mapStateToProps)(User)


