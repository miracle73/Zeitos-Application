//Libraries
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import tw from "twrnc";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

//import components
import CustomButton from '../../../components/CustomButton';


// const slides = [
//     {
//         id: '1',
//         image: require('../../../assets/adSlide1.png'),
//     },
//     {
//         id: '2',
//         image: require('../../../assets/adSlide1.png'),
//     },
// ];


const Home = () => {

    const navigation = useNavigation();

    return (
        <>
            <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
                <ScrollView vertical style={tw`pb-80`}>
                    <View style={tw`flex justify-center items-start gap-8 bg-[#f5f7ff] h-full p-4 pb-20`}>
                        <Ionicons name="chevron-back" size={24} color={"#141414"} onPress={() => navigation.navigate("Login")}/>
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
                        <View style={tw`flex justify-center items-center gap-4`}>
                            <View style={tw`flex flex-row justify-center items-start gap-6 bg-[#D66B09] rounded-lg p-4`}>
                                <Image source={require("../../../assets/people.png")} />
                                <View style={tw`flex flex-col justify-start items-start gap-2 w-3/5`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-sm text-center text-white')}>Learning Scenarios</Text>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-white text-left')}>
                                        Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in.
                                        Aliquet pharetra Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in.
                                        Aliquet pharetra
                                    </Text>
                                    <CustomButton style={tw`flex flex-row justify-center items-center px-3 py-3 rounded-full bg-white`}>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-sm text-center text-[#001C46]')} onPress={() => navigation.navigate("Scenarios")}>Start Learning</Text>
                                    </CustomButton>
                                </View>
                            </View>
                            <View style={tw`flex flex-row justify-center items-start gap-6 bg-white rounded-lg p-4`}>
                                <Image source={require("../../../assets/people2.png")} />
                                <View style={tw`flex flex-col justify-start items-start gap-4 w-3/5`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-sm text-left text-black w-[168px]')}>Conferences & Seminars Workbooks</Text>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1] text-left w-[196px]')}>
                                        Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in.
                                        Aliquet pharetra Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in.
                                        Aliquet pharetra
                                    </Text>
                                    <CustomButton style={tw`flex flex-row justify-center items-center px-3 py-3 rounded-full bg-[#001C46]`}>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-center text-white')}>View Details</Text>
                                    </CustomButton>
                                </View>
                            </View>
                        </View>
                        <ScrollView horizontal style={tw``}>
                            <Image source={require("../../../assets/adSlide1.png")} />
                            <Image source={require("../../../assets/adSlide1.png")} />
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Home