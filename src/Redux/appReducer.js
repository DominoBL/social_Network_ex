import {getAuthData} from './authReducer'


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS' ;



let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    // debugger;
    switch (action.type) {
        case INITIALIZED_SUCCESS:

            return {
                ...state,
                initialized: true,    
            }
        default:
                return state;
    }
}
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthData());
    Promise.all([promise]).then (() => {
        dispatch(initializedSuccess())
    } );
}







export default appReducer ;