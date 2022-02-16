import {combineReducers} from 'redux'

import {signup,login} from './user'



const rootReducer=combineReducers({signup,login})



export default rootReducer;