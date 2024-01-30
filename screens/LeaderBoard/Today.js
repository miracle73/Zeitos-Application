import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';

const Today = () => {
  return (
    <View style={tw`flex justify-start items-start gap-12 bg-[#001C46]`}>
      <View style={tw`flex flex-row justify-center items-center gap-3 bg-[#193358] rounded-lg p-4`}>
        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-xl text-[#001C46] text-center bg-white rounded-lg p-2')}>#4</Text>
        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-base text-left')}>You are doing better than 96% of the participants! Keep it up</Text>
      </View>

      <View style={tw`flex flex-row justify-center items-center gap-5`}>
        <View style={tw`flex justify-start items-center gap-4`}>
          <Image source={require('../../assets/thirdposition.png')} />
          <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center text-white text-lg bg-[#193358] p-4 rounded-xl')}>@janeisah {"\n"} 1732</Text>
        </View>
        <View style={tw`flex justify-start items-center gap-4`}>
          <Image source={require('../../assets/firstposition.png')} />
          <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center text-white text-lg bg-[#193358] p-4 rounded-xl')}>@Rayola {"\n"} 1840</Text>
        </View>
        <View style={tw`flex justify-start items-center gap-4`}>
          <Image source={require('../../assets/secondposition.png')} />
          <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center text-white text-lg bg-[#193358] p-4 rounded-xl')}>@Rayola {"\n"} 1640</Text>
        </View>
      </View>

      <View style={tw`flex justify-center items-center gap-2`}>
        <View style={tw`flex flex-row justify-start items-center gap-18 bg-[#193358] rounded-xl px-5 py-3 min-w-full`}>
          <View style={tw`flex flex-row justify-start items-start gap-2`}>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-white')}>4</Text>
            <Ionicons name="caret-up-outline" size={24} color={"#009A49"} />
            <Image source={require('../../assets/4th.png')} />
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-lg')}>@JJRawlings</Text>
          </View>
          <View style={tw`flex justify-end items-end ml-auto`}>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-lg text-right')}>1200</Text>
          </View>
        </View>

        <View style={tw`flex flex-row justify-start items-center gap-18 bg-[#193358] rounded-xl px-5 py-3 min-w-full`}>
          <View style={tw`flex flex-row justify-start items-start gap-2`}>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-white')}>5</Text>
            <Ionicons name="caret-down-outline" size={24} color={"#FF3D00"} />
            <Image source={require('../../assets/4th.png')} />
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-lg')}>@Maryam</Text>
          </View>
          <View style={tw`flex justify-end items-end ml-auto`}>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-lg text-right')}>1200</Text>
          </View>
        </View>

        <View style={tw`flex flex-row justify-start items-center gap-18 bg-[#193358] rounded-xl px-5 py-3 min-w-full`}>
          <View style={tw`flex flex-row justify-start items-start gap-2`}>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-white')}>6</Text>
            <Ionicons name="caret-up-outline" size={24} color={"#009A49"} />
            <Image source={require('../../assets/4th.png')} />
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-lg')}>@olumide</Text>
          </View>
          <View style={tw`flex justify-end items-end ml-auto`}>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-lg text-right')}>1200</Text>
          </View>
        </View>

        <View style={tw`flex flex-row justify-start items-center gap-18 bg-[#193358] rounded-xl px-5 py-3 min-w-full`}>
          <View style={tw`flex flex-row justify-start items-start gap-2`}>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-white')}>7</Text>
            <Ionicons name="caret-up-outline" size={24} color={"#009A49"} />
            <Image source={require('../../assets/4th.png')} />
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-lg')}>@Aisha</Text>
          </View>
          <View style={tw`flex justify-end items-end ml-auto`}>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-lg text-right')}>1200</Text>
          </View>
        </View>

        <View style={tw`flex flex-row justify-start items-center gap-18 bg-[#193358] rounded-xl px-5 py-3 min-w-full`}>
          <View style={tw`flex flex-row justify-start items-start gap-2`}>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-white')}>8</Text>
            <Ionicons name="caret-up-outline" size={24} color={"#009A49"} />
            <Image source={require('../../assets/4th.png')} />
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-lg')}>@Blessings</Text>
          </View>
          <View style={tw`flex justify-end items-end ml-auto`}>
            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-lg text-right')}>1200</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

export default Today;