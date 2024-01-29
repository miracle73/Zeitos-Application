import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';


const ScenarioCategories = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <ScrollView vertical>
                <View style={tw`flex justify-start items-start gap-4 bg-[#F5F7FF] min-h-full`}>
                    <View style={tw`flex justify-start items-start gap-5 bg-white p-4 w-full`}>
                        <View style={tw`flex flex-row justify-between items-center gap-16 min-w-full`}>
                            <Ionicons name='chevron-back' size={24} color={"#141414"} onPress={() => navigation.goBack()} />
                            <Ionicons name='search' size={24} color={"#141414"} style={tw`bg-[#F5F7FF] justify-center items-center rounded-full p-2`} />
                        </View>
                        <View style={tw`flex justify-start items-start gap-3`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-3xl text-[#141414]')}>Scenarios Categories</Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-[#4a4a68]')}>
                                Here we have 32 scenarios categorized in the cards displayed
                                below for you select from
                            </Text>
                        </View>
                    </View>
                    <View style={tw`p-4 flex justify-center items-center gap-8 min-w-full`}>
                        <View style={tw`flex flex-row justify-center items-center gap-3`}>
                            <TouchableOpacity onPress={() => navigation.navigate('Category One')} style={tw`flex justify-start items-start gap-2 rounded-3xl bg-white p-4 h-60`}>
                                <Image source={require('../../../assets/ad3.png')} style={tw`m-auto rounded-3xl`} />
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001c46] text-lg')}>Motivation doze</Text>
                                <View style={tw`flex flex-row justify-start items-center gap-2`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4a4a68] text-sm')}>4/8</Text>
                                    <Progress.Bar progress={0.4} width={100} color='#3e8e7b' borderColor='#e9f8ee' borderWidth={1} style={tw`bg-[#e9f8ee] rounded-lg p-2)`} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Category One')} style={tw`flex justify-start items-start gap-2 rounded-3xl bg-white p-4 h-60`}>
                                <Image source={require('../../../assets/redImage.png')} style={tw`m-auto rounded-3xl`} />
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001c46] text-lg')}>Motivation doze</Text>
                                <View style={tw`flex flex-row justify-start items-center gap-2`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4a4a68] text-sm')}>5/9</Text>
                                    <Progress.Bar progress={0.5} width={100} color='#3e8e7b' borderColor='#e9f8ee' borderWidth={1} style={tw`bg-[#e9f8ee] rounded-lg p-2)`} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={tw`flex flex-row justify-center items-center gap-3`}>
                            <TouchableOpacity onPress={() => navigation.navigate('Category One')} style={tw`flex justify-start items-start gap-2 rounded-3xl bg-white p-4 h-60 w-48`}>
                                <Image source={require('../../../assets/ad4.png')} style={tw`m-auto rounded-3xl`} />
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001c46] text-lg')}>Aim to get</Text>
                                <View style={tw`flex flex-row justify-start items-center gap-2`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4a4a68] text-sm')}>8 Scenarios</Text>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'bg-[#e9f8ee] text-[#3e8e7b] text-base rounded-lg px-2')}>Start now</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Category One')} style={tw`flex justify-start items-start gap-2 rounded-3xl bg-white p-4 h-60`}>
                                <Image source={require('../../../assets/ad5.png')} style={tw`m-auto rounded-3xl`} />
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001c46] text-lg')}>Idea hub</Text>
                                <View style={tw`flex flex-row justify-start items-center gap-2`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4a4a68] text-sm')}>4/8</Text>
                                    <Progress.Bar progress={0.4} width={100} color='#3e8e7b' borderColor='#e9f8ee' borderWidth={1} style={tw`bg-[#e9f8ee] rounded-lg p-2)`} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={tw`flex flex-row justify-center items-center gap-3`}>
                            <TouchableOpacity onPress={() => navigation.navigate('Category One')} style={tw`flex justify-start items-start gap-2 rounded-3xl bg-white p-4 h-60`}>
                                <Image source={require('../../../assets/ad3.png')} style={tw`m-auto rounded-3xl`} />
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001c46] text-lg')}>Motivation doze</Text>
                                <View style={tw`flex flex-row justify-start items-center gap-2`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4a4a68] text-sm')}>6/8</Text>
                                    <Progress.Bar progress={0.6} width={100} color='#3e8e7b' borderColor='#e9f8ee' borderWidth={1} style={tw`bg-[#e9f8ee] rounded-lg p-2)`} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex justify-start items-start gap-2 rounded-3xl bg-white p-4 h-60`}>
                                <Image source={require('../../../assets/ad6.png')} style={tw`m-auto rounded-3xl`} />
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001c46] text-lg')}>Motivation doze</Text>
                                <View style={tw`flex flex-row justify-start items-center gap-2`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4a4a68] text-sm')}>2/8</Text>
                                    <Progress.Bar progress={0.2} width={100} color='#3e8e7b' borderColor='#e9f8ee' borderWidth={1} style={tw`bg-[#e9f8ee] rounded-lg p-2)`} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ScenarioCategories