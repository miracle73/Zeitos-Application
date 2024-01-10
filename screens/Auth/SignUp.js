import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Ionicons } from "@expo/vector-icons";
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUp = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    return (
        <ScrollView >
            <View style={tw`flex justify-start items-start gap-8 p-4 bg-white h-full px-10`}>
                <View style={tw`flex justify-start items-start gap-6`}>
                    <Text style={tw`w-[135px] text-3xl text-black`}>
                        Create Account
                    </Text>
                    <Text style={tw`w-[235px] text-sm text-[#8C8CA1]`}>
                        Kindly create an Ushift account with either of the options below
                    </Text>
                    <View style={tw`flex flex-col justify-center items-center gap-5`}>
                        <View style={tw`flex flex-row justify-center items-center gap-8 bg-gray-300 rounded-lg py-5 px-5 `}>
                            <Ionicons name="logo-google" size={24} color="#ff0000" />
                            <Text style={tw`text-black text-medium text-center`}>Create Account with Google</Text>
                        </View>
                        <Text style={tw`text-black text-center`}>or Create Account with</Text>
                    </View>
                    <View style={tw`flex justify-center items-center gap-8`}>
                        <View style={tw`flex flex-row justify-center items-center gap-6`}>
                            <CustomInput placeholder="First Name" type="text" value={firstName} style={tw`w-[159px] bg-gray-200 rounded-lg px-4 py-8`} onChangeText={(firstName) => setFirstName(firstName)} />
                            <CustomInput placeholder="Last Name" type="text" value={lastName} style={tw`w-[159px] bg-gray-200 rounded-lg px-4 py-8`} onChangeText={(lastName) => setLastName(lastName)} />
                        </View>
                        <CustomInput placeholder="Email Address" type="email" value={email} style={tw`w-[326px] bg-gray-200 rounded-lg px-4 py-8`} onChangeText={(text) => setEmail(text)} />
                        <CustomInput placeholder="Password" type="email" value={password} style={tw`w-[326px] bg-gray-200 rounded-lg px-4 py-8`} onChangeText={(password) => setPassword(password)} />
                    </View>

                    <View style={tw`flex flex-row justify-center items-center`}>
                        <CustomButton style={tw`bg-[#001c46] rounded-lg py-4 px-8 w-[326px]`}>
                            <Text style={tw`text-white text-base text-center`}>Create Account</Text>
                        </CustomButton>
                    </View>
                    <Text style={tw`text-center text-[#4a4a68]`}>By creating an you agree Ushift Privacy Policy and Terms of service</Text>

                    <View style={tw`flex flex-row justify-between items-center gap-12`}>
                        <Text style={tw`text-sm text-gray-200`}>Have an account?</Text>
                        <Text style={tw`text-sm text-[#00c146]`}> Login</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp;