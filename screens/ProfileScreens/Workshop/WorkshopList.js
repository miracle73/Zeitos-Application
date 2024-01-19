import { View, Text, ScrollView, Image, SafeAreaView } from 'react-native';
import React from 'react';;
import tw from 'twrnc';
import Constants from 'expo-constants';
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from 'react-native-svg';

const WorkshopList = () => {
    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <ScrollView vertical>
                <View style={tw`flex justify-start items-start gap-6 h-full bg-[#F5F7FF]`}>
                    <View style={tw`flex justify-start items-start gap-4 bg-white w-full p-4`}>
                        <View>
                            <Ionicons name="chevron-back-outline" size={24} color={"#141414"} onPress={() => navigation.goBack("Home")} />
                        </View>
                        <View style={tw`flex justify-start items-start gap-2`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, ' w-[255px] text-3xl text-[#141414]')}>Workshops and Seminars</Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#B5B4B4]')}>Select opened workshops and make reservations</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WorkshopList