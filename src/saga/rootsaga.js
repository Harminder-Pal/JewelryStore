import {all} from 'redux-saga/effects'
import { fetchapi } from './saga'

export default function* rootsaga(){
    yield all([fetchapi()])
}