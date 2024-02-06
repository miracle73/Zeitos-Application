import { View, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import CustomInput from '../../../components/CustomInput';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {

    const navigation = useNavigation();
    const [search, setSearch] = useState("");

    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <KeyboardAvoidingView>
                <View style={tw`flex justify-start items-start gap-5 bg-white px-4 py-6`}>
                    <Ionicons name='chevron-back' size={29} color={"#001C46"} onPress={() => navigation.goBack()} />
                    <View style={tw`flex flex-row justify-start items-start gap-12 border-2 border-[#E4E4E4] px-4 py-2 rounded-lg w-full`}>
                        <Ionicons
                            name='search'
                            color={"#E4E4E4"}
                            size={30}
                        />
                        <CustomInput
                            placeholder="Search categories"
                            value={search} type="text"
                            onChangeText={(text) => setSearch(text)}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SearchScreen