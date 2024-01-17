import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import tw from 'twrnc';
import Svg, { Path } from 'react-native-svg';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants"
import Answers from './Home/AnswerScreens/Answers';
import UshiftAnswers from './Home/UshiftAnswers';
import MyAnswers from './Home/MyAnwers';
// import {  } from 'react-native-safe-area-context';

const File = () => {

  const navigation = useNavigation();

  //handle switch tabs
  const [buttonOne, setButtonOne] = useState(true);
  const [buttonTwo, setButtonTwo] = useState(false);

  const handleButtonOne = () => {
    setButtonTwo(false);
    setButtonOne(true);
  }

  const handleButtonTwo = () => {
    setButtonTwo(true);
    setButtonOne(false);
  }

  useEffect(() => {
    handleButtonOne();
  }, []);

  //handle data
  const data = {
    ushift: <UshiftAnswers />,
    myanswers: <MyAnswers />
  }

  return (
    <>
      <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
        <ScrollView vertical>
          <View style={tw`flex justify-start items-start gap-6 h-full`}>
            <View style={tw`flex justify-start items-start gap-2 bg-white w-full p-4`}>
              <View>
                <Ionicons name="chevron-back" size={24} color={"#141414"} onPress={() => navigation.goBack("Account")} />
              </View>
              <View style={tw`flex flex-row justify-between items-center bg-[#F5F7F9] py-4 px-2 rounded-lg`}>
                <Pressable style={tw`w-[170px] h-[30px] justify-center rounded-lg ${buttonOne ? 'bg-white' : 'bg-[#F5F7F9]'}`} onPress={handleButtonOne}>
                  <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center')}>UShift Answers</Text>
                </Pressable>
                <Pressable style={tw`w-[170px] h-[30px] justify-center rounded-lg ${buttonTwo ? 'bg-white' : 'bg-[#F5F7F9]'}`} onPress={handleButtonTwo}>
                  <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center')}>My Answers</Text>
                </Pressable>
              </View>
            </View>
            <View style={tw`flex justify-center items-start gap-6`}>
              {buttonOne ? data.ushift : data.myanswers}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default File;