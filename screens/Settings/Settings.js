import { View, Text, SafeAreaView, Image, Pressable, Switch } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import { useState } from 'react';
import tw from 'twrnc';
import Constants from 'expo-constants';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import CustomButton from '../../components/CustomButton';

const Settings = () => {
  //handle navigation
  const navigation = useNavigation();

  //handle state management 
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <StatusBar style='dark' backgroundColor={'#FFFFFF'} barStyle={'dark-content'}/>
      <SafeAreaView style={{ marginTop: Constants.statusBarHeight, backgroundColor: '#ffffff' }}>
        <View style={tw`flex justify-start items-center gap-4 bg-[#FFFFFF] h-full`}>
          <View style={tw`flex justify-start items-start bg-white min-w-full p-6 border-b-[#808080]`}>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-xl')}>Profile & Settings</Text>
          </View>
          <View style={tw`flex flex-row justify-center items-center gap-4 bg-[#F5F7FF] rounded-lg p-6`}>
            <Image source={require("../../assets/avatar.png")} />
            <View style={tw`flex justify-start items-start`}>
              <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-lg text-[#333333]')}>Olabisi Dexter</Text>
              <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#1976D2]')}>Oladele@gmail.com</Text>
            </View>
            <View style={tw`flex justify-end items-end`}>
              <CustomButton style={tw`flex flex-row justify-end items-end p-3 bg-[#E2E8FF] rounded-lg`} onPress={() => navigation.navigate("Profile Details")}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-base text-[#1976D2]')}>View details</Text>
              </CustomButton>
            </View>
          </View>
          <View style={tw`flex justify-start items-start gap-8 p-4`}>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-xl text-[#747474] mr-72')}>Settings</Text>
            <Pressable style={tw`flex flex-row justify-center items-center gap-6 bg-white`} onPress={() => navigation.navigate("Change Password")}>
              <Image source={require("../../assets/gear.png")} />
              <View style={tw`flex justify-start items-start`}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-lg text-[#333333]')}>Change Password</Text>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#556575]')}>Tap Change your login passcode</Text>
              </View>
              <View style={tw`flex flex-row justify-end items-end ml-6`}>
                <Ionicons name='chevron-forward' size={20} color={"#646464"} />
              </View>
            </Pressable>
            <Pressable style={tw`flex flex-row justify-center items-center gap-6 bg-white`}>
              <Image source={require("../../assets/biometrics.png")} />
              <View style={tw`flex justify-start items-start`}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-lg text-[#333333]')}>Enable Biometric</Text>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#556575]')}>Enable face ID or Finger Print</Text>
              </View>
              <View style={tw`flex flex-row justify-end items-end ml-8`}>
                <Switch value={toggle} onValueChange={() => setToggle(!toggle)} />
              </View>
            </Pressable>
            <Pressable style={tw`flex flex-row justify-center items-center gap-6 bg-white`}>
              <Image source={require("../../assets/support.png")} />
              <View style={tw`flex justify-start items-start`}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-lg text-[#333333]')}>Help and support</Text>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#556575]')}>Have an issue ? Speak with our team</Text>
              </View>
              <View style={tw`flex flex-row justify-end items-end`}>
                <Ionicons name='chevron-forward' size={20} color={"#646464"} />
              </View>
            </Pressable>
            <Pressable style={tw`flex flex-row justify-center items-center gap-6 bg-white`}>
              <Image source={require("../../assets/terms.png")} />
              <View style={tw`flex justify-start items-start`}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-lg text-[#333333]')}>Terms and conditions</Text>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#556575]')}>Learn more about Ushift</Text>
              </View>
              <View style={tw`flex flex-row justify-end items-end ml-10`}>
                <Ionicons name='chevron-forward' size={20} color={"#646464"} />
              </View>
            </Pressable>
            <Pressable style={tw`flex flex-row justify-center items-center gap-6 bg-white`}>
              <Image source={require("../../assets/logout.png")} />
              <View style={tw`flex justify-start items-start`}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-lg text-[#333333]')}>Log out</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Settings;