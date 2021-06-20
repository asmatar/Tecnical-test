import data from '../../data.json';

const dataTwo = [...data.map(i => i.quantity =1)]

//  console.log(dataTwo)
export const initialState = data

const articleReducer = (state= data, action) => {

    switch (action.type){
        default:
        return state
    }
}

export default articleReducer;