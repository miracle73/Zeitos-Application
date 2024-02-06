import { View, Text, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

import CustomInput from "../../components/CustomInput";
import CustomButton from '../../components/CustomButton';

const ResetPassword = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState("");

  return (
    <>
      <KeyboardAvoidingView keyboardVerticalOffset={100} behavior='padding' style={tw`flex-1`}>
        <View style={tw`flex justify-center items-center gap-24 bg-[#f5f7ff] min-h-full`}>
          <View style={tw`flex justify-start items-start gap-8`}>
            <View style={tw`flex justify-start items-start gap-6`}>
              <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-3xl text-[#001c46]')}>Enter email{"\n"}to reset password</Text>
              <View style={tw`flex flex-row justify-start items-start gap-4`}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-base text-[#8c8ca1]')}>Remember password ?</Text>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#141414]')} onPress={() => navigation.navigate("Login")}>Back to Login </Text>
              </View>
            </View>
            <View style={tw`flex flex-row justify-center items-center w-[358px] bg-white py-5 px-4 rounded-lg`}>
              <CustomInput placeholder="Enter email" value={email} type="email" style={tw`bg-[#F5F7FF] w-[326px] h-[52px] px-4 rounded-lg`} onChangeText={(email) => setEmail(email)} />
            </View>
          </View>
          <View style={tw`flex flex-row justify-center items-center`}>
            <CustomButton style={tw`flex justify-center items-center bg-[#001c46] w-[326px] rounded-lg px-5 py-5`} onPress={() => navigation.navigate("Reset OTP")}>
              <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-base text-center')}>Reset Password</Text>
            </CustomButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

export default ResetPassword;