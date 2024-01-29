import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';
import Checkbox from 'expo-checkbox';

//components
import CustomButton from '../../../../components/CustomButton';

const ScenarioTwo = () => {

    const navigation = useNavigation();

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);


    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <ScrollView vertical>
                <View style={tw`flex justify-start items-start gap-4 bg-[#F5F7FF] min-h-full`}>
                    <View style={tw`flex justify-start items-start gap-4 bg-white w-full p-4`}>
                        <View>
                            <Ionicons name="chevron-back-outline" size={24} color={"#141414"} onPress={() => navigation.goBack()} />
                        </View>
                        <View style={tw`flex justify-start items-start gap-2`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-3xl text-[#141414]')}>Scenarios 2</Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#4A4A68]')}>Read scenario and provide responses in the fields below</Text>
                        </View>
                    </View>
                    <View style={tw`gap-4 p-4`}>
                        <View style={tw`flex justify-center items-start bg-white rounded-lg p-16 w-[358px] m-auto`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-white rounded-lg bg-[#3E8E7B] text-center px-4 absolute top-[6px] left-[10px]')}>2</Text>
                            <View style={tw`absolute top-[2px] left-[5px]`}>
                                <Svg xmlns="http://www.w3.org/2000/svg" width="344" height="114" viewBox="0 0 334 114" fill="none">
                                    <Path d="M334 102C334 108.627 328.627 114 322 114H12C5.37259 114 0 108.627 0 102V81.3495V46.8641C0 40.2366 5.37259 34.8641 12 34.8641H32.9715C39.1022 34.8641 44.247 30.2429 44.9027 24.1474L46.3473 10.7167C47.003 4.62115 52.1478 0 58.2785 0H322C328.627 0 334 5.37258 334 12V102Z" fill="#3E8E7B" />
                                    <View style={tw`flex flex-col justify-center items-center p-4`}>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'pl-8 text-xs text-white')}>A customer asks for assistance in finding</Text>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-xs text-white pl-4 pt-2')}>
                                            an item, but you are currently busy attending to another customer. How would you handle the situation professionally?
                                        </Text>
                                    </View>
                                </Svg>
                            </View>
                        </View>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#141414] text-base')}>Solution options</Text>
                        <View style={tw`bg-white p-3 rounded-lg`}>
                            <View style={tw`flex justify-start items-start gap-4 bg-[#F5F7F9] p-3 rounded-lg`}>
                                <View style={tw`flex flex-row justify-between items-center gap-52`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#141414]')}>Option 1</Text>
                                    <Checkbox
                                        style={tw`rounded-full border-2`}
                                        value={isChecked1}
                                        onValueChange={setIsChecked1}
                                        color={isChecked1 ? "#000" : "null"}
                                    />
                                </View>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-base text-[#141414]')}>
                                    I will confront the team member spreading
                                    the rumours and try to clear the air
                                </Text>
                            </View>
                        </View>
                        <View style={tw`bg-white p-3 rounded-lg`}>
                            <View style={tw`flex justify-start items-start gap-4 bg-[#F5F7F9] p-3 rounded-lg`}>
                                <View style={tw`flex flex-row justify-between items-center gap-52`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#141414]')}>Option 2</Text>
                                    <Checkbox
                                        style={tw`rounded-full border-2`}
                                        value={isChecked1}
                                        onValueChange={setIsChecked2}
                                        color={isChecked2 ? "#000" : "null"}
                                    />
                                </View>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-base text-[#141414]')}>
                                    I will help spread the rumour more by telling
                                    other colleague of ours with the organisation
                                </Text>
                            </View>
                        </View>
                        <View style={tw`bg-white p-3 rounded-lg`}>
                            <View style={tw`flex justify-start items-start gap-4 bg-[#F5F7F9] p-3 rounded-lg`}>
                                <View style={tw`flex flex-row justify-between items-center gap-52`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#141414]')}>Option 3</Text>
                                    <Checkbox
                                        style={tw`rounded-full border-2`}
                                        value={isChecked3}
                                        onValueChange={setIsChecked3}
                                        color={isChecked3 ? "#000" : "null"}
                                    />
                                </View>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-base text-[#141414]')}>
                                    I will confront the team member spreading
                                    the rumours and try to clear the air
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={tw`flex flex-row justify-end items-end gap-12 rounded-lg bg-white min-w-full p-4 h-20`}>
                        <CustomButton style={tw`flex flex-row justify-between items-center bg-[#001c46] rounded-lg px-4 py-3`} onPress={() => navigation.navigate("Video")}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-white')}>Next Scenario</Text>
                            <Ionicons name="chevron-forward" size={20} color={"#fff"} />
                        </CustomButton>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ScenarioTwo;