export const BASE_URL = 'https://my-json-server.typicode.com/benirvingplt';
import { IProduct } from "../redux/types/shopping";
export const NavKeys = {
    Shopping: {
        ProductList: "ProductList",
        ProductDetail: "ProductDetail",
        Cart: "Cart"
    }
};

export const calculateTotalCost = (productQuantities: {[key: number]: number}, products: Array<IProduct>) => {
    let totalAmount = 0;
    products.forEach(product => {
        if(productQuantities?.[product?.id]){
            totalAmount += productQuantities?.[product?.id] * product?.price;
        }
    });
    return totalAmount.toFixed(2);
};