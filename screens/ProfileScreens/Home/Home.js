//Libraries
import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import tw from "twrnc";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import RNAnimatedScrollIndicators from 'react-native-animated-scroll-indicators';

//import components
import CustomButton from '../../../components/CustomButton';

const Home = () => {
    // scrollX = new Animated.Value(0);
    // const { width, height } = Dimensions.get("window");


    const navigation = useNavigation();

    return (
        <>
            <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
                <ScrollView vertical style={tw`pb-80`}>
                    <View style={tw`flex justify-center items-center gap-8 bg-[#f5f7ff] min-h-full pb-20`}>
                        <View style={tw`flex flex-row justify-center items-center gap-18 bg-white min-w-full p-4`}>
                            <View style={tw`flex justify-start items-start gap-2`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-xl text-black')}>Hello Mensah</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1]')}>You are a Champion, stay winning</Text>
                            </View>
                            <View style={tw`flex flex-row justify-end items-end gap-2`}>
                                <Ionicons name="search-outline" size={24} color={"#001c46"} style={tw`bg-[#F5F7FF] justify-center items-center rounded-full p-2`} />
                                <Ionicons name='notifications-outline' size={24} color={"#001C46"} style={tw`bg-[#F5F7FF] justify-center items-center rounded-full p-2`} />
                            </View>
                        </View>
                        <View style={tw`flex justify-center items-center gap-4 p-4`}>
                            <View style={tw`flex flex-row justify-center items-center gap-4 mb-12`}>
                                <View style={tw`bg-white rounded-3xl p-2`}>
                                    <View style={tw`flex justify-center items-center gap-2 bg-[#F5F7FF] rounded-3xl p-3`}>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-xl text-[#000]')}>32</Text>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#000]')}>Scenarios</Text>
                                    </View>
                                </View>
                                <View style={tw`bg-white rounded-3xl p-2`}>
                                    <View style={tw`flex justify-center items-center gap-3 bg-[#E9F8EE] rounded-3xl p-3`}>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-xl text-[#3e8e7b]')}>0</Text>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#3e8e7b]')}>Completed</Text>
                                    </View>
                                </View>
                                <View style={tw`bg-white rounded-3xl p-2`}>
                                    <View style={tw`flex justify-center items-center gap-3 bg-[#F9FAFB] rounded-3xl p-3`}>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-xl text-[#000]')}>0</Text>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#000]')}>Ongoing</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={tw`flex justify-start items-start gap-3`}>
                                <View style={tw`flex flex-row justify-between items-center gap-32`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001c46] text-lg pl-6')}>Top scenario category</Text>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001c46] text-lg')}>See all</Text>
                                </View>
                                <View style={tw`flex flex-row justify-center items-center gap-3 ml-16 mr-2`}>
                                    <View style={tw`flex justify-start items-start gap-2 rounded-3xl py-4 px-2 bg-white`}>
                                        <Image source={require('../../../assets/ad3.png')} style={tw`m-auto rounded-3xl`} />
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001c46] text-lg')}>Motivation doze</Text>
                                        <View style={tw`flex flex-row justify-start items-center gap-2`}>
                                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4a4a68] text-sm')}>8 Scenarios</Text>
                                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'bg-[#e9f8ee] text-[#3e8e7b] text-base rounded-lg px-4 py-2')}>Start now</Text>
                                        </View>
                                    </View>
                                    <View style={tw`flex justify-start items-start gap-2 rounded-3xl py-4 px-2 bg-white`}>
                                        <Image source={require('../../../assets/thisman.png')} style={tw`m-auto rounded-3xl`} />
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001c46] text-lg')}>Wealth creation</Text>
                                        <View style={tw`flex flex-row justify-start items-center gap-2`}>
                                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4a4a68] text-sm')}>8 Scenarios</Text>
                                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'bg-[#e9f8ee] text-[#3e8e7b] text-base rounded-lg px-4 py-2')}>Start now</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={tw`bg-white flex flex-row justify-between items-center gap-36 rounded-xl px-5 py-3`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001c46] text-lg')}>View all Scenarios</Text>
                                <Ionicons name='arrow-forward' color={"#fff"} size={24} style={tw`justify-center items-center bg-[#001c46] rounded-full p-3`}/>
                            </View>
                            <View style={tw`flex flex-row justify-center items-start gap-6 bg-white rounded-lg p-4`}>
                                <Image source={require("../../../assets/home-image2.png")} />
                                <View style={tw`flex flex-col justify-start items-start gap-4 w-3/5`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-sm text-left text-black w-[168px]')}>Workshops and Workbooks</Text>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1] text-left')}>
                                        Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in.
                                        Aliquet pharetra Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in.
                                        Aliquet pharetra
                                    </Text>
                                    <CustomButton style={tw`flex flex-row justify-center items-center px-6 py-3 rounded-full bg-[#001C46]`} onPress={() => navigation.navigate("WorkshopList")}>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-center text-white')}>View Details</Text>
                                    </CustomButton>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Home;

const styles = StyleSheet.create({})