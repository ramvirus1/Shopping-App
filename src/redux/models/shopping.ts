import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { BASE_URL } from "../../utils/constants";
import { shoppingURLs } from "../../api/apiUrls";
import { IShoppingModel } from "../types/shopping";
import HTTPClient from "../../api/httpClient";

const shoppingHttpClient = new HTTPClient(BASE_URL)

const initialState: IShoppingModel = {
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
        })
    },
    effects: (dispatch) => ({
        fetchProductList: async () => {
            const productListResponse = await shoppingHttpClient.get(shoppingURLs.productsList);
            dispatch.shopping.updateProductList(productListResponse);
        }
    }),
});