import { View, Text, SafeAreaView, Image, ScrollView, useWindowDimensions } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native"

//import components
import CustomButton from '../../../../components/CustomButton';

const Score = () => {

    const navigation = useNavigation();

    const { height, width } = useWindowDimensions();

    return (
        <>
            <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
                {/* <ScrollView vertical> */}
                <View style={tw`flex justify-between items-start px-8 py-6 h-full bg-white`}>
                    <View style={tw`bg-white w-full`}>
                        <Ionicons name="chevron-back" size={40} color={"#141414"} onPress={() => navigation.goBack()} />
                    </View>
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-3xl text-left text-[#141414]')}>Great Job! 👍 </Text>
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-left text-[#4a4a68]')}>
                        You have successfully completed all scenarios in <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-base text-black')}>Motivation doze pack</Text>. Tap button below to see how you are ranked on the leaderboard
                    </Text>

                    <View style={[tw`flex justify-start items-start gap-4`, { width }]}>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#4a4a68]')}>This is what you scored</Text>

                        <View style={tw`flex flex-row justify-between items-center gap-36 p-4 rounded-lg bg-[#f5f7ff]`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-black text-lg')}>Scenario 1-</Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-lg')}>Correct<Text style={tw`text-[#3e8e7b]`}> ✔ </Text></Text>
                        </View>
                        <View style={[tw`flex flex-row justify-between items-center gap-36 p-4 rounded-lg bg-[#f5f7ff]`, { width }]}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-black text-lg')}>Scenario 2-</Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-lg')}>Wrong <Text style={tw`text-[#D45151]`}>✖ </Text></Text>
                        </View>
                        <View style={tw`flex flex-row justify-between items-center gap-36 p-4 rounded-lg bg-[#f5f7ff]`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-black text-lg')}>Scenario 3-</Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-lg')}>Wrong <Text style={tw`text-[#D45151]`}>✖ </Text></Text>
                        </View>
                        <View style={tw`flex flex-row justify-between items-center gap-36 p-4 rounded-lg bg-[#f5f7ff]`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-black text-lg')}>Scenario 4-</Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-lg')}>Correct<Text style={tw`text-[#3e8e7b]`}> ✔ </Text></Text>
                        </View>
                    </View>
                    <View style={tw`flex flex-row justify-around items-center gap-4 pt-12`}>
                        <CustomButton style={tw`flex flex-row justify-between items-center gap-8 bg-[#F5F7FF] rounded-lg px-4 py-4`} onPress={() => navigation.navigate("Home")}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001C46] text-lg')}>Go Home</Text>
                        </CustomButton>
                        <CustomButton style={tw`flex flex-row justify-between items-center gap-8 bg-[#001c46] rounded-lg px-3 py-4`} onPress={() => navigation.navigate("LeaderBoard")}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-lg')}>View leader board</Text>
                            <Image source={require("../../../../assets/ranking.png")} />
                        </CustomButton>
                    </View>
                </View>
                {/* </ScrollView> */}
            </SafeAreaView>
        </>
    )
}

export default Score;