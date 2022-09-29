export interface IShoppingModel {
    productList: Array<IProduct>;
    selectedProduct: IProduct | null;
    cartProductQuantityMapping: {[key: number]: number} | null;
};

export interface IProduct {
    id: number;
    colour: string;
    name: string;
    price: number;
    img: string;
};