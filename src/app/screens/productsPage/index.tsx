import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Product from "./Products";
import "../../../css/products.css"
import { CartItem } from "../../../libs/types/search";

interface ProductsPageProps {
  onAdd: (item: CartItem) => void
}

export default function ProductsPage(props: ProductsPageProps) {
  const { onAdd } = props;
  const products = useRouteMatch();
  console.log("products:", products);

  return (
    <div className={"products-page"}>
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChosenProduct onAdd={onAdd} />
        </Route>
        <Route path={`${products.path}`}>
          <Product onAdd={onAdd} />
        </Route>
      </Switch>
    </div>
  );
}
