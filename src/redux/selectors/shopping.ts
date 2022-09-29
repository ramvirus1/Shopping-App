import { useSelector } from "react-redux";

const useRootState = () => useSelector(state => state);

const useProductListSelector = () => useRootState().shopping.productList;

const useSelectedProductSelector = () => useRootState().shopping.selectedProduct;

const useProductQuantitySelector = () => useRootState().shopping.cartProductQuantityMapping;

export {
    useProductListSelector,
    useSelectedProductSelector,
    useProductQuantitySelector
};