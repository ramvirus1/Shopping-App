import { StatusBar } from 'expo-status-bar';
import styled from "styled-components/native";
import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import { Provider } from 'react-redux';
import { store } from "./src/redux/store";
import { NavigationContainer } from '@react-navigation/native';
import { ShoppingNavStack } from './src/navigation';

const App = (): JSX.Element => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <StatusBar />
      <AppSafeAreaContainer>
        <NavigationContainer>
            <ShoppingNavStack />
        </NavigationContainer>
      </AppSafeAreaContainer>
    </Provider>
  )
};

const AppSafeAreaContainer = styled.SafeAreaView`
  flex:1;
  background: black;
`;

export default App;