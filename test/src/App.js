import {
  Route, Switch
} from "react-router-dom";
import './App.css';
import Cart from './components/Cart';
import Order from './components/Order';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/carts'>
          <Cart />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='/order'>
          <Order />
        </Route>

      


      </Switch>
    </div>
  );
}

export default App;
