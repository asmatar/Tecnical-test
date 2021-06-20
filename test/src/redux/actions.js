export const GET_ARTICLES = 'GET_ARTICLES';

export const getArticles = (payload) => {
    return {
        type: 'GET_ARTICLES',
        payload: payload
    }
}