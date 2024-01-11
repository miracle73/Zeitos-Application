import { Text, View, Pressable, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

//import components
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const Login = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => setIsVisible(!isVisible);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            style={tw`bg-white rounded-lg m-2 pt-[11px] pb-[10px] pl-[16px] pr-[16px]`}
            onPress={() => navigation.navigate("Create Account")}
          >
            <Text
              style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#141414] text-sm text-center w-[109px]')}>
              Create Account
            </Text>
          </Pressable>
        )
      }
    })
  }, [navigation]);

  return (
    <ScrollView>
      <View style={tw`bg-[#f5f7ff] h-full p-4]`}>
        <View style={tw`flex justify-start items-start p-2`}>
          <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'w-[272px] h-[76px] text-[#141414] text-3xl')}>Welcome 👋{"\n"} Login to your account</Text>
          {/* <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#141414] text-3xl')}>Login to your account</Text> */}
        </View>
        <View style={tw`bg-white flex justify-center items-center gap-8 px-4 py-5 rounded-lg`}>
          <View style={tw`flex flex-col justify-center items-center gap-5`}>
            <View style={tw`w-[320px] flex flex-row justify-center items-center gap-5 bg-[#f5f7ff] rounded-lg px-5 py-5`}>
              <Ionicons name="logo-google" size={24} color={"#ff0000"} />
              <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'w-[114px] text-base text-center text-[#4a4a68]')}>Login with google</Text>
            </View>
            <Text style={tw.style('w-[126px] text-sm text-[#898989] text-center')}>or create account with</Text>
          </View>
          <View style={tw`flex justify-center items-center gap-6`}>
            <CustomInput placeholder="Enter email" value={email} type='email' onChangeText={(email) => setEmail(email)} style={tw`w-[326px] h-[52px] bg-[#f5f7ff] rounded-lg px-4`} />
            <CustomInput placeholder="Enter password" value={password} type='password' onChangeText={(password) => setPassword(password)} secureTextEntry={!isVisible} style={tw`w-[326px] h-[52px] bg-[#f5f7ff] rounded-lg px-4`} />
            <Ionicons name={isVisible ? "eye" : "eye-off"} size={19} color={"#c4c4c4"} style={tw`absolute bottom-[35px] right-[25px]`} onPress={handleToggle} />
          </View>
          <View style={tw`flex flex-row justify-end items-end gap-4`}>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4a4a68] text-sm')}>Forgot Password?</Text>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4a4a68] text-sm')}>Reset</Text>
          </View>
          <View style={tw`flex flex-row justify-center items-center`}>
            <CustomButton style={tw`bg-[#001c46] w-[326px] py-4 px-8 rounded-lg`}>
              <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center text-white text-lg')}>Login</Text>
            </CustomButton>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login;