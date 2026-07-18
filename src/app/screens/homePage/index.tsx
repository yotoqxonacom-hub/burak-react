import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css";


import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(retrievePopularDishes, (popularDishes) => ({ popularDishes }));

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  // Selector: Store => Data

  useEffect(() => {
    // Backend server data request => Data 
    const result = [
      {
        "_id": "6a3b766036199f75697332d2",
        "productStatus": "PROCESS",
        "productCollection": "DISH",
        "productName": "KEBAB",
        "productPrice": 13,
        "productLeftCount": 121,
        "productSize": "NORMAL",
        "productVolume": 1,
        "productDesc": "tasty",
        "productImages": [],
        "productViews": 0,
        "createdAt": "2026-06-24T06:17:04.380Z",
        "updatedAt": "2026-06-24T06:17:04.380Z",
        "__v": 0
      },
      {
        "_id": "6a3b6b7696366dc7169ba341",
        "productStatus": "PROCESS",
        "productCollection": "DISH",
        "productName": "KEBAB",
        "productPrice": 18,
        "productLeftCount": 80,
        "productSize": "LARGE",
        "productVolume": 1,
        "productDesc": "bigger than normal and very delicious",
        "productImages": [],
        "productViews": 0,
        "createdAt": "2026-06-24T05:30:30.876Z",
        "updatedAt": "2026-06-24T05:30:30.876Z",
        "__v": 0
      },

    ]


    // Slice : Data => Store
    //@ts-ignore
    setPopularDishes(result);
  }, []);


  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
function dispatch(arg0: { payload: any; type: "homePage/setPopularDishes"; }) {
  throw new Error("Function not implemented.");
}

