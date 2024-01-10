import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
<<<<<<< HEAD
import SignUp from './screens/Auth/SignUp';
import Welcome from './screens/Welcome';
=======
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
>>>>>>> acf9eb4e00702060434cc99b6014349a985d7511

//import components
import SignUp from './screens/Auth/SignUp';
import Welcome from './screens/Welcome';
import Login from './screens/Auth/Login';

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'DMSans_18pt-Bold.ttf': require('./assets/fonts/DMSans_18pt-Bold.ttf'),
    'DMSans_18pt-Medium.ttf': require('./assets/fonts/DMSans_18pt-Medium.ttf'),
    'DMSans_18pt-Light.ttf': require('./assets/fonts/DMSans_18pt-Light.ttf'),
  });

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
<<<<<<< HEAD
          <Stack.Screen name="Create Account" component={Welcome} options={{ headerTitle: "" }} />
=======
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Create Account" component={SignUp} options={{ headerTitle: "", headerStyle: { backgroundColor: "#f5f7ff" } }} />
          <Stack.Screen name="Login" component={Login} options={{ headerTitle: "", headerStyle: { backgroundColor: "#f5f7ff" } }} />
>>>>>>> acf9eb4e00702060434cc99b6014349a985d7511
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='dark' />
    </>
  );
}
