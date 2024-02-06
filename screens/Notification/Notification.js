import { View, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

const Notification = () => {

    const navigation = useNavigation();

    return (
        <>
            <StatusBar style='dark' backgroundColor='#fff' barStyle={'dark-content'} />
            <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
                <View style={tw`flex justify-start items-start gap-4 bg-[#f5f7ff] min-h-full`}>
                    <View style={tw`flex justify-start items-start gap-4 bg-white w-full p-4`}>
                        <View>
                            <Ionicons name="chevron-back-outline" size={24} color={"#141414"} onPress={() => navigation.goBack()} />
                        </View>
                        <View style={tw`flex justify-start items-start gap-2`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-3xl text-[#141414]')}>My notifications</Text>
                        </View>
                    </View>
                    <View style={tw`px-4 flex justify-center items-center gap-5 py-4`}>
                        <View style={tw`flex justify-center items-center gap-4 rounded-lg border-2 border-[#fff] bg-white px-4 py-4`}>
                            <View style={tw`flex flex-row justify-between items-center gap-12`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-xl text-black')}>Profile update approved</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#556575]')}>8:29PM</Text>
                            </View>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-base text-[#7E7F80]')}>
                                Your profile update request has been approved
                                successfully
                            </Text>
                        </View>
                        <View style={tw`flex justify-center items-center gap-4 rounded-lg border-2 border-[#fff] bg-white px-4 py-4`}>
                            <View style={tw`flex flex-row justify-between items-center gap-12`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-xl text-black')}>Profile update approved</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#556575]')}>8:29PM</Text>
                            </View>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-base text-[#7E7F80]')}>
                                Your profile update request has been approved
                                successfully
                            </Text>
                        </View>
                        <View style={tw`flex justify-center items-center gap-4 rounded-lg border-2 border-[#fff] bg-white px-4 py-4`}>
                            <View style={tw`flex flex-row justify-between items-center gap-12`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-xl text-black')}>Profile update approved</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#556575]')}>8:29PM</Text>
                            </View>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-base text-[#7E7F80]')}>
                                Your profile update request has been approved
                                successfully
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Notification;