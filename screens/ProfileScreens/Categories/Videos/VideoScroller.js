import { FlatList, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import tw from 'twrnc';
import VideoPost from './VideoPost';

const posts = [
    {
        id: '1',
        video: require("../../../../assets/animation.mp4"),
        caption: 'Motivation Doze',
        scenarios: '1 of 4'
    },
    {
        id: '2',
        video: require("../../../../assets/animation.mp4"),
        caption: 'Motivation Doze',
        scenarios: '2 of 4'
    },
    {
        id: '3',
        video: require("../../../../assets/animation.mp4"),
        caption: 'Motivation Doze',
        scenarios: '3 of 4'
    },
    {
        id: '4',
        video: require("../../../../assets/animation.mp4"),
        caption: 'Motivation Doze',
        scenarios: '4 of 4'
    },
]

const VideoScroller = () => {
    return (
        <View style={tw`flex-1`}>
            <StatusBar hidden />
            <FlatList
                data={posts}
                renderItem={({ item }) => <VideoPost post={item} />}
                pagingEnabled
            />
        </View>
    )
}

export default VideoScroller;