import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ScenarioCategories = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
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
            </View>
        </SafeAreaView>
    )
}

export default ScenarioCategories