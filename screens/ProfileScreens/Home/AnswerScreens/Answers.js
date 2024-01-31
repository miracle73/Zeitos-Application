import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import tw from 'twrnc';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants"
import UshiftAnswers from './UshiftAnswers';
import MyAnswers from './MyAnwers';

const Answers = () => {

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
          <View style={tw`flex justify-start items-start gap-6 bg-[#F5F7F9] h-full`}>
            <View style={tw`flex justify-start items-start gap-2 bg-white w-full p-4`}>
              <View>
                <Ionicons name="chevron-back" size={24} color={"#141414"} onPress={() => navigation.goBack("Scores")} />
              </View>
              <View style={tw`flex flex-row justify-between items-center bg-[#F5F7F9] h-[49px] rounded-lg m-auto p-2`}>
                <Pressable style={tw`w-[170px] h-[30px] justify-center rounded-lg ${buttonOne ? 'bg-white' : 'bg-[#F5F7F9]'}`} onPress={handleButtonOne}>
                  <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center')}>UShift Answers</Text>
                </Pressable>
                <Pressable style={tw`w-[170px] h-[30px] justify-center rounded-lg ${buttonTwo ? 'bg-white' : 'bg-[#F5F7F9]'}`} onPress={handleButtonTwo}>
                  <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center')}>My Answers</Text>
                </Pressable>
              </View>
            </View>
            <View style={tw`flex justify-start items-start gap-6 p-2`}>
              {buttonOne ? data.ushift : data.myanswers}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Answers;