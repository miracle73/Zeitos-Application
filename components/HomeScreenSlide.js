import { View, Text, Animated, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const HomeScreenSlide = () => {

    scrollX = new Animated.Value(0);
    // const { width, height } = Dimensions.get("window");


    // const navigation = useNavigation();
    return (
        <View style={{flex: 1}}>
            <Animated.ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, gap: 30 }}
                onScroll={
                    Animated.event(
                        [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
                        { useNativeDriver: true })}
            >
                <View style={tw`flex justify-start items-start gap-2 rounded-3xl bg-white p-4 h-60`}>
                    <Image source={require('../assets/ad3.png')} style={tw`m-auto rounded-3xl`} />
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001c46] text-lg')}>Motivation doze</Text>
                    <View style={tw`flex flex-row justify-start items-center gap-2`}>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4a4a68] text-sm')}>8 Scenarios</Text>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'bg-[#e9f8ee] text-[#3e8e7b] text-base rounded-lg px-4 py-2')}>Start now</Text>
                    </View>
                </View>
                <View style={tw`flex justify-start items-start gap-2 rounded-3xl bg-white p-4 h-60`}>
                    <Image source={require('../assets/thisman.png')} style={tw`m-auto rounded-3xl`} />
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001c46] text-lg')}>Wealth creation</Text>
                    <View style={tw`flex flex-row justify-start items-center gap-2`}>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4a4a68] text-sm')}>8 Scenarios</Text>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'bg-[#e9f8ee] text-[#3e8e7b] text-base rounded-lg px-4 py-2')}>Start now</Text>
                    </View>
                </View>
            </Animated.ScrollView>
        </View>
    )
}

export default HomeScreenSlide