import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import tw from 'twrnc';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

//import components
import CustomInput from '../../../../components/CustomInput';
import CustomButton from '../../../../components/CustomButton';

const Question4 = () => {

    const navigation = useNavigation();

    return (
        <>
            <StatusBar style='dark' backgroundColor='#fff' />
            <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
                <ScrollView vertical>
                    <View style={tw`flex justify-start items-start bg-[#f5f7ff] gap-4 h-full`}>
                        <View style={tw`flex justify-start items-start gap-4 bg-white w-full p-4`}>
                            <View>
                                <Ionicons name="chevron-back-outline" size={24} color={"#141414"} onPress={() => navigation.goBack("Question3")} />
                            </View>
                            <View style={tw`flex justify-start items-start gap-2`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-3xl text-[#141414]')}>Scenarios</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#4A4A68]')}>Read scenario and provide responses in the fields below</Text>
                            </View>
                        </View>
                        <View style={tw`p-4`}>
                            <View style={tw`flex justify-center items-start bg-white gap-12 rounded-lg h-[230px] w-[358px] py-12`}>
                                <View>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-white rounded-lg bg-[#001C46] text-center px-4 absolute top-[6px] left-[10px]')}>4</Text>
                                    <View style={tw`absolute top-[2px] left-[5px]`}>
                                        <Svg xmlns="http://www.w3.org/2000/svg" width="344" height="114" viewBox="0 0 334 114" fill="none">
                                            <Path d="M334 102C334 108.627 328.627 114 322 114H12C5.37259 114 0 108.627 0 102V81.3495V46.8641C0 40.2366 5.37259 34.8641 12 34.8641H32.9715C39.1022 34.8641 44.247 30.2429 44.9027 24.1474L46.3473 10.7167C47.003 4.62115 52.1478 0 58.2785 0H322C328.627 0 334 5.37258 334 12V102Z" fill="#001C46" />
                                            <View style={tw`flex flex-col justify-center items-center p-4`}>
                                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'pl-8 text-xs text-white')}>A team member consistently fails to meet</Text>
                                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-xs text-white pl-4 pt-2')}>
                                                    their assigned responsibilities, affecting the team's overall performance. How would you address this issue professionally?
                                                </Text>
                                            </View>
                                        </Svg>
                                    </View>
                                </View>
                                <View style={tw`mt-18 flex justify-center items-start pb-4`}>
                                    <View style={tw`flex flex-row justify-center items-start gap-2`}>
                                        <Text style={tw`text-[#141414] text-3xl`}>.</Text>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-sm pt-4')}>Who are the role players involved?</Text>
                                    </View>
                                    <View style={tw`flex flex-row justify-center items-start gap-2`}>
                                        <Text style={tw`text-[#141414] text-3xl`}>.</Text>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-sm pt-4')}>What professionalism tips is/are required?</Text>
                                    </View>
                                    <View style={tw`flex flex-row justify-center items-start gap-2`}>
                                        <Text style={tw`text-[#141414] text-3xl`}>.</Text>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-sm pt-4')}>How would you resolve the situation?</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-left text-lg text-[#141414]')}>Solutions</Text>

                            <View style={tw`flex flex-col justify-center items-start gap-2 bg-white rounded-lg p-4 w-[100%]`}>
                                <View style={tw`flex flex-row justify-evenly items-center bg-[#f5f7f9] rounded-lg w-[100%] p-4`}>
                                    <Text style={tw`text-[#141414] text-lg`}>1</Text>
                                    <Text style={tw`text-[#8c8ca1] w-[28px]`}>|</Text>
                                    <CustomInput placeholder="Enter answer header" style={tw`bg-[#f5f7f9]`} />
                                </View>
                                <CustomInput multiline={true} placeholder="Write solution here" placeholderText={"#8c8ca1"} style={tw`border-2 border-[#F5F7F9] bg-[#F5F7F9]  w-[326px] h-[107px] p-2.5 m-2.5 rounded-lg`} />
                            </View>
                            <View style={tw`flex flex-col justify-center items-start gap-2 bg-white rounded-lg p-4 w-[100%]`}>
                                <View style={tw`flex flex-row justify-evenly items-center bg-[#f5f7f9] rounded-lg w-[100%] p-4`}>
                                    <Text style={tw`text-[#141414] text-lg`}>2</Text>
                                    <Text style={tw`text-[#8c8ca1] w-[28px]`}>|</Text>
                                    <CustomInput placeholder="Enter answer header" style={tw`bg-[#f5f7f9]`} />
                                </View>
                                <CustomInput multiline={true} placeholder="Write solution here" placeholderText={"#8c8ca1"} style={tw`border-2 border-[#F5F7F9] bg-[#F5F7F9]  w-[326px] h-[107px] p-2.5 m-2.5 rounded-lg`} />
                            </View>
                            <View style={tw`flex flex-row justify-between items-center gap-18 rounded-lg bg-white p-4`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-center')} onPress={() => navigation.navigate("AddQuestion4")}>Save as a Draft</Text>
                                <CustomButton style={tw`flex flex-row justify-between items-center bg-[#001c46] rounded-lg px-4 py-3`} onPress={() => navigation.navigate("Scores")}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-white')}>Next Scenario</Text>
                                    <Ionicons name="chevron-forward" size={20} color={"#fff"} />
                                </CustomButton>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Question4;