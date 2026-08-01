import { Member } from "./member";
import { Order } from "./orders";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
    productsPage: any;
    homePage: HomePageState;
    productPage: ProductsPageState;
    ordersPage: OrdersPageState;
}

/** HOME PAGE **/
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}

/** PRODUCTS PAGE **/
export interface ProductsPageState {
    restaurant: Member | null;
    chosenProduct: Product | null;
    products: Product[];
}
/** ORDERS PAGE **/
export interface OrdersPageState {
    pausedOrders: Order[];
    processOrders: Order[];
    finishedOrders: Order[];
}