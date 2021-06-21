export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_CART = 'DELETE_CART';
export const CHANGE_QTT = 'CHANGE_QTT';
export const HANDLE_SHOPPING = 'HANDLE_SHOPPING';


export const handleAddToCart = (article) => ({
    type: ADD_TO_CART,
    panier : article,
});

export const handleDeleteArticle = (articleDelete) => ({
    type: DELETE_CART,
    artDelete : articleDelete,
});
export const changeQuantity = (value, id) => ({
    type: CHANGE_QTT,
    valeur : value,
    identifiant: id
});

export const handleShopping = (shopCart) => ({
    type: HANDLE_SHOPPING,
    newShop: shopCart 
});
