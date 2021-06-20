export const ADD_TO_CARD = 'ADD_TO_CARD';

export const handleAddToCart = (article) => ({
    type: ADD_TO_CARD,
    // name : article.name,
    // unit_price_incl_vat : article.unit_price_incl_vat,
    // vat_category : article.vat_category
    panier : article
});