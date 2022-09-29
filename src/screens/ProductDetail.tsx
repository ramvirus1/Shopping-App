import styled from 'styled-components/native';
import { 
    useSelectedProductSelector,
    useProductQuantitySelector
} from '../redux/selectors/shopping';
import SQuantityBox from '../components/SQuantityBox';
import SText from '../components/SText';
import { dispatchProductQuantity } from '../redux/actions/shopping';

const ProductDetailScreen = (): JSX.Element => {
    const selectedProduct = useSelectedProductSelector();
    const selectedQuantityForProduct = useProductQuantitySelector()?.[selectedProduct?.id] || 0;

    return (
        <ProductDetailContainer>
            <ProductImage 
                source={{uri: selectedProduct?.img }}
            />
            <ProductActionContainer>
                <ProductDetailContainer>
                    <SText text={selectedProduct?.name} weight="bold" size={14}/>
                    <SText text={`£ ${selectedProduct?.price}`} weight="semibold" size={16}/>
                </ProductDetailContainer>
                <SQuantityBox 
                    quantity={selectedQuantityForProduct}
                    onQuantityUpdate={(updatedQuantity: number) => dispatchProductQuantity({
                        productId: selectedProduct?.id,
                        productQuantity: updatedQuantity
                    })}
                />
            </ProductActionContainer>
        </ProductDetailContainer>
    )
};

const ProductDetailContainer = styled.View`
    flex:1;
    background: #fff;
`;

const ProductImage = styled.Image`
    flex:1;
`;

const ProductActionContainer = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: 0;
    background: white;
    opacity: 0.7;
    padding: 10px;
    align-items: center;
`;


export default ProductDetailScreen;