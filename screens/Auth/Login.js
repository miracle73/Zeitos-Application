import { Text, View, Pressable, ScrollView, Alert, SafeAreaView, Image, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as LocalAuthentication from 'expo-local-authentication';
import Constants from 'expo-constants';

//import components
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const Login = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => setIsVisible(!isVisible);

  //biometrics 
  const isSensorAvailableAsync = async () => {
    try {
      const available = await LocalAuthentication.hasHardwareAsync();
      if (available) {
        const biometryType = await LocalAuthentication.supportedAuthenticationTypesAsync();
        console.log('Biometrics are supported:', biometryType);
        return biometryType;
      } else {
        console.log('Biometrics are not supported.');
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  //trigger biometrics
  const authenticateAsync = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync();
      if (result.success) {
        console.log('Authentication successful!');
        navigation.navigate("Account")
      } else {
        console.log('Authentication failed.');
        Alert.alert("your hands may be sweaty")
      }
    } catch (error) {
      console.error(error);
    }
  };

  //handle case when biometrics is available
  const handleAuth = async () => {
    const biometryType = await isSensorAvailableAsync();
    if (biometryType) {
      await authenticateAsync();
    } else {
      return null;
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            style={tw`bg-white rounded-lg m-2 p-2`}
            onPress={() => navigation.navigate("Create Account")}
          >
            <Text
              style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#141414] text-base text-center')}>
              Create Account
            </Text>
          </Pressable>
        )
      }
    })
  }, [navigation]);

  return (
    <>
      <StatusBar backgroundColor='#f5f7ff' />
      <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
        <ScrollView style={tw`bg-[#f5f7ff] p-4`}>
          <View style={{ flex: 1 }}>
            <View style={tw`flex justify-center items-start p-2`}>
              <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#141414] text-3xl')}>Welcome 👋{"\n"}Login to your account</Text>
              {/* <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#141414] text-3xl')}>Login to your account</Text> */}
            </View>
            <View style={tw`bg-white flex justify-center items-center gap-8 px-4 py-5 rounded-lg`}>
              <View style={tw`flex flex-col justify-center items-center gap-5`}>
                <View style={tw`w-[320px] flex flex-row justify-center items-center gap-5 bg-[#f5f7ff] rounded-lg px-5 py-5`}>
                  <Ionicons name="logo-google" size={24} color={"#ff0000"} />
                  <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-base text-center text-[#4a4a68]')}>Login with google</Text>
                </View>
                <Text style={tw.style('text-sm text-[#898989] text-center')}>or create account with</Text>
              </View>
              <View style={tw`flex justify-center items-center gap-6`}>
                <CustomInput placeholder="Enter email" value={email} type='email' onChangeText={(email) => setEmail(email)} style={tw`w-[326px] h-[52px] bg-[#f5f7ff] rounded-lg px-4 focus:invalid:border-red-200 invalid:text-red-200`} />
                <CustomInput placeholder="Enter password" value={password} type='password' onChangeText={(password) => setPassword(password)} secureTextEntry={!isVisible} style={tw`w-[326px] h-[52px] bg-[#f5f7ff] rounded-lg px-4`} />
                <Ionicons name={isVisible ? "eye" : "eye-off"} size={19} color={"#c4c4c4"} style={tw`absolute bottom-[35px] right-[25px]`} onPress={handleToggle} />
              </View>
              <View style={tw`flex flex-row justify-end items-end gap-4 w-[158px] ml-42`}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4a4a68] text-sm')}>Forgot Password?</Text>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4a4a68] text-sm')} onPress={() => navigation.navigate("Reset Password")}>Reset</Text>
              </View>
              <View style={tw`flex flex-row justify-center gap-px items-center`}>
                <CustomButton style={tw`bg-[#001c46] w-[326px] py-4 px-8 rounded-lg`}>
                  <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center text-white text-lg')} onPress={() => navigation.navigate("Account")}>Login</Text>
                </CustomButton>
              </View>
              <Pressable onPress={handleAuth} style={tw`flex flex-row justify-center items-center p-2`}>
                <Ionicons name="finger-print" size={40} color={"#001c46"} />
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Login;