export const ADD_TO_CARD = 'ADD_TO_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const handleAddToCart = (article) => ({
    type: ADD_TO_CARD,
    panier : article,
});

export const handleDeleteArticle = (articleDelete) => ({
    type: DELETE_CARD,
    artDelete : articleDelete,
});
