import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native"

//import components
import CustomButton from '../../../components/CustomButton';

const ScoreScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <View style={tw`bg-white w-full pt-4`}>
                <Ionicons name="chevron-back" size={24} color={"#141414"} onPress={() => navigation.navigate("Home")} />
            </View>
            <View style={tw`flex justify-center items-start gap-4 p-4 bg-white h-full`}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-3xl text-left text-[#141414]')}>Great Job! 👍 </Text>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-left text-[#4a4a68]')}>
                    You have successfully completed all scenarios. To view correct answers click on the scenario score cards below.
                </Text>

                <View style={tw`flex justify-start items-start gap-4`}>
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-sm text-[#4a4a68]')}>This is what you scored</Text>

                    <View style={tw`flex flex-row justify-between items-center p-4 rounded-lg w-[342px] bg-[#f5f7ff]`}>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-black text-lg')}>Scenario 1-</Text>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-lg')}>40% <Text style={tw`text-[#3e8e7b]`}> ✔ </Text></Text>
                    </View>
                    <View style={tw`flex flex-row justify-between items-center p-4 rounded-lg w-[342px] bg-[#f5f7ff]`}>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-black text-lg')}>Scenario 2-</Text>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-lg')}>70% <Text style={tw`text-[#3e8e7b]`}> ✔ </Text></Text>
                    </View>
                    <View style={tw`flex flex-row justify-between items-center p-4 rounded-lg w-[342px] bg-[#f5f7ff]`}>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-black text-lg')}>Scenario 3-</Text>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-lg')}>45% <Text style={tw`text-[#3e8e7b]`}> ✔ </Text></Text>
                    </View>
                    <View style={tw`flex flex-row justify-between items-center p-4 rounded-lg w-[342px] bg-[#f5f7ff]`}>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-black text-lg')}>Scenario 4-</Text>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-lg')}>60% <Text style={tw`text-[#3e8e7b]`}> ✔ </Text></Text>
                    </View>
                </View>

                <View style={tw`flex flex-row justify-end items-end p-6`}>
                    <CustomButton style={tw`flex flex-row justify-between items-center gap-8 bg-[#001c46] rounded-lg px-4 py-4 ml-24`} onPress={() => navigation.navigate("Answers")}>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-lg')}>Go back home</Text>
                        <Image source={require("../../../assets/home-2.png")} />
                    </CustomButton>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ScoreScreen;