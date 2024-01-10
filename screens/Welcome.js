import { View, Text, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native"

import CustomButton from '../components/CustomButton';

const Welcome = () => {

    const navigation = useNavigation();

    return (
        <>
            <StatusBar style="light" />
            <ImageBackground source={require("../assets/first-image.png")} resizeMode='cover' style={tw`w-full h-full justify-center items-center`} blurRadius={4}>
                <View style={tw`flex justify-center items-center gap-8 mt-80`}>
                    <View style={tw`flex justify-start items-start gap-2`}>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-white text-3xl')}>Welcome to Ushift</Text>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-base w-[311px]')}>Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in. Aliquet pharetra volutpat mi egestas</Text>
                    </View>

                    <View style={tw`flex flex-col justify-center items-center gap-4`}>
                        <CustomButton style={tw`flex flex-row justify-center items-center bg-white w-[342px] py-5 rounded-lg`} onPress={() => navigation.navigate("Login")}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#141414] text-base text-center')}>Login</Text>
                        </CustomButton>
                        <CustomButton style={tw`flex flex-row justify-center items-center bg-[#d66b09] w-[342px] py-5 rounded-lg`} onPress={() => navigation.navigate("Create Account")}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-base text-center')}>Create an Account</Text>
                        </CustomButton>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}

export default Welcome;