import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, SafeAreaView, ScrollView, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

import Today from './Today';
import Weekly from './Weekly';
import Monthly from './Monthly';
// import { Ionicons } from "@expo/vector-icons";

const LeaderBoard = () => {

  const navigation = useNavigation();

  //handle switch tabs
  const [buttonOne, setButtonOne] = useState(true);
  const [buttonTwo, setButtonTwo] = useState(false);
  const [buttonThree, setButtonThree] = useState(false);

  const handleButtonOne = () => {
    setButtonTwo(false);
    setButtonOne(true);
    setButtonThree(false);
  }

  const handleButtonTwo = () => {
    setButtonTwo(true);
    setButtonOne(false);
    setButtonThree(false);
  }

  const handleButtonThree = () => {
    setButtonThree(true);
    setButtonOne(false);
    setButtonTwo(false);
  }

  useEffect(() => {
    handleButtonOne();
  }, []);

  const data = {
    today: <Today />,
    week: <Weekly />,
    month: <Monthly />
  }

  return (
    <>
      <StatusBar style={'light'} backgroundColor="#001C46" barStyle={'light-content'} />
      <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
        <ScrollView vertical>
          <View style={tw`flex justify-start items-start gap-12 bg-[#001C46] min-h-full px-4 pt-9 pb-24`}>
            <View style={tw`flex flex-row justify-start items-start gap-32`}>
              <Text style={tw.style({ fontFamily: 'WixFont' }, 'text-white text-3xl')}>Leader board</Text>
              <Image source={require('../../assets/funnel.png')} />
            </View>
            <View style={tw`flex flex-row justify-between items-center bg-[#193358] h-[49px] rounded-lg m-auto p-2 w-full`}>
              <Pressable style={tw`px-6 h-[30px] justify-center rounded-lg ${buttonTwo ? 'text-[#001C46]' : 'bg-white text-[#001c46]'}`} onPress={handleButtonOne}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, `${buttonTwo ? 'text-center text-white' : 'text-center text-[#001c46]'}`)}>Today</Text>
              </Pressable>
              <View style={tw`bg-white w-[0.94px] h-[16px]`}></View>
              <Pressable style={tw`px-6 h-[30px] justify-center rounded-lg ${buttonOne ? 'text-white' : 'bg-white text-[#001c46]'}`} onPress={handleButtonTwo}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, `${buttonOne ? 'text-center text-white' : 'text-center text-[#001c46]'}`)}>This Week</Text>
              </Pressable>
              <View style={tw`bg-white w-[0.94px] h-[16px]`}></View>
              <Pressable style={tw`px-6 h-[30px] justify-center rounded-lg`}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-center')}>This Month</Text>
              </Pressable>
            </View>
            <View style={tw`flex justify-start items-start gap-6 p-2`}>
              {buttonOne ? data.today : (data.today ? data.week : data.month)}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default LeaderBoard;