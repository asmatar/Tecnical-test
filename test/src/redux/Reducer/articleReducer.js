import data from '../../data.json';

// Object.keys(json).map(
//     function(object){
//       json[object]["newKey"]='newValue'
//   });

 const dataTwo = [...data.map(i => i.quantity =1)]

 console.log(dataTwo)
export const initialState = data



const articleReducer = (state= data, action) => {
    console.log(initialState)
    // login 5 . take the action we've imported and change the state
    switch (action.type){
        default:
        return state
    }
}

export default articleReducer;