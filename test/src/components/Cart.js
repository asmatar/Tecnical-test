import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeQuantity, handleDeleteArticle } from '../redux/actions';

const Cart = ({panierArticle, handleDeleteArticle, changeQuantity}) => {
  console.log(panierArticle)
  const handleDelete = (articleDelete) => {
    console.log(articleDelete, 'id:', articleDelete.id )
    handleDeleteArticle(articleDelete)
  }
  const handleChangeQuantity = (value, id) => {
    console.log(value, 'identifiant =', id)
    changeQuantity(value, id)
  }
  // console.log('contenu du panier', panierArticle)

  const getTotalPrice = () => {
    //create total which is the value of the total price
    let total = 0;
    
    // for each carItem
    panierArticle.forEach((item) => {
      // add the price of the item multiplied byt the quantity
      total += (item.unit_price_incl_vat * item.quantity)
    });
    console.log(total)
    return total
    // save it
  }
  const getCount = () => {
    let count = 0;
    console.log(panierArticle)
    //loop through all cart items, and for each one, we'll take the number of quantity and add it
    panierArticle.forEach(item => {
        // add the quantity of the cartItem to total
        count += item.quantity;
    });
    console.log(count)
    return count;
}
getCount()
getTotalPrice()
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Cart</h1>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th
                    className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Item</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-right">Unit Price incl. VAT</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-right">VAT</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
              {
                panierArticle && panierArticle.map(article => {
                  return (
                    <tr>
                    <td className="px-4 py-3">{article.name}</td>
                    <td className="px-4 py-3">
                        <input name="quantity" type="number" className="w-12 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-right outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" 
                        value={article.quantity}
                        max='20'
                        min='1'
                        onInput={(event) =>
                        handleChangeQuantity(event.target.value, article.id)

                        }/>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" onClick={()=>handleDelete(article)}/> 
                          </svg> 
                          </td>
                    <td className="px-4 py-3 text-right">{article.unit_price_incl_vat} €</td>
                    <td className="px-4 py-3 text-right">{article.vat_category} %</td>
                    <td className="px-4 py-3 text-lg text-gray-900 text-right">{article.quantity*article.unit_price_incl_vat} €</td>
                  </tr>
                  )
                })
              }

              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4" className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-right">Total excl. VAT</td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 text-right">59.74 €</td>
                </tr>
                <tr>
                  <td colspan="4" className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-right">VAT 10%</td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 text-right">2.79 €</td>
                </tr>
                <tr>
                  <td colspan="4" className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-right">VAT 20%</td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 text-right">2.18 €</td>
                </tr>
                <tr>
                  <th colspan="4" className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-right">Total</th>
                  <th className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 text-right">{getTotalPrice()} €</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <Link to='/products' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd" />
              </svg>
              Back
            </Link>
            <Link to='/order'
              className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" >Send order</Link>
          </div>
        </div>
      </section>
    )
}
const mapStateToProps = (state) => {
  return {
    panierArticle : state.panierState.panierArticle,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDeleteArticle: (articleDelete) => {
      dispatch(handleDeleteArticle(articleDelete))
    },
    changeQuantity: (value, id) => {
      dispatch(changeQuantity(value, id))
    }
  }
}
export default connect (mapStateToProps,mapDispatchToProps )(Cart) 
