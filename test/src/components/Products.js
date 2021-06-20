import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleAddToCart } from '../redux/actions';

const Products = ({articles, AddToCart}) => {

  const handleAddToCart = (article) => {
    console.log('handleatc', article)
    AddToCart(article)
  }
    return (     
        <section className="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Products</h1>
          </div>
          <div class="flex flex-wrap -m-4">
                {             
                    articles.map(article => {
                        return (
                            <div key={article.id}class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                              <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                src="https://dummyimage.com/421x261" />
                            </a>
                            <div class="mt-4">
                              <h2 class="text-gray-900 title-font text-lg font-medium">{article.name}</h2>
                              <div class="flex flex-wrap items-center mt-2">
                                <p class="flex-1">{article.unit_price_incl_vat} €</p>
                                <Link to='/carts' class="text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg" 
                                onClick={() => handleAddToCart(article)}
                                >Add to cart</Link>
                              </div>
                            </div>
                          </div>
                        )
                    })
                }

          </div>
        </div>
      </section>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: state.articleState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      AddToCart: (article) => {
        console.log('mdp', article)
        dispatch(handleAddToCart(article))
      }
    }
}
export default connect (mapStateToProps,mapDispatchToProps )(Products) 

