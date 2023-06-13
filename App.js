import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import Restaurantscreen from './screens/Restaurantscreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-url-polyfill/auto';
import { Provider } from 'react-redux';
import { store } from './store';
// import { TransitionPresets } from '@react-navigation/stack';
import BasketScreen from './screens/BasketScreen'
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen'
const Stack= createNativeStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Homescreen} />
            <Stack.Screen name="Restaurant" component={Restaurantscreen} />
            <Stack.Screen name="Basket" component={BasketScreen} options={{headerShown:false,presentation:'modal',obscureBackground:true}}/>
            <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{headerShown:false,presentation:'fullScreenModal'}}/>
            <Stack.Screen name="Delivery" component={DeliveryScreen} options={{headerShown:false,presentation:'fullScreenModal'}}/>
          </Stack.Navigator>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
    

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
