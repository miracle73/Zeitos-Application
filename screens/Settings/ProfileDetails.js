import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Constants from 'expo-constants';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileDetails = () => {
    const navigation = useNavigation();
    return (
        <>
            <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
                <View style={tw`flex justify-start items-start gap-8 bg-white min-h-full p-6`}>
                    <Ionicons name="chevron-back" size={24} color={"#000"} onPress={() => navigation.goBack("Settings")} />
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-3xl text-[#141414]')}>Profile details</Text>
                    <View style={tw`flex justify-center items-center gap-3 ml-32`}>
                        <Image source={require("../../assets/avatar.png")} />
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#5879FD] border-2 border-[#5879FD] rounded-lg p-2')}>Change photo</Text>
                    </View>
                    <View style={tw`flex justify-center items-center gap-6 p-4`}>
                        <View style={tw`flex justify-start items-start gap-3 p-4 bg-[#F5F7F9] rounded-lg min-w-full`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#818181]')}>
                                Firstname
                            </Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-sm text-[#242424]')}>Dexter</Text>
                        </View>
                        <View style={tw`flex justify-start items-start gap-3 p-4 bg-[#F5F7F9] rounded-lg min-w-full`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#818181]')}>
                                Lastname
                            </Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-sm text-[#242424]')}>Olabisi</Text>
                        </View>
                        <View style={tw`flex justify-start items-start gap-3 p-4 bg-[#F5F7F9] rounded-lg min-w-full`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#818181]')}>
                                Email
                            </Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-sm text-[#242424]')}>Dexterious@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ProfileDetails