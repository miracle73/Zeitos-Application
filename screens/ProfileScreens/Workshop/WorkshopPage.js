import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native"

//import components
import CustomButton from '../../../components/CustomButton';

const WorkshopPage = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <ScrollView>
                <View style={tw`flex justify-center items-start gap-4 bg-white h-full pt-4 pb-4`}>
                    <View style={tw`flex flex-row justify-start items-start ml-2`}>
                        <Ionicons name="chevron-back" size={24} color="#000" onPress={() => navigation.goBack("WorkshopList")} />
                    </View>
                    <View style={tw`flex justify-center items-center gap-4`}>
                        <Image source={require("../../../assets/ws-detailsImage.png")} />

                        <View style={tw`flex justify-center items-start gap-4 p-4`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-3xl text-[#141414]')}>Dev relate tech summit</Text>
                            <View style={tw`flex flex-row justify-start items-start gap-2`}>
                                <Ionicons name="location-outline" size={18} color={"#141414"} />
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#8C8CA1] text-sm')}>No.19 Victoria island Ajao estate lagos</Text>
                            </View>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#8C8CA1] text-sm')}>
                                Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing
                                Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing
                                Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing
                                Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing{"\n"}
                            </Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#8C8CA1] text-sm')}>
                                adipiscing
                                Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing
                                Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing Lorem ipsum dolor sit amet cons Enim rhoncus ultrices adipiscing
                            </Text>
                        </View>
                        <View style={tw`flex flex-row justify-center items-center z-20`}>
                            <CustomButton style={tw`flex flex-row justify-between items-center gap-5 bg-[#001c46] px-4 py-4 w-[350px] rounded-full z-10`} onPress={() => navigation.navigate("Create Account")}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#fff]')}>Register now</Text>
                                <Ionicons name="chevron-forward" size={18} color="#fff" />
                            </CustomButton>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WorkshopPage