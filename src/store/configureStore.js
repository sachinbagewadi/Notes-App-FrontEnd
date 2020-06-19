import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import notesReducer from '../reducers/notesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        notes : notesReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore 