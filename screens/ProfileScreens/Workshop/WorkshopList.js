import { View, Text, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';;
import tw from 'twrnc';
import Constants from 'expo-constants';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const WorkshopList = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <ScrollView vertical>
                <View style={tw`flex justify-start items-center gap-6 h-full bg-[#F5F7FF]`}>
                    <View style={tw`flex justify-start items-start gap-4 bg-white w-full p-4`}>
                        <View>
                            <Ionicons name="chevron-back-outline" size={24} color={"#141414"} onPress={() => navigation.goBack("Home")} />
                        </View>
                        <View style={tw`flex justify-start items-start gap-2`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, ' w-[255px] text-3xl text-[#141414]')}>Workshops and Seminars</Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#B5B4B4]')}>Select opened workshops and make reservations</Text>
                        </View>
                    </View>
                    <View style={tw`flex justify-center items-center gap-4 p-4`}>
                        <TouchableOpacity onPress={() => navigation.navigate("WorkshopPage")} style={tw`flex flex-row justify-start items-start gap-2 bg-white p-6 rounded-lg w-[350px]`}>
                            <View style={tw`flex justify-start items-start gap-2`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#001c46]')}>
                                    Dev Relate Tech summit
                                </Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1] w-[158px]')}>
                                    Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing
                                </Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1]')}>
                                    Thur, 12 Jan 2024
                                </Text>
                            </View>
                            <View style={tw`flex flex-row justify-end items-end`}>
                                <Image source={require("../../../assets/ws-image1.png")} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("WorkshopPage")} style={tw`flex flex-row justify-start items-start gap-2 bg-white p-6 rounded-lg w-[350px]`}>
                            <View style={tw`flex justify-start items-start gap-2`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#001c46]')}>
                                    Dev related tech summit
                                </Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1] w-[158px]')}>
                                    Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing
                                </Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1]')}>
                                    Thur, 12 Jan 2024
                                </Text>
                            </View>
                            <View style={tw`flex flex-row justify-end items-end`}>
                                <Image source={require("../../../assets/ws-image2.png")} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("WorkshopPage")} style={tw`flex flex-row justify-start items-start gap-2 bg-white p-6 rounded-lg w-[350px]`}>
                            <View style={tw`flex justify-start items-start gap-2`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#001c46]')}>
                                    Dev Relate Tech summit
                                </Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1] w-[158px]')}>
                                    Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing
                                </Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1]')}>
                                    Thur, 12 Jan 2024
                                </Text>
                            </View>
                            <View style={tw`flex flex-row justify-end items-end`}>
                                <Image source={require("../../../assets/ws-image1.png")} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("WorkshopPage")} style={tw`flex flex-row justify-start items-start gap-2 bg-white p-6 rounded-lg w-[350px]`}>
                            <View style={tw`flex justify-start items-start gap-2`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#001c46]')}>
                                    Dev Relate Tech summit
                                </Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1] w-[158px]')}>
                                    Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing
                                </Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1]')}>
                                    Thur, 12 Jan 2024
                                </Text>
                            </View>
                            <View style={tw`flex flex-row justify-end items-end`}>
                                <Image source={require("../../../assets/ws-image1.png")} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WorkshopList;