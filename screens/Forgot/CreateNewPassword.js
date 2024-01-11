import { View, Text } from 'react-native';
import { useState } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const CreateNewPassword = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isVisible, setIsVisible] = useState("");

    const handleToggle = () => setIsVisible(!isVisible);

    return (
        <View style={tw`flex justify-start items-start gap-48 bg-[#f5f7ff] h-full p-4`}>
            <View style={tw`flex justify-start items-start gap-8`}>
                <View style={tw`flex justify-start items-start gap-5`}>
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#141414] text-left')}>Create{"\n"}new password</Text>
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#8C8CA1] text-left text-sm')}>Enter new password you would like to use for your subsequent login</Text>
                </View>
                <View style={tw`flex justify-center items-center gap-6 bg-white w-[358px] h-[152px] rounded-lg`}>
                    <CustomInput placeholder="New Password" value={password} type="password" onChangeText={(password) => setPassword(password)} style={tw`w-[326px] bg-[#F5F7F9] h-[52px] rounded-lg px-4`} secureTextEntry={!isVisible} />
                    <Ionicons name={isVisible ? "eye" : "eye-off"} size={18} color={"#c4c4c4"} style={tw`absolute bottom-[105px] right-[25px]`} onPress={handleToggle} />
                    <CustomInput placeholder="Confirm new Password" value={confirmPassword} type="password" onChangeText={(password) => setConfirmPassword(password)} style={tw`w-[326px] bg-[#F5F7F9] h-[52px] rounded-lg px-4`} secureTextEntry={!isVisible} />
                    <Ionicons name={isVisible ? "eye" : "eye-off"} size={18} color={"#c4c4c4"} style={tw`absolute bottom-[35px] right-[25px]`} onPress={handleToggle} />
                </View>
                <View style={tw`flex flex-row justify-center items-center`}>
                <CustomButton style={tw`bg-[#001c46] w-[326px] py-4 px-8 rounded-lg`}>
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center text-white text-lg')} onPress={() => navigation.navigate("New Password")}>Create account</Text>
                </CustomButton>
            </View>
            </View>
        </View>
    )
}

export default CreateNewPassword;