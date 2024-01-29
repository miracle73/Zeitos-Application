import { View, Button } from 'react-native';
import { useRef, useState } from 'react';
import tw from 'twrnc';
import { ResizeMode, Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const VideoOne = () => {

    const video = useRef();
    const [status, setStatus] = useState({});

    const navigation = useNavigation();

    return (
        <View style={tw`flex-1`}>
            <Ionicons name='chevron-back' size={24} color={'#fff'} onPress={() => navigation.goBack()} />
            <Video ref={video} style={tw`flex-1 h-full`} useNativeControls resizeMode={ResizeMode.COVER} source={require('../../../../assets/animation.mp4')} isLooping onPlaybackStatusUpdate={(status) => setStatus(status)} />
            <View>
                <Button
                    title={status.isPlaying ? "Pause" : "Play"}
                    onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}
                    style={tw`flex flex-row justify-center items-center`}
                />
            </View>
        </View>
    )
}

export default VideoOne;