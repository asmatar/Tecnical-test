import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import panierReducer from './panier';

const rootReducer = combineReducers({
    articleState: articleReducer,
    panierState : panierReducer
})

export default rootReducer;