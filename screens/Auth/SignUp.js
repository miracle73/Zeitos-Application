import { View, Text, ScrollView, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

//import components
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUp = () => {

    //import navigation
    const navigation = useNavigation();

    //state management
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => setIsVisible(!isVisible);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Pressable
                        style={tw`bg-white rounded-lg m-2 pt-[11px] pb-[10px] pl-[17px] pr-[18px]`}
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text
                            style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#141414] text-sm text-center w-[44px]')}>
                            Log in
                        </Text>
                    </Pressable>
                )
            }
        })
    }, [navigation]);

    return (
<<<<<<< HEAD
        <ScrollView >
            <View style={tw`flex justify-start items-start gap-8 p-4 bg-white h-full px-10`}>
                <View style={tw`flex justify-start items-start gap-6`}>
                    <Text style={tw`w-[135px] text-3xl text-black`}>
                        Create Account
                    </Text>
                    <Text style={tw`w-[235px] text-sm text-[#8C8CA1]`}>
                        Kindly create an Ushift account with either of the options below
=======
        <ScrollView>
            <View style={tw`gap-8 bg-[#F5F7FF] h-full p-4`}>
                <View style={tw`flex flex-col justify-start items-start gap-6`}>
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'w-[135px] text-3xl text-[#141414]')}>
                        Create Account
                    </Text>
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'w-[201px] text-sm text-[#8C8CA1]')}>
                        Kindly create an <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-sm text-black')}>Ushift</Text> account with either of the options below
>>>>>>> acf9eb4e00702060434cc99b6014349a985d7511
                    </Text>
                </View>
                <View style={tw`flex justify-center items-center gap-8 px-4 bg-white rounded-lg`}>
                    <View style={tw`flex flex-col justify-center items-center gap-5`}>
<<<<<<< HEAD
                        <View style={tw`flex flex-row justify-center items-center gap-8 bg-gray-300 rounded-lg py-5 px-5 `}>
=======
                        <View style={tw`flex flex-row justify-center items-center gap-8 bg-[#f5f7ff] rounded-lg py-5 px-5 m-4`}>
>>>>>>> acf9eb4e00702060434cc99b6014349a985d7511
                            <Ionicons name="logo-google" size={24} color="#ff0000" />
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-black text-base text-center')}>Create Account with Google</Text>
                        </View>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-black text-center')}>or Create Account with</Text>
                    </View>
                    <View style={tw`flex justify-center items-center gap-8`}>
                        <View style={tw`flex flex-row justify-center items-center gap-6`}>
                            <CustomInput placeholder="First Name" type="text" value={firstName} style={tw`w-[159px] h-[52px] bg-[#f5f7ff] rounded-lg px-4 ${firstName ? 'border-red-100' : 'border-[#f5f7ff]'}`} onChangeText={(firstName) => setFirstName(firstName)} />
                            <CustomInput placeholder="Last Name" type="text" value={lastName} style={tw`w-[159px] h-[52px] bg-[#f5f7ff] rounded-lg px-4`} onChangeText={(lastName) => setLastName(lastName)} />
                        </View>
                        <CustomInput placeholder="Email Address" type="email" value={email} style={tw`w-[326px] h-[52px] bg-[#f5f7ff] rounded-lg px-4`} onChangeText={(text) => setEmail(text)} />

                        <CustomInput placeholder="Password" type="email" value={password} style={tw`w-[326px] h-[52px] bg-[#f5f7ff] rounded-lg px-4`} onChangeText={(password) => setPassword(password)} secureTextEntry={!isVisible} />
                        <Ionicons name={isVisible ? "eye" : "eye-off"} size={18} color={"#c4c4c4"} style={tw`absolute bottom-[35px] right-[25px]`} onPress={handleToggle} />
                    </View>

                    <View style={tw`flex flex-row justify-center items-center`}>
                        <CustomButton style={tw`bg-[#001c46] rounded-lg py-4 px-8 w-[326px]`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-base text-center')}>Create Account</Text>
                        </CustomButton>
                    </View>
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-center text-[#4a4a68]')}>By creating an you agree Ushift Privacy Policy and Terms of service</Text>
                </View>

                <View style={tw`flex flex-row justify-around items-center`}>
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8c8ca1]')}>Have an account?</Text>
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center text-sm bg-white w-[79px] py-2 text-[#001c46] rounded-lg')}> Login</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp;