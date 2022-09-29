import styled from "styled-components/native";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";
import SText from "../components/SText";
import SQuantityBox from "../components/SQuantityBox";
import { 
    dispatchProductQuantity, 
    dispatchProductSelection 
} from "../redux/actions/shopping";
import { 
    useProductListSelector, 
    useProductQuantitySelector,
} from "../redux/selectors/shopping";
import { NavKeys } from "../utils/constants";

const getTotalAmount = (productQuantities, products) => {
    let totalAmount = 0;
    products.forEach(product => {
        if(productQuantities?.[product?.id]){
            totalAmount += productQuantities?.[product?.id] * product?.price;
        }
    });
    return totalAmount.toFixed(2);
};

const CartProduct = ({ item, quantityMapping, onProductSelect }) => {
    return (
        <CartProductHolder onPress={() => onProductSelect(item)}>
            <ProductImage source={{uri: item?.img }} resizeMethod="resize"/>
            <ProductDescriptionContainer>
                <SText 
                    text={item?.name} 
                    size={13} 
                    weight="normal" 
                />
                <ProductUnitContainer>
                    <SText 
                        text={`£ ${item?.price}`} 
                        size={14} 
                        weight="normal" 
                    />
                    <SQuantityBox 
                        quantity={quantityMapping?.[item?.id] || 0} 
                        onQuantityUpdate={(quantity) => 
                            dispatchProductQuantity({
                        productId: item?.id,
                        productQuantity: quantity
                        })}
                    />
                </ProductUnitContainer>
            </ProductDescriptionContainer>
        </CartProductHolder>
    )
};

const CartScreen = (): JSX.Element => {
    const productList = useProductListSelector();
    const selectedProductsWithQuantities = useProductQuantitySelector();
    const selectedProducts = productList.filter(product => selectedProductsWithQuantities?.[product?.id] > 0);
    const totalPrice = getTotalAmount(selectedProductsWithQuantities, selectedProducts);
    const navigation = useNavigation();

    const goToProductDetails = (item) => {
        dispatchProductSelection(item);
        navigation.navigate(NavKeys.Shopping.ProductDetail as never, {} as never);
    };

    return (
        <CartMainContainer>
            {selectedProducts?.length ?
                <>
                    <FlatList
                        data={selectedProducts}
                        renderItem={(item) => 
                            <CartProduct
                                item={item?.item}
                                quantityMapping={selectedProductsWithQuantities}
                                onProductSelect={goToProductDetails}
                            />
                        }
                        keyExtractor={item => item.id}
                    />
                    <CartAmountContainer>
                        <SText 
                            text="Total Amount" 
                            size={15} 
                            weight="bold"
                        />
                        <SText 
                            text={`£ ${totalPrice}`} 
                            size={15} 
                            weight="bold"
                        />
                    </CartAmountContainer>
                </>
                 : <SText 
                    text="No Products Added to Cart" 
                    size={17} 
                    weight="bold"
                />
        }
            
        </CartMainContainer>
    )
};

export default CartScreen;

const CartMainContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: white;
`;
const CartProductHolder = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    align-self: stretch;
    padding: ${scale(5)}px 0px;
    border-bottom-color: black;
    border-bottom-width: 1px;
`;

const ProductImage = styled.Image`
    width: 50px;
    height: 100px;
    border: 1px solid #ddd;
    border-radius: 2px;
`;

const ProductDescriptionContainer = styled.View`
    align-self: stretch;
    padding: ${scale(5)}px;
`;

const ProductUnitContainer = styled.View`
    flex-direction: row;
    align-self: stretch;
    justify-content : space-between;
    margin-top: ${verticalScale(8)}px;
`;

const CartAmountContainer = styled.View`
    flex-direction: row;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: ${scale(10)}px;
    border-top-color: black;
    border-top-width: 1px;
    justify-content : space-between;
`