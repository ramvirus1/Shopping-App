import { IProduct } from "../../redux/types/shopping";

export interface IProductHolderProps {
    item: IProduct;
    onSelection: (item: IProduct) => void;
};