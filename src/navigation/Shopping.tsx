import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled from "styled-components/native";
import SIcons from '../components/SIcons';
import { useSelectedProductSelector } from '../redux/selectors/shopping';
import { 
    ProductListScreen, 
    ProductDetailScreen, 
    CartScreen 
} from '../screens';
import { NavKeys } from '../utils/constants';

const ShoppingStack = createNativeStackNavigator();

const ShoppingNavStack = (): JSX.Element => {
    const selectedProduct = useSelectedProductSelector();
    return (
        <ShoppingStack.Navigator>
            <ShoppingStack.Group screenOptions={({navigation}) => ({
                headerRight: () => 
                    <CartIconContainer onPress={() => navigation.navigate(NavKeys.Shopping.Cart)}>
                        <SIcons name="cart" size={25} color="white"/>
                    </CartIconContainer>,
                headerStyle: { backgroundColor: "black", title: "white" },
                headerTintColor:"white"
            })}>
                <ShoppingStack.Screen
                    options={{ title: 'Products' }}
                    name={NavKeys.Shopping.ProductList} 
                    component={ProductListScreen} 
                />
                <ShoppingStack.Screen
                    options={{ title: selectedProduct?.name || 'Product Detail' }}
                    name={NavKeys.Shopping.ProductDetail} 
                    component={ProductDetailScreen} 
                />
                <ShoppingStack.Screen name={NavKeys.Shopping.Cart} component={CartScreen} />
            </ShoppingStack.Group>
        </ShoppingStack.Navigator>
    )
};

export default ShoppingNavStack;

const CartIconContainer = styled.TouchableOpacity``