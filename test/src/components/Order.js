import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const Order = ({shoppingCard}) => {
  const getTotalPrice = () => {
    let total = 0;
    shoppingCard.forEach((item) => {

      total += (item.unit_price_incl_vat * item.quantity)
    });
    return total
  }
    return (
        <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Thank you for your order</h1>
          </div>
          <div class="lg:w-2/3 w-full mx-auto overflow-auto">
            <table class="table-auto w-auto mx-auto text-left whitespace-no-wrap">
              <tbody>
                {
                  shoppingCard && shoppingCard.map(item => {
                    console.log(item)
                    return (
                      <tr>
                  <td class="px-4 py-3">{item.quantity}x</td>
                  <td class="px-4 py-3">{item.name}</td>
                </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <p class="lg:w-2/3 mx-auto mt-10 leading-relaxed text-center">Please send us the payment of <span class="text-3xl">{getTotalPrice()} €</span> to our bitcoin address.</p>
          <p class="text-center mt-20">
            <Link to='/products' class="text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >Continue shopping</Link>
          </p>
        </div>
      </section>
    )
}
const mapStateToProps = (state) => {
  return {
    shoppingCard : state.panierState.newShop,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}
export default connect (mapStateToProps,mapDispatchToProps )(Order) 