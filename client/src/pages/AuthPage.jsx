import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './pages.scss'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'

const AuthPage = () => {
    const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';

    const sagaMiddleware = createSagaMiddleware()
    const reducer = (state, action) => {
        switch(action.type) {
            case FETCH_MESSAGES_REQUEST:
                return FETCH_MESSAGES_REQUEST
            default:
                return "nothing"
        }
    }
    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    )

    sagaMiddleware.run(rootSaga)
    const action = type => store.dispatch({type})

    return (
        <div className='page_wrapper'>
            <Header/>
            <LoginForm />
            <Footer/>
        </div>
    )
}

export default AuthPage