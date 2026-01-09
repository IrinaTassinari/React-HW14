import { SET_USER_INFO } from "./actions"

const initialState = {
        name: 'Irina',
        status: 'Online', 
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_INFO: {
            return { ...state,
                    ...action.payload,
            }
        }
        default:
            return state
    }
}
export default reducer