import { ADD_TO_CARD, DELETE_CARD } from '../actions';

export const initialState = {
    panierArticle: []
}
    

const panierReducer = (state= initialState, action) => {
    switch (action.type){
        case  ADD_TO_CARD:

            return {
                ...state,
                panierArticle: [...state.panierArticle, action.panier],
        }
        case  DELETE_CARD:
            return {
                ...state,
                panierArticle: [...state.panierArticle.filter(item => item.id !== action.artDelete.id)],
        }
            default:
                return state
    }
 }

export default panierReducer;