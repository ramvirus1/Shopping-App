import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { BASE_URL } from "../../utils/constants";
import { shoppingURLs } from "../../api/apiUrls";
import { IShoppingModel } from "../types/shopping";
import HTTPClient from "../../api/httpClient";

const shoppingHttpClient = new HTTPClient(BASE_URL)

const initialState: IShoppingModel = {
    isFetchingProducts: false,
    productList: [],
    selectedProduct: null,
    cartProductQuantityMapping: null
};

export const shopping = createModel<RootModel>()({
    state: initialState,
    reducers: {
        updateProductList: (state, payload) => ({
            ...state,
            productList: payload
        }),
        updateSelectedProduct: (state, payload) => ({
            ...state,
            selectedProduct: payload
        }),
        updateProductQuantityMap: (state, payload) => ({
            ...state,
            cartProductQuantityMapping: {
                ...state.cartProductQuantityMapping,
                [payload.productId]: payload.productQuantity
            }
        }),
        updateProductListLoading: (state, payload) => ({
            ...state,
            isFetchingProducts: payload
        })
    },
    effects: (dispatch) => ({
        fetchProductList: async () => {
            try{
                dispatch.shopping.updateProductListLoading(true);
                const productListResponse = await shoppingHttpClient.get(shoppingURLs.productsList);
                dispatch.shopping.updateProductList(productListResponse);
                dispatch.shopping.updateProductListLoading(false);
            }catch(error){
                dispatch.shopping.updateProductListLoading(false);
            }
        }
    }),
});