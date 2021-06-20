import { GET_ARTICLES } from '../actions';

export const initialState = {
    articles: [{
        "id": 1,
        "name": "Mercury",
        "unit_price_incl_vat": 5.5,
        "vat_category": 10,
        "stock_quantity": 10
    },
    {
        "id": 2,
        "name": "Venus",
        "unit_price_incl_vat": 8.15,
        "vat_category": 10,
        "stock_quantity": 10
    },
    {
        "id": 3,
        "name": "Earth",
        "unit_price_incl_vat": 10,
        "vat_category": 0,
        "stock_quantity": 10
    },
    {
        "id": 4,
        "name": "Mars",
        "unit_price_incl_vat": 1.07,
        "vat_category": 10,
        "stock_quantity": 10
    },
    {
        "id": 5,
        "name": "Jupiter",
        "unit_price_incl_vat": 3180,
        "vat_category": 25,
        "stock_quantity": 10
    },
    {
        "id": 6,
        "name": "Saturn",
        "unit_price_incl_vat": 950,
        "vat_category": 20,
        "stock_quantity": 10
    },
    {
        "id": 7,
        "name": "Uranus",
        "unit_price_incl_vat": 140,
        "vat_category": 20,
        "stock_quantity": 10
    },
    // {
    //     "id": 8,
    //     "name": "Neptune",
    //     "unit_price_incl_vat": 12,
    //     "vat_category": 20,
    //     "stock_quantity": 10
    // }
],
}

const articleReducer = (state= initialState, action) => {
    console.log(initialState)
    // login 5 . take the action we've imported and change the state
    switch (action.type){
        case  GET_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
        default:
        return state
    }
}

export default articleReducer;