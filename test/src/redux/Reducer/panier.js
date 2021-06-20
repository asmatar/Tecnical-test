import { ADD_TO_CART, CHANGE_QTT, DELETE_CART } from '../actions';

export const initialState = {
    panierArticle: [],
}

const panierReducer = (state= initialState, action) => {
    // let findArt = state.panierArticle.findIndex(item => item.id === action.identifiant)
    // console.log(findArt)
    // console.log(state.panierArticle[findArt])
    // console.log(state.panierArticle[findArt].quantity)

    // let copiePanierArticle = [...state.panierArticle];
    // copiePanierArticle[findArt].quantity = action.valeur;
    switch (action.type){
        case  CHANGE_QTT:
            let findArt = state.panierArticle.findIndex(item => item.id === action.identifiant)
            console.log(findArt)
            console.log(state.panierArticle[findArt])
            console.log(state.panierArticle[findArt].quantity)

            let copiePanierArticle = [...state.panierArticle];
            copiePanierArticle[findArt].quantity = action.valeur;

            return {
                ...state,
                panierArticle : copiePanierArticle
        }
        case  ADD_TO_CART:
            return {
                ...state,
                panierArticle: [...state.panierArticle, action.panier],
        }
        case  DELETE_CART:
            return {
                ...state,
                panierArticle: [...state.panierArticle.filter(item => item.id !== action.artDelete.id)],
        }
            default:
                return state
    }
 }

export default panierReducer;