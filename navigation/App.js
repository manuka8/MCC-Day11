import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();
export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'
          screenOptions={{
            headerStyle: { backgroundColor: 'white' },
          }}
        >
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}
