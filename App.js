import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import tw from 'twrnc';
import { View, Text, Image } from 'react-native';

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
import Settings from "./screens/Settings/Settings";
import Question2 from './screens/ProfileScreens/Home/Questions/Question2';
import Question3 from './screens/ProfileScreens/Home/Questions/Question3';
import Question from './screens/ProfileScreens/Home/Questions/Question';
import AddQuestion from './screens/ProfileScreens/Home/Questions/AddQuestion';
import AddQuestion3 from './screens/ProfileScreens/Home/Questions/AddQuestion3';
import Question4 from './screens/ProfileScreens/Home/Questions/Question4';
import AddQuestion4 from './screens/ProfileScreens/Home/Questions/AddQuestion4';
import ScoreScreen from './screens/ProfileScreens/Home/ScoreScreen';
import Answers from './screens/ProfileScreens/Home/AnswerScreens/Answers';
import AddQuestion2 from './screens/ProfileScreens/Home/Questions/AddQuestion2';
import WorkshopList from './screens/ProfileScreens/Workshop/WorkshopList';
import WorkshopPage from './screens/ProfileScreens/Workshop/WorkshopPage';
import ProfileDetails from './screens/Settings/ProfileDetails';
import ChangePassword from './screens/Settings/ChangePassword';
import ScenarioCategories from './screens/ProfileScreens/Categories/ScenarioCategories';
import CategoryOne from './screens/ProfileScreens/Categories/CategoryScreens/CategoryOne';
import ScenarioOne from './screens/ProfileScreens/Categories/CategoryQuestions/ScenarioOne';
import ScenarioTwo from './screens/ProfileScreens/Categories/CategoryQuestions/ScenarioTwo';
import VideoOne from './screens/ProfileScreens/Categories/Videos/VideoOne';
import LeaderBoard from './screens/LeaderBoard/LeaderBoard';
import SubmitScenarios from './screens/ProfileScreens/Categories/CategoryQuestions/SubmitScenarios';
import Score from './screens/ProfileScreens/Categories/CategoryQuestions/Score';

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'DMSans_18pt-Bold.ttf': require('./assets/fonts/DMSans_18pt-Bold.ttf'),
    'DMSans_18pt-Medium.ttf': require('./assets/fonts/DMSans_18pt-Medium.ttf'),
    'DMSans_18pt-Light.ttf': require('./assets/fonts/DMSans_18pt-Light.ttf'),
    'WixFont': require('./assets/fonts/WixFont.ttf')
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
          <Stack.Screen name="Account2" component={OnBoarding} options={{ headerShown: false }} />
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
          <Stack.Screen name="AddQuestion2" component={AddQuestion2} options={{ headerShown: false }} />
          <Stack.Screen name="Question3" component={Question3} options={{ headerShown: false }} />
          <Stack.Screen name="AddQuestion3" component={AddQuestion3} options={{ headerShown: false }} />
          <Stack.Screen name="Question4" component={Question4} options={{ headerShown: false }} />
          <Stack.Screen name="AddQuestion4" component={AddQuestion4} options={{ headerShown: false }} />
          <Stack.Screen name="Scores" component={ScoreScreen} options={{ headerShown: false }} />
          <Stack.Screen name="WorkshopList" component={WorkshopList} options={{ headerShown: false }} />
          <Stack.Screen name="Answers" component={Answers} options={{ headerShown: false }} />
          <Stack.Screen name="WorkshopPage" component={WorkshopPage} options={{ headerShown: false }} />
          <Stack.Screen name="Profile Details" component={ProfileDetails} options={{ headerShown: false }} />
          <Stack.Screen name="Change Password" component={ChangePassword} options={{ headerShown: false }} />
          <Stack.Screen name="Scenario Categories" component={ScenarioCategories} options={{ headerShown: false }} />
          <Stack.Screen name="Category One" component={CategoryOne} options={{ headerShown: false }} />
          <Stack.Screen name="Scenario One" component={ScenarioOne} options={{ headerShown: false }} />
          <Stack.Screen name='Scenario Two' component={ScenarioTwo} options={{ headerShown: false }} />
          <Stack.Screen name='Video' component={VideoOne} options={{ headerShown: false }} />
          <Stack.Screen name='Submit Scenarios' component={SubmitScenarios} options={{ headerShown: false }} />
          <Stack.Screen name='Score' component={Score} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='dark' backgroundColor='#fff' />
    </>
  );
}

export function Account() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { height: 80, backgroundColor: 'transparent', elevation: 0, borderTopWidth: 0, position: 'absolute' } }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={tw`flex flex-row justify-center items-center gap-2 bg-[#001C46] rounded-full px-4 py-2`}>
              <Image source={require("./assets/home-2.png")} />
              <Text style={tw`text-base text-white`}>Home</Text>
            </View>
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen name="LeaderBoard"
        component={LeaderBoard}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={tw`flex flex-row justify-center items-center bg-[#001C46] rounded-full px-4 py-2`}>
              <Image source={require("./assets/ranking.png")} />
            </View>
          ),
          tabBarLabel: ''
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={tw`flex flex-row justify-center items-center bg-[#001C46] rounded-full px-4 py-2`}>
              <Image source={require("./assets/settings.png")} />
            </View>
          ),
          tabBarLabel: ''
        }}
      />
    </Tab.Navigator>
  )
}