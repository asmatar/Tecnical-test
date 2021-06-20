import { ADD_TO_CARD } from '../actions';


export const initialState = {
    panierArticle: []
}
    
   

const panierReducer = (state= initialState, action) => {
    console.log(initialState)
    // login 5 . take the action we've imported and change the state
    switch (action.type){
        case  ADD_TO_CARD:
            return {
                ...state,
                panierArticle: [...state.panierArticle, action.panier]
            }
            default:
                return state
    }
 }

export default panierReducer;