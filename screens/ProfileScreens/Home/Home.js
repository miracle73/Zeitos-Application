//Libraries
import { View, Text, Image, SafeAreaView, ScrollView, Animated, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import tw from "twrnc";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import RNAnimatedScrollIndicators from 'react-native-animated-scroll-indicators';

//import components
import CustomButton from '../../../components/CustomButton';

const Home = () => {
    scrollX = new Animated.Value(0);
    const { width, height } = Dimensions.get("window");


    const navigation = useNavigation();

    return (
        <>
            <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
                <ScrollView vertical style={tw`pb-80`}>
                    <View style={tw`flex justify-center items-start gap-8 bg-[#f5f7ff] h-full p-4 pb-20`}>
                        <Ionicons name="chevron-back" size={24} color={"#141414"} onPress={() => navigation.navigate("Login")} />
                        <View style={tw`flex flex-row justify-between items-center gap-36`}>
                            <View style={tw`flex justify-start items-start gap-2`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-base text-black')}>UShift</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-xs text-[#8C8CA1]')}>Good morning Rawlings</Text>
                            </View>
                            <View style={tw`flex flex-row justify-end items-end gap-4`}>
                                <Ionicons name="search-outline" size={24} color={"#001c46"} />
                                <Image source={require("../../../assets/avatar.png")} />
                            </View>
                        </View>
                        <View style={tw`flex justify-center items-center gap-4`}>
                            <View style={tw`flex flex-row justify-center items-start gap-6 bg-[#D66B09] rounded-lg p-4`}>
                                <Image source={require("../../../assets/people.png")} />
                                <View style={tw`flex flex-col justify-start items-start gap-2 w-3/5`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-sm text-center text-white')}>Learning Scenarios</Text>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-white text-left')}>
                                        Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in.
                                        Aliquet pharetra Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in.
                                        Aliquet pharetra
                                    </Text>
                                    <CustomButton style={tw`flex flex-row justify-center items-center px-6 py-3 rounded-full bg-white`}>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-sm text-center text-[#001C46]')} onPress={() => navigation.navigate("Scenarios")}>Start Learning</Text>
                                    </CustomButton>
                                </View>
                            </View>
                            <View style={tw`flex flex-row justify-center items-start gap-6 bg-white rounded-lg p-4`}>
                                <Image source={require("../../../assets/home-image2.png")} />
                                <View style={tw`flex flex-col justify-start items-start gap-4 w-3/5`}>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-sm text-left text-black w-[168px]')}>Workshops and Workbooks</Text>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1] text-left w-[196px]')}>
                                        Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in.
                                        Aliquet pharetra Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in.
                                        Aliquet pharetra
                                    </Text>
                                    <CustomButton style={tw`flex flex-row justify-center items-center px-6 py-3 rounded-full bg-[#001C46]`}>
                                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-center text-white')}>View Details</Text>
                                    </CustomButton>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001C46] text-lg p-2')}>Upcoming Workshops:</Text>
                            <Animated.ScrollView
                                horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ flexGrow: 1, gap: 30 }}
                                onScroll={Animated.event(
                                    [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
                                    { useNativeDriver: true })}
                            >
                                <View style={tw`flex justify-start items-start gap-2`}>
                                    <Image source={require("../../../assets/ad1.png")} />
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001C46] text-lg w-[155px]')}>Dev Related Tech Summit</Text>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1] w-[158px]')}>Lorem ipsum dolor sit amet cons Enim rhoncus ultrices</Text>
                                </View>
                                <View style={tw`flex justify-start items-start gap-2`}>
                                    <Image source={require("../../../assets/ad2.png")} />
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001C46] text-lg')}>Business seminar</Text>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1] w-[158px]')}>Lorem ipsum dolor sit amet cons Enim rhoncus ultrices</Text>
                                </View>
                                <View style={tw`flex justify-start items-start gap-2`}>
                                    <Image source={require("../../../assets/ad2.png")} />
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#001C46] text-lg')}>Business seminar</Text>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-[#8C8CA1] w-[158px]')}>Lorem ipsum dolor sit amet cons Enim rhoncus ultrices</Text>
                                </View>
                            </Animated.ScrollView>
                            <View style={{
                                left: 0,
                                right: 0,
                                top: 350,
                                zIndex: 100,
                                marginBottom: 20,
                                position: 'absolute'
                            }}>
                                <RNAnimatedScrollIndicators
                                    numberOfCards={3}
                                    scrollWidth={width}
                                    activeColor={'#001C46'}
                                    inActiveColor={'#8C8CA1'}
                                    scrollAnimatedValue={this.scrollX}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Home;

const styles = StyleSheet.create({})