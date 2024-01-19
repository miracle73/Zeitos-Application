import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native';
import tw from 'twrnc';
import Svg, { Path } from 'react-native-svg';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants"
// import {  } from 'react-native-safe-area-context';

const UshiftAnswers = () => {

    const navigation = useNavigation();

    return (
        <>
            <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
                <ScrollView vertical>
                    <View style={tw`flex justify-center items-start gap-6 h-full`}>
                        <View>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#141414] text-3xl')}>Answered Scenario</Text>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-[#4A4A68] text-sm')}>Read answers below</Text>
                        </View>
                        <View style={tw`flex justify-center items-start bg-white gap-12 rounded-lg h-[230px] w-[358px] py-12 px-1.5 m-auto`}>
                            <View>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-white rounded-lg bg-[#141414] text-center px-4 absolute top-[6px] left-[10px]')}>1</Text>
                                <View style={tw`absolute top-[2px] left-[5px]`}>
                                    <Svg xmlns="http://www.w3.org/2000/svg" width="344" height="114" viewBox="0 0 334 114" fill="none">
                                        <Path d="M334 102C334 108.627 328.627 114 322 114H12C5.37259 114 0 108.627 0 102V81.3495V46.8641C0 40.2366 5.37259 34.8641 12 34.8641H32.9715C39.1022 34.8641 44.247 30.2429 44.9027 24.1474L46.3473 10.7167C47.003 4.62115 52.1478 0 58.2785 0H322C328.627 0 334 5.37258 334 12V102Z" fill="#141414" />
                                        <View style={tw`flex flex-col justify-center items-center p-4`}>
                                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'pl-8 text-sm text-white')}>A co-worker starts spreading rumors</Text>
                                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-sm text-white')}>
                                                about another team member, negatively impacting the work environment.
                                                How would you handle this situation professionally?
                                            </Text>
                                        </View>
                                    </Svg>
                                </View>
                            </View>
                            <View style={tw`mt-18 flex justify-center items-start pb-4`}>
                                <View style={tw`flex flex-row justify-center items-start gap-2`}>
                                    <Text style={tw`text-[#141414] text-3xl`}>.</Text>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-sm pt-4')}>Who are the role players involved?</Text>
                                </View>
                                <View style={tw`flex flex-row justify-center items-start gap-2`}>
                                    <Text style={tw`text-[#141414] text-3xl`}>.</Text>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-sm pt-4')}>What professionalism tips is/are required?</Text>
                                </View>
                                <View style={tw`flex flex-row justify-center items-start gap-2`}>
                                    <Text style={tw`text-[#141414] text-3xl`}>.</Text>
                                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-sm pt-4')}>How would you resolve the situation?</Text>
                                </View>
                            </View>
                        </View>
                        <View style={tw`flex flex-row justify-center items-center`}>
                            <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-left text-[#4A4A68] text-base')}>
                                Handling a situation where a co-worker is spreading rumors requires
                                a professional approach to address the
                                issue while maintaining a respectful work environment.
                                Here are some steps you can take:
                            </Text>
                        </View>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-left text-lg text-[#141414]')}>Solutions</Text>
                        <View style={tw`flex flex-col justify-center items-center gap-2`}>
                            <View style={tw`flex flex-col justify-center items-start gap-2 bg-white p-8 rounded-lg`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-lg')}>1. Gather Information</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-base')}>
                                    Before taking any action, gather all the facts and make sure you have a clear understanding of the situation.
                                    It's crucial to have accurate information before proceeding.
                                </Text>
                            </View>
                            <View style={tw`flex flex-col justify-center items-start gap-2 bg-white p-8 rounded-lg`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-lg')}>2. Remain discreet</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-base')}>
                                    Avoid engaging in or spreading rumors yourself. Maintain confidentiality and speak only to the
                                    necessary parties involved or those who can address the situation appropriately.
                                </Text>
                            </View>
                            <View style={tw`flex flex-col justify-center items-start gap-2 bg-white p-8 rounded-lg`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-lg')}>3. Address the co-worker privately</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-base')}>
                                    Take the co-worker aside in a private setting to discuss your concerns. Remain calm and non-confrontational.
                                    Present the information you have uncovered and express how their actions are negatively affecting the work environment and team morale.
                                    Encourage open dialogue and give the co-worker an opportunity to explain their actions or perspective.
                                </Text>
                            </View>
                            <View style={tw`flex flex-col justify-center items-start gap-2 bg-white p-8 rounded-lg`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-lg')}>4. Involve relevant parties</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-base')}>
                                    If the issue persists or the rumors continue to cause harm, it may be necessary to involve a supervisor, manager,
                                    or HR representative. Discuss the situation, provide any relevant evidence, and seek guidance on how to handle the matter further.
                                    Follow the proper channels within your organization for reporting such issues including capturing in your incident system.
                                </Text>
                            </View>
                            <View style={tw`flex flex-col justify-center items-start gap-2 bg-white p-8 rounded-lg`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-lg')}>5. Support the affected colleague</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-base')}>
                                    Reach out to the team member who has been impacted by the rumors. Offer a listening ear, show empathy, and extend support.
                                    It's important to create a safe and supportive environment for them.
                                </Text>
                            </View>
                            <View style={tw`flex flex-col justify-center items-start gap-2 bg-white p-8 rounded-lg`}>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-black text-lg')}>6. Focus on positive communication</Text>
                                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-[#4A4A68] text-base')}>
                                    Encourage open communication, empathy, and personal responsibility within the team.
                                    Emphasize the importance of maintaining a respectful work environment and the negative consequences that can arise as a result of spreading rumors.
                                    Foster a culture of trust and shared responsibility.
                                </Text>
                            </View>
                        </View>
                        <Text style={tw.style({ fontFamily: 'DMSans_18pt-Light.ttf' }, 'text-left text-[#4A4A68] text-base')}>
                            Remember, handling a sensitive situation like this requires confidentiality,
                            professionalism, and a commitment to resolving the issue in a fair and considerate manner.
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default UshiftAnswers;