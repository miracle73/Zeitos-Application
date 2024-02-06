import { View, Text, StyleSheet, Pressable, SafeAreaView, useWindowDimensions } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { ResizeMode, Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';

const VideoPost = ({ post }) => {

    //video slide
    const { height } = useWindowDimensions();

    //ref for video
    const videos = useRef(null);
    const [status, setStatus] = useState({});

    const isPlaying = status?.isLoaded && status.isPlaying;

    const handleVideo = () => {
        if (!videos.current) {
            return;
        }
        if (isPlaying) {
            videos.current.pauseAsync();
        } else {
            videos.current.playAsync();
        }
    }

    //handle navigation
    const navigation = useNavigation();

    return (
        <>
            <View style={[styles.container, { height }]}>
                <Video
                    ref={videos}
                    style={[StyleSheet.absoluteFill]}
                    resizeMode={ResizeMode.COVER}
                    source={post.video}
                    isLooping
                    useNativeControls
                    onPlaybackStatusUpdate={setStatus}
                />
                <View style={tw`flex justify-start items-start p-8`}>
                    <Ionicons
                        name='chevron-back'
                        size={24}
                        color={"#001c46"}
                        style={tw`justify-center bg-white rounded-full p-2`}
                        onPress={() => navigation.goBack()}
                    />
                </View>

                <Pressable onPress={() => handleVideo()} style={tw`flex-1 p-12`}>
                    {!isPlaying &&
                        <Ionicons
                            name='play'
                            size={30}
                            color={"#001C46"}
                            style={tw`absolute top-[40%] self-center bg-white rounded-full p-4`}
                        />
                    }
                    <SafeAreaView style={tw`flex-1`}>
                        <View style={tw`flex justify-end items-center gap-5 bg-gray-400/65 rounded-full w-12 h-36 ml-auto mt-80`}>
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

export default VideoPost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    transformer: {
        transform: [{ rotate: '90deg' }]
    }
})