import {createLogger} from 'redux-logger'
import {createStore,applyMiddleware} from 'redux'
import CreateSagaMiddleware from 'redux-saga'
import rootReducers from './reducers/reducer'
import rootsaga from './saga/rootsaga'

const loggerMiddleware=createLogger()
const sagaMiddleware=CreateSagaMiddleware()

export const store=createStore(
    rootReducers,
    applyMiddleware(
        sagaMiddleware,loggerMiddleware
    )
)

sagaMiddleware.run(rootsaga)