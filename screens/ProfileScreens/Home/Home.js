//Libraries
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import CustomButton from '../../../components/CustomButton';

const Home = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView horizontal={false} style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={tw`flex justify-center items-center gap-8 bg-[#f5f7ff] min-h-full p-4`}>
                    <View style={tw`flex flex-row justify-between items-center gap-36`}>
                        <View style={tw`flex justify-start items-start gap-2`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-base text-black')}>UShift</Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-xs text-[#8C8CA1]')}>Good morning Rawlings</Text>
                        </View>
                        <View style={tw`flex flex-row justify-end items-end gap-4`}>
                            <Ionicons name="search-outline" size={24} color={"#001c46"} />
                            <Image source={require("../../../assets/avatar.png")} />
                        </View>
                    </View>
                    <View style={tw`flex justify-center items-center gap-8`}>
                        <View style={tw`flex flex-row justify-center items-start gap-6 bg-white rounded-lg p-4`}>
                            <Image source={require("../../../assets/box.png")} />
                            <View style={tw`flex flex-col justify-start items-start gap-4 w-3/5`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-sm text-center text-black')}>Learning Scenarios</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1] text-left w-[196px]')}>
                                    Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in.
                                    Aliquet pharetra Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in.
                                    Aliquet pharetra
                                </Text>
                                <CustomButton style={tw`flex flex-row justify-center items-center px-3 py-3 rounded-full bg-[#001C46]`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-center text-white')} onPress={() => navigation.navigate("Scenarios")}>Start Now</Text>
                                </CustomButton>
                            </View>
                        </View>
                        <View style={tw`flex flex-row justify-center items-start gap-6 bg-white rounded-lg p-4`}>
                            <Image source={require("../../../assets/box.png")} />
                            <View style={tw`flex flex-col justify-start items-start gap-4 w-3/5`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-sm text-left text-black w-[168px]')}>Conferences & Seminars Workbooks</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1] text-left w-[196px]')}>
                                    Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in.
                                    Aliquet pharetra Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in.
                                    Aliquet pharetra
                                </Text>
                                <CustomButton style={tw`flex flex-row justify-center items-center px-3 py-3 rounded-full bg-[#001C46]`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-center text-white')}>Start Now</Text>
                                </CustomButton>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home