
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "../screens/homePage";
import { ProductsPage } from "../screens/productsPage";
import { OrdersPage } from "../screens/ordersPage";
import { UsersPage } from "../screens/userPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/products">ProductsPage</Link>
            </li>
            <li>
              <Link to="/orders">OrdersPage</Link>
            </li>
            <li>
              <Link to="/member-page">UserPage</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
          <Route path="/member-page">
            <UsersPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
