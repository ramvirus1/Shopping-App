import { store } from '../store';
import { IProduct } from '../types/shopping';

const { dispatch } = store

const dispatchFetchProductList = () =>  dispatch.shopping.fetchProductList();
const dispatchProductSelection = (item: IProduct) => dispatch.shopping.updateSelectedProduct(item);
const dispatchProductQuantity = (
    { productId, productQuantity }: { productId: number, productQuantity: number }
) => dispatch.shopping.updateProductQuantityMap({ productId, productQuantity });

export {
    dispatchFetchProductList,
    dispatchProductSelection,
    dispatchProductQuantity
};