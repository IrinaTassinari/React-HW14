import {connect} from 'react-redux'
import { setUserInfo } from '../../redux/actions'
import { useState } from 'react'
import style from './UserForm.module.css'

function UserForm({setUserInfo,name,status}){
    const [newName, setNewName] = useState(name)
    const [newStatus, setNewStatus] = useState(status)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserInfo({
            name: newName,
            status: newStatus,
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <p className={style.text}>Name or status changing form: </p>
            <div className={style.inputs}>
                <input type="text" value = {newName} onChange={(e) => setNewName(e.target.value)} placeholder='Name'/>
                <input type="text" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}/>
            </div>
            <div className={style.btnWrapper}>
                <button className={style.btn} type='submit'>Edit</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => ({
    name: state.name,
    status:state.status,
})

export default connect (mapStateToProps,{setUserInfo})(UserForm)

// useState → хранит данные формы
// onChange → обновляет локальный state
// onSubmit → отправляет данные в Redux
// setUserInfo → обновляет store
// User → автоматически перерисуется

