import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//import components
import SignUp from './screens/Auth/SignUp';
import Welcome from './screens/Welcome';
import Login from './screens/Auth/Login';
import VerifyEmail from './screens/Auth/VerifyEmail';
import ResetPassword from './screens/Forgot/ResetPassword';
import ResetOTP from './screens/Forgot/ResetOTP';
import CreateNewPassword from './screens/Forgot/CreateNewPassword';

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
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Create Account" component={SignUp} options={{ headerTitle: "", headerStyle: { backgroundColor: "#f5f7ff" } }} />
          <Stack.Screen name="Login" component={Login} options={{ headerTitle: "", headerStyle: { backgroundColor: "#f5f7ff" } }} />
          <Stack.Screen name="Verify Email" component={VerifyEmail} options={{ headerTitle: "", headerStyle: { backgroundColor: "#f5f7ff" } }} />
          <Stack.Screen name="Reset Password" component={ResetPassword} options={{ headerTitle: "", headerStyle: { backgroundColor: "#f5f7ff" } }} />
          <Stack.Screen name="Reset OTP" component={ResetOTP} options={{ headerTitle: "", headerStyle: { backgroundColor: "#f5f7ff" } }} />
          <Stack.Screen name="New Password" component={CreateNewPassword} options={{ headerTitle: "", headerStyle: { backgroundColor: "#f5f7ff" } }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='dark' />
    </>
  );
}
