import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Ionicons } from "@expo/vector-icons";

const Notifications = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Ionicons name="notifications" size={80} color={"#001C46"} />
      <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-xl')}>Notifications</Text>
    </View>
  )
}

export default Notifications