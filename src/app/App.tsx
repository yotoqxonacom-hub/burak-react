
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { HomePage } from "../screens/homePage";
import { ProductsPage } from "../screens/productsPage";
import { OrdersPage } from "../screens/ordersPage";
import { UsersPage } from "../screens/userPage";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import { Footer } from "./components/footer";

function App() {
  const location = useLocation();
  console.log("location:", location);

  return (
    <Router>
      <>
        {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
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
        <Footer />
      </>
    </Router>
  );
}


export default App;
