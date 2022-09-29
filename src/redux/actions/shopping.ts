import { store } from '../store'

const { dispatch } = store

const dispatchFetchProductList = () =>  dispatch.shopping.fetchProductList();
const dispatchProductSelection = (item) => dispatch.shopping.updateSelectedProduct(item);
const dispatchProductQuantity = ({ productId, productQuantity }) => dispatch.shopping.updateProductQuantityMap({ productId, productQuantity });

export {
    dispatchFetchProductList,
    dispatchProductSelection,
    dispatchProductQuantity
};