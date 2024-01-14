import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from "@expo/vector-icons";
import tw from 'twrnc';
import { View, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

//import components
import SignUp from './screens/Auth/SignUp';
import Login from './screens/Auth/Login';
import VerifyEmail from './screens/Auth/VerifyEmail';
import ResetPassword from './screens/Forgot/ResetPassword';
import ResetOTP from './screens/Forgot/ResetOTP';
import CreateNewPassword from './screens/Forgot/CreateNewPassword';
import ResetSuccess from './screens/Forgot/ResetSuccess';
import OnBoarding from './screens/Auth/OnBoarding';
import Home from './screens/ProfileScreens/Home/Home';
import File from "./screens/ProfileScreens/File";
import Settings from "./screens/ProfileScreens/Settings";
import Question2 from './screens/ProfileScreens/Home/Question2';
import Question3 from './screens/ProfileScreens/Home/Question3';
import Question from './screens/ProfileScreens/Home/Question';
import AddQuestion from './screens/ProfileScreens/Home/AddQuestion';
import AddQuestion3 from './screens/ProfileScreens/Home/AddQuestion3';
import Question4 from './screens/ProfileScreens/Home/Question4';
import AddQuestion4 from './screens/ProfileScreens/Home/AddQuestion4';
import ScoreScreen from './screens/ProfileScreens/Home/ScoreScreen';

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
          <Stack.Screen name="Onboarding" component={OnBoarding} options={{ headerShown: false }} />
          <Stack.Screen name="Create Account" component={SignUp} options={{ headerTitle: "", headerStyle: { backgroundColor: "#f5f7ff" } }} />
          <Stack.Screen name="Login" component={Login} options={{ headerTitle: "", headerStyle: { backgroundColor: "#f5f7ff" } }} />
          <Stack.Screen name="Verify Email" component={VerifyEmail} options={{ headerTitle: "", headerStyle: { backgroundColor: "#f5f7ff" } }} />
          <Stack.Screen name="Reset Password" component={ResetPassword} options={{ headerTitle: "", headerStyle: { backgroundColor: "#f5f7ff" } }} />
          <Stack.Screen name="Reset OTP" component={ResetOTP} options={{ headerTitle: "", headerStyle: { backgroundColor: "#f5f7ff" } }} />
          <Stack.Screen name="New Password" component={CreateNewPassword} options={{ headerTitle: "", headerStyle: { backgroundColor: "#f5f7ff" } }} />
          <Stack.Screen name="Congratulations" component={ResetSuccess} options={{ headerTitle: "", headerStyle: { backgroundColor: "#fff" } }} />
          <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
          <Stack.Screen name="Scenarios" component={Question} options={{ headerShown: false }} />
          <Stack.Screen name="AddQuestion1" component={AddQuestion} options={{ headerShown: false }} />
          <Stack.Screen name="Question2" component={Question2} options={{ headerShown: false }} />
          <Stack.Screen name="AddQuestion2" component={AddQuestion3} options={{ headerShown: false }} />
          <Stack.Screen name="Question3" component={Question3} options={{ headerShown: false }} />
          <Stack.Screen name="AddQuestion3" component={AddQuestion3} options={{ headerShown: false }} />
          <Stack.Screen name="Question4" component={Question4} options={{ headerShown: false }} />
          <Stack.Screen name="AddQuestion4" component={AddQuestion4} options={{ headerShown: false }} />
          <Stack.Screen name="Scores" component={ScoreScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='dark' backgroundColor='#fff' />
    </>
  );
}

export function Account() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: 'absolute' },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        ),
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false,
        tabBarIcon: () => (
          <View style={tw`flex flex-row justify-center items-center gap-2 bg-[#001C46] rounded-full px-4 py-2`}>
            <Ionicons name="home" size={20} color={"#fff"} />
            <Text style={tw`text-base text-white`}>Home</Text>
          </View>
        ),
        tabBarLabel: ''
      }}
      />
      <Tab.Screen name="File" component={File} options={{
        headerShown: false,
        tabBarIcon: () => (
          <View style={tw`flex flex-row justify-center items-center bg-[#001C46] rounded-full px-4 py-2`}>
            <Ionicons name="document-outline" size={20} color={"#fff"} />
          </View>
        ),
        tabBarLabel: ''
      }}
      />
      <Tab.Screen name="Settings" component={Settings} options={{
        headerShown: false,
        tabBarIcon: () => (
          <View style={tw`flex flex-row justify-center items-center bg-[#001C46] rounded-full px-4 py-2`}>
            <Ionicons name="settings-outline" size={20} color={"#fff"} />
          </View>
        ),
        tabBarLabel: ''
      }}
      />
    </Tab.Navigator>
  )
}