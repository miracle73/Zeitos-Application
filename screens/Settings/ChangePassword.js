import { View, Text, SafeAreaView, Image } from 'react-native'
import { useState } from 'react'
import Constants from "expo-constants";
import tw from "twrnc";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';

const ChangePassword = () => {

    const navigation = useNavigation();

    const [oldPassword, setOldPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isVisible, setIsVisible] = useState("");

    //handle modal
    const [modalVisible, setModalVisible] = useState(false);

    const handleToggle = () => setIsVisible(!isVisible);
    const handleModal = () => setModalVisible(() => !modalVisible);

    return (
        <>
            <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
                <View style={tw`flex justify-start items-start gap-16 min-h-full bg-white p-4`}>
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-3xl text-[#141414]')}>Change Password</Text>
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-base text-[#828282] text-left w-[247px]')}>
                        Kindly fill required details below
                        to successfully change password
                    </Text>
                    <View style={tw`flex justify-center items-center gap-6`}>
                        <CustomInput value={oldPassword} onChangeText={(text) => setOldPassword(text)} placeholder="Current password" style={tw`bg-[#F5F7F9] rounded-lg p-4 min-w-full`} secureTextEntry={!isVisible} />
                        <Ionicons name={isVisible ? "eye" : "eye-off"} size={18} color={"#c4c4c4"} style={tw`absolute bottom-[240px] right-[25px]`} onPress={handleToggle} />
                        <View style={tw`flex flex-row justify-end items-end gap-4 w-[158px] ml-42`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4a4a68] text-sm')}>Forgot Password?</Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#5879FD] text-sm')} onPress={() => navigation.navigate("Reset Password")}>Reset</Text>
                        </View>
                        <CustomInput placeholder="New Password" value={newpassword} type="password" onChangeText={(password) => setNewPassword(password)} style={tw`bg-[#F5F7F9] rounded-lg p-4 min-w-full`} secureTextEntry={!isVisible} />
                        <Ionicons name={isVisible ? "eye" : "eye-off"} size={18} color={"#c4c4c4"} style={tw`absolute bottom-[115px] right-[25px]`} onPress={handleToggle} />
                        <CustomInput placeholder="Confirm new Password" value={confirmPassword} type="password" onChangeText={(password) => setConfirmPassword(password)} style={tw`bg-[#F5F7F9] rounded-lg p-4 min-w-full`} secureTextEntry={!isVisible} />
                        <Ionicons name={isVisible ? "eye" : "eye-off"} size={18} color={"#c4c4c4"} style={tw`absolute bottom-[35px] right-[25px]`} onPress={handleToggle} />
                    </View>
                    <View style={tw`flex justify-center items-center mt-24 min-w-full`}>
                        <CustomButton style={tw`bg-[#001c46] w-[326px] py-4 px-8 rounded-lg`} onPress={handleModal}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center text-white text-lg')}>Change Password</Text>
                        </CustomButton>
                        <CustomModal animationType={"slide"} transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                            <View style={tw`flex justify-start items-start gap-4`}>
                                <Image source={require("../../assets/padlock.png")} />
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#000000] text-xl')}>Password Changed</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#8C8CA1] w-[256px] text-lg')}>Your login password has been changed successfully</Text>
                                <CustomButton style={tw`bg-[#001c46] w-[326px] py-4 px-8 rounded-lg`} onPress={() => navigation.navigate("Settings")}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center text-white text-lg')}>Okay</Text>
                                </CustomButton>
                            </View>
                        </CustomModal>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ChangePassword;