import React from 'react'
import { FlatList, ImageBackground, SafeAreaView, StatusBar, Text, View, Dimensions, StyleSheet } from 'react-native';
import tw from 'twrnc';
// import { useNavigate } from "@react-navigation/native";

import CustomButton from '../../components/CustomButton';


const { width, height } = Dimensions.get('window');

const slides = [
    {
        id: '1',
        image: require('../../assets/first-image.png'),
        title: "Welcome to Unshift",
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in. Aliquet pharetra volutpat mi egestas',
    },
    {
        id: '2',
        image: require('../../assets/second-image.png'),
        title: "Welcome to Unshift",
        subtitle: 'Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in. Aliquet pharetra volutpat mi egestas',
    },
    // {
    //     id: '3',
    //     image: require('../../assets/second-image.png'),
    //     title: "Welcome to Unshift",
    //     subtitle: 'Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in. Aliquet pharetra volutpat mi egestas',
    // },
];



const OnBoarding = ({navigation}) => {

    // const navigation = useNavigate();

    const [currentSlide, setCurrentSlide] = React.useState(0)
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlide(currentIndex);
    };

    const Slide = ({ item }) => {
        return (
            <ImageBackground source={item.image} style={{ width, resizeMode: 'cover', flex: 1, justifyContent: "space-between" }} blurRadius={2}>
                <View style={{
                    height: height * 0.18,
                    width: 'auto',
                    justifyContent: 'space-evenly',
                    paddingHorizontal: 20,
                    paddingVertical: 40,
                    flexDirection: "row"
                }}>{slides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            { flexDirection: 'row' },
                            currentSlide == index && {
                                backgroundColor: "orange",
                                width: 105,
                            },
                        ]}
                    />
                ))}</View>
                <View style={tw`flex justify-center items-center gap-8 mb-12`}>
                    <View style={tw`flex justify-start items-start gap-2`}>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-white text-3xl')}>Welcome to Ushift</Text>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-base w-[311px]')}>Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in. Aliquet pharetra volutpat mi egestas</Text>
                    </View>

                    <View style={tw`flex flex-col justify-center items-center gap-4`}>
                        <CustomButton style={tw`flex flex-row justify-center items-center bg-white w-[342px] py-5 rounded-lg`} onPress={() => navigation.navigate("Login")}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#141414] text-base text-center')}>Login</Text>
                        </CustomButton>
                        <CustomButton style={tw`flex flex-row justify-center items-center bg-[#d66b09] w-[342px] py-5 rounded-lg`} onPress={() => navigation.navigate("Create Account")}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-white text-base text-center')}>Create an Account</Text>
                        </CustomButton>
                    </View>
                </View>
            </ImageBackground>
        )
    }
    return (
        <SafeAreaView style={tw`flex-1`}>
            <StatusBar />
            <FlatList
                onMomentumScrollEnd={updateCurrentSlideIndex}
                showsHorizontalScrollIndicator={false}
                horizontal
                pagingEnabled
                data={slides}
                renderItem={({ item }) => <Slide item={item} />}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    indicator: {
        height: 5,
        width: 100,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2,
    },
})
export default OnBoarding;