import { useSelector } from "react-redux";
import { IProduct } from "../types/shopping";

const useRootState = () => useSelector(state => state);

const useProductListSelector = (): Array<IProduct> => useRootState().shopping.productList;

const useSelectedProductSelector = (): IProduct => useRootState().shopping.selectedProduct;

const useProductQuantitySelector = (): {[key: number]: number} => useRootState().shopping.cartProductQuantityMapping;

const useLoadStateSelector = (): boolean => useRootState().shopping.isFetchingProducts;

export {
    useProductListSelector,
    useSelectedProductSelector,
    useProductQuantitySelector,
    useLoadStateSelector
};