import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const CategoryOne = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
      <ScrollView vertical pagingEnabled>
        <View style={tw`flex justify-start items-start gap-4 bg-[#F5F7FF] min-h-full`}>
          <View style={tw`flex justify-start items-start gap-4 bg-white w-full p-4`}>
            <View>
              <Ionicons name="chevron-back-outline" size={24} color={"#141414"} onPress={() => navigation.goBack()} />
            </View>
            <View style={tw`flex justify-start items-start gap-2`}>
              <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-3xl text-[#141414]')}>Motivation doze</Text>
              <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#4A4A68]')}>Read scenario and provide responses in the fields below</Text>
            </View>
          </View>
          <View style={tw`flex justify-start items-start gap-4 p-4`}>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#141414] text-base')}>
              Scenarios
            </Text>
            <View style={tw`flex flex-col justify-center items-start gap-2 bg-white p-8 rounded-lg`}>
              <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-base')}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-[#4A4A68] text-base')}>1.</Text>
                A co-worker starts spreading rumours about another team member,
                negatively impacting the work environment.
                How would you handle this situation professionally?
              </Text>
              <View style={tw`flex flex-row justify-between items-center gap-32`}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4A4A68] text-base')}>3 - Questions</Text>
                <Text
                  style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'bg-[#e9f8ee] text-[#3e8e7b] text-base rounded-lg px-2 py-2')}
                  onPress={() => navigation.navigate('Scenario One')}>
                  Start now
                </Text>
              </View>
            </View>
            <View style={tw`flex flex-col justify-center items-start gap-2 bg-white p-8 rounded-lg`}>
              <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-base')}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-[#4A4A68] text-base')}>2.</Text>
                A co-worker starts spreading rumours about another team member,
                negatively impacting the work environment.
                How would you handle this situation professionally?
              </Text>
              <View style={tw`flex flex-row justify-between items-center gap-32`}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4A4A68] text-base')}>3 - Questions</Text>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'bg-[#e9f8ee] text-[#3e8e7b] text-base rounded-lg px-2 py-2')} onPress={() => navigation.navigate('Scenario Two')}>Start now</Text>
              </View>
            </View>
            <View style={tw`flex flex-row justify-center items-start gap-4 bg-white p-8 rounded-lg min-w-full`}>

              <Image source={require("../../../../assets/ad1.png")} style={tw`w-28 rounded-xl`} />

              <View style={tw`flex justify-start items-start gap-2`}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-[#141414] text-base')}>Video scenario</Text>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-base w-52')}>
                  <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-[#4A4A68] text-base')}>3.</Text>
                  A co-worker starts spreading rumours about another team member, negatively.
                </Text>
                <View style={tw`flex flex-row justify-between items-center gap-8`}>
                  <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4A4A68] text-base')}>4 - Videos</Text>
                  <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'bg-[#e9f8ee] text-[#3e8e7b] text-base rounded-lg px-2 py-2')}>Start now</Text>
                </View>
              </View>
            </View>
            <View style={tw`flex flex-col justify-center items-start gap-2 bg-white p-8 rounded-lg`}>
              <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-base')}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-[#4A4A68] text-base')}>4.</Text>
                A co-worker starts spreading rumours about another team member,
                negatively impacting the work environment.
                How would you handle this situation professionally?
              </Text>
              <View style={tw`flex flex-row justify-between items-center gap-32`}>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4A4A68] text-base')}>3 - Questions</Text>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'bg-[#e9f8ee] text-[#3e8e7b] text-base rounded-lg px-2 py-2')}>Start now</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CategoryOne