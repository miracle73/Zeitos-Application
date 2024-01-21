import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Settings = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw.style({fontFamily: 'DMSans_18pt-Medium.ttf'}, 'text-black text-xl')}>Settings</Text>
    </View>
  )
}

export default Settings;