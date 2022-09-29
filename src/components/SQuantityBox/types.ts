export interface ISQuantity {
    quantity: number;
    onQuantityUpdate?: (quantity: number) => void;
}