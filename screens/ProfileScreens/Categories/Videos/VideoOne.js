import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { ResizeMode, Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';

const VideoOne = () => {

    //ref for video
    const videos = useRef(null);
    const [status, setStatus] = useState({});

    const isPlaying = status?.isLoaded && status.isPlaying;

    const onPress = () => {
        if (!videos.current) {
            return;
        }
        if (isPlaying) {
            videos.current.pauseAsync();
        } else {
            videos.current.playAsync();
        }
    }

    const navigation = useNavigation(); //handle navigation 

    //handle videos data
    const post =
        { id: '1', video: require('../../../../assets/animation.mp4'), caption: 'Motvation Doze', scenarios: '1 of 4' }
    // { id: '2', video: require("../../../../assets/animation.mp4"), caption: 'Motivation Doze', scenarios: '2/4' },
    // { id: '3', video: require("../../../../assets/animation.mp4"), caption: 'Motivation Doze', scenarios: '3/4' },
    // { id: '4', video: require("../../../../assets/animation.mp4"), caption: 'Motivation Doze', scenarios: '4/4' }


    return (
        <>
            <StatusBar hidden />
            <View style={tw`flex-1`}>
                <Video
                    ref={videos}
                    style={[StyleSheet.absoluteFill]}
                    resizeMode={ResizeMode.COVER}
                    source={post.video}
                    isLooping
                    useNativeControls
                    onPlaybackStatusUpdate={setStatus}
                />
                <View style={tw`flex justify-start items-start p-8 absolute top-2`}>
                    <Ionicons
                        name='chevron-back'
                        size={24} color={"#001c46"}
                        style={tw`justify-center bg-white rounded-full p-2`}
                        onPress={() => navigation.goBack()}
                    />
                </View>

                <Pressable onPress={onPress} style={tw`flex-1 p-5`}>
                    <SafeAreaView style={tw`flex-1`}>
                        <View style={tw`flex justify-end items-center gap-5 bg-gray-400/50 rounded-full w-12 h-36 ml-auto mt-auto`}>
                            <Text style={[styles.transformer, tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-white')]}>Scroll</Text>
                            <Text style={[styles.transformer, tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-white')]}>down</Text>
                            <Ionicons name='chevron-down' size={24} color={"#fff"} />
                        </View>
                        <View style={tw`mt-auto flex flex-row justify-around items-center gap-8`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-white')}>{post.caption}</Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-white')}>{post.scenarios}</Text>
                        </View>
                    </SafeAreaView>
                </Pressable>
            </View>
        </>
    )
}

export default VideoOne;

const styles = StyleSheet.create({
    transformer: {
        transform: [{ rotate: '90deg' }]
    }
})