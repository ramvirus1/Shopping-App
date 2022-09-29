import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from "react-native";
import styled from 'styled-components/native';
import SProductHolder from '../components/SProductHolder';
import { useProductListSelector } from "../redux/selectors/shopping"
import { 
    dispatchFetchProductList,
    dispatchProductSelection 
} from '../redux/actions/shopping';
import { NavKeys } from '../utils/constants';

const ProductListScreen = (): JSX.Element => {
    const productList = useProductListSelector();
    const navigation = useNavigation();

    useEffect(() => {
        dispatchFetchProductList()
    }, []);

    const goToDetailScreen = item => {
        dispatchProductSelection(item);
        navigation.navigate(NavKeys.Shopping.ProductDetail as never, {} as never);
    };

    return (
        <ProductListContainer>
            <FlatList
                data={productList}
                numColumns={2}
                renderItem={(item) => 
                    <SProductHolder
                        item={item?.item}
                        onSelection={goToDetailScreen}
                    />
                }
                keyExtractor={item => item.id}
            />
        </ProductListContainer>
    )
};

const ProductListContainer = styled.View`
    flex:1;
    background: black;
`;

export default ProductListScreen;