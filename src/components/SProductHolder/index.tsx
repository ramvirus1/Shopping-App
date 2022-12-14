import { memo } from 'react';
import styled from "styled-components/native";
import { ISProductHolderProps } from "./types";
import SText from "../SText";
import { scale, verticalScale } from 'react-native-size-matters';

const SProductHolder = ({ 
    item,
    onSelection
}: ISProductHolderProps): JSX.Element => {
    return (
        <ProductMainContainer onPress={() => onSelection(item)}>
            <ProductImageBackground
                source={{uri: item?.img}} resizeMethod="resize"
            >
                <ProductDetailContainer>
                    <SText text={item?.name} weight="bold" size={14}/>
                    <SText text={`£ ${item?.price}`} weight="semibold" size={16}/>
                </ProductDetailContainer>
            </ProductImageBackground>
        </ProductMainContainer>
        
    )
};

export default memo(SProductHolder);

const ProductMainContainer = styled.TouchableOpacity`
    flex:1;
`
const ProductDetailContainer = styled.View`
    flex:1;
    position: absolute;
    bottom: 0;
    padding: ${scale(10)}px;
    background: white;
    width: 100%;
    opacity: 0.8
`;

const ProductImageBackground = styled.ImageBackground`
    margin: ${scale(5)}px;
    flex:1;
    height: ${verticalScale(200)}px;
    border: 1px solid #ddd;
    border-radius: ${scale(2)}px;
`;