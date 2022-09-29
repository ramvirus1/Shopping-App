import { IProduct } from "../../redux/types/shopping";

export interface ISProductHolderProps {
    item: IProduct;
    onSelection: (item: IProduct) => void;
};