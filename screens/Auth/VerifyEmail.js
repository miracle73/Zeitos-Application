import { View, Text } from 'react-native'
// import { useState } from 'react'
import tw from 'twrnc'
import { Ionicons } from "@expo/vector-icons";
// import OTPInputView from "@twotalltotems/react-native-otp-input";
import CustomButton from '../../components/CustomButton';
import OTP from '../../components/OTP';
// import "@react-native-community/clipboard"

const VerifyEmail = () => {

  // const [isFull, setIsFull] = useState(false);

  // const handleFull = () => {
  //   if (isFull === 6) {
  //     setIsFull(!isFull)
  //   } else {
  //     setIsFull(isFull)
  //   }
  // }

  return (
    <View style={tw`flex justify-start items-center gap-48 h-full bg-[#f5f7ff] p-4`}>
      <View style={tw`flex justify-start items-start gap-5`}>
        <View style={tw`flex justify-start items-start gap-2`}>
          <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#141414] text-4xl')}>Verify{"\n"}your email</Text>
          <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-left text-base text-[#8c8ca1]')}>Kindly enter the 6 digit code send to Mary******@gmail.com to create account</Text>
        </View>
        <View style={tw`flex justify-center items-center gap-3 bg-white px-3 py-4 rounded-lg w-[358px]`}>
          <OTP onChange={handleFull} />
          <View style={tw`flex flex-row justify-start items-start gap-8 bg-[#f5f7ff] p-4 rounded-lg w-[304px]`}>
            <View style={tw`flex flex-row justify-start items-start gap-px`}>
              <Ionicons name="alert-circle" size={20} color={"#001c46"} />
              <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-base text-[#001c46]')}>Didn’t receive the code?</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`flex flex-row justify-center items-center`}>
        <CustomButton style={tw`bg-[#001c46] w-[326px] py-4 px-8 rounded-lg`}>
          <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center text-white text-lg')}>Create account</Text>
        </CustomButton>
      </View>
    </View>
  )
}

export default VerifyEmail;