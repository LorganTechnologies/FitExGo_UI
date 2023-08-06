import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { images } from '../../../res/images';
import SuperText from '../../../components/SuperText';
import { colors } from '../../../res/colors';
import { hp, wp } from '../../../res/constants';
import Spacer from '../../../components/Spacer';
import * as Progress from 'react-native-progress';
import Groups from '../groups';
import EditGroup from '../editGroup';
import WeekViewCalendar from '../../../customs/WeekViewCalendar';
import GroupDetails from '../groupDetails';
import { fonts } from '../../../res/fonts';

const Dashboard = (props: any) => {

    const [activeTab, setActiveTab] = useState(0);
    const [activeGroupPage, setActiveGroupPage] = useState(0);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: wp(4) }} showsVerticalScrollIndicator={false}>
                <View style={styles.row}>
                    <Image source={images.profile} style={styles.profile} />
                    <View style={{ width: wp(50) }}>
                        <SuperText value="Hello Linh!" color={colors.gray} size={wp(4.5)} regular />
                        <SuperText value="Thursday, 08 July" color={colors.black} size={wp(4.5)} regular />
                    </View>
                    <TouchableOpacity>
                        <Image source={images.setting} />
                    </TouchableOpacity>
                </View>
                <Spacer space={wp(3)} />
                <View style={styles.pointsWrapper}>
                    <Progress.Circle showsText textStyle={{ fontFamily: fonts.Medium, color: colors.black2 }} borderWidth={0} unfilledColor={colors.gray4} color={colors.primary} thickness={wp(2)} progress={0.8} size={wp(18)} />
                    <View style={{ width: wp(50) }}>
                        <SuperText value="Health Points" color={colors.black2} size={wp(4.5)} medium />
                        <SuperText value="Awesome Result Keep Going to be a great fitness holder" olor={colors.gray5} size={wp(3.5)} regular />
                    </View>
                    <Image source={images.reward} style={styles.reward} />
                </View>
                <Spacer space={wp(2)} />
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => { setActiveTab(0) }} style={[styles.switchWrapper, activeTab !== 0 && { backgroundColor: colors.gray3 }]}>
                        <SuperText value="Self" medium color={activeTab == 0 ? colors.white : colors.black2} size={wp(4)} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setActiveTab(1) }} style={[styles.switchWrapper, activeTab !== 1 && { backgroundColor: colors.gray3 }]}>
                        <SuperText value="Groups" medium color={activeTab == 1 ? colors.white : colors.black2} size={wp(4)} />
                    </TouchableOpacity>
                </View>
                <Spacer space={wp(2)} />
                {activeTab == 0 ?
                    <>
                        <WeekViewCalendar />
                        <Spacer space={wp(2)} />
                        <SuperText value="Let's Check Your Activity" semiBold color={colors.black2} size={wp(4.5)} />
                        <Spacer space={wp(2)} />
                        <View style={styles.goalWrapper}>
                            <Image source={images.goals} style={styles.goals} />
                            <Spacer row={wp(2)} />
                            <SuperText value="Goals Achieved " regular color={colors.black2} size={wp(4)} />
                            <SuperText value="2/6" semiBold color={colors.black2} size={wp(4)} />
                        </View>
                        <Spacer space={wp(2)} />
                        <View style={styles.row}>
                            <View style={styles.goalItems}>
                                <View style={[styles.row, { justifyContent: 'flex-start', }]}>
                                    <Image source={images.icSteps} />
                                    <Spacer row={wp(1)} />
                                    <SuperText value="Steps" medium color={colors.black2} size={wp(4)} />
                                </View>
                                <Spacer space={wp(1.5)} />
                                <View style={styles.row}>
                                    <SuperText value="2000/2000" semiBold color={colors.black2} size={wp(3.6)} />
                                    <Image source={images.checkCircle} />
                                </View>
                                <Spacer space={wp(1)} />
                                <Progress.Bar borderRadius={wp(8)} color={colors.primary} borderWidth={0} unfilledColor={colors.gray4} progress={0.3} height={wp(2.5)} width={wp(35)} />
                            </View>

                            <View style={styles.goalItems}>
                                <View style={[styles.row, { justifyContent: 'flex-start', }]}>
                                    <Image source={images.icCalories} />
                                    <Spacer row={wp(1)} />
                                    <SuperText value="Calories" medium color={colors.black2} size={wp(4)} />
                                </View>
                                <Spacer space={wp(1.5)} />
                                <View style={styles.row}>
                                    <SuperText value="400 kcal" semiBold color={colors.black2} size={wp(3.6)} />
                                    <Image source={images.checkCircle} />
                                </View>
                                <Spacer space={wp(1)} />
                                <Progress.Bar borderRadius={wp(8)} color={colors.primary} borderWidth={0} unfilledColor={colors.gray4} progress={0.3} height={wp(2.5)} width={wp(35)} />
                            </View>
                        </View>
                        <Spacer space={wp(2)} />
                        <View style={styles.row}>
                            <View style={styles.goalItems}>
                                <View style={[styles.row, { justifyContent: 'flex-start', }]}>
                                    <Image source={images.icDistance} />
                                    <Spacer row={wp(1)} />
                                    <SuperText value="Distance" medium color={colors.black2} size={wp(4)} />
                                </View>
                                <Spacer space={wp(1.5)} />
                                <View style={styles.row}>
                                    <SuperText value="1 Place" semiBold color={colors.gray} size={wp(3.6)} />
                                    <Image source={images.checkCircle} />
                                </View>
                                <Spacer space={wp(1)} />
                                <Progress.Bar borderRadius={wp(8)} color={colors.primary} borderWidth={0} unfilledColor={colors.gray4} progress={0.3} height={wp(2.5)} width={wp(35)} />
                            </View>

                            <View style={styles.goalItems}>
                                <View style={[styles.row, { justifyContent: 'flex-start', }]}>
                                    <Image source={images.icStand} />
                                    <Spacer row={wp(1)} />
                                    <SuperText value="Stand" medium color={colors.black2} size={wp(4)} />
                                </View>
                                <Spacer space={wp(1.5)} />
                                <View style={[styles.row, { justifyContent: 'flex-start', }]}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                        <Progress.Circle borderWidth={0} unfilledColor={colors.gray4} color={colors.primary} thickness={wp(0.8)} progress={0.8} size={wp(9)} />
                                        <Image source={images.up} style={{ position: 'absolute' }} />
                                    </View>
                                    <Spacer row={wp(1)} />
                                    <SuperText value="2/10 Hrs" semiBold color={colors.gray} size={wp(3.6)} />
                                </View>
                            </View>
                        </View>
                        <Spacer space={wp(2)} />
                        <View style={styles.row}>
                            <View style={styles.goalItems}>
                                <View style={[styles.row, { justifyContent: 'flex-start', }]}>
                                    <Image source={images.icExercise} />
                                    <Spacer row={wp(1)} />
                                    <SuperText value="Exercise" medium color={colors.black2} size={wp(4)} />
                                </View>
                                <Spacer space={wp(1.5)} />
                                <View style={[styles.row, { justifyContent: 'flex-start', }]}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                        <Progress.Circle borderWidth={0} unfilledColor={colors.gray4} color={colors.primary} thickness={wp(0.8)} progress={0.8} size={wp(9)} />
                                        <Image source={images.forward} style={{ position: 'absolute' }} />
                                    </View>
                                    <Spacer row={wp(1)} />
                                    <SuperText value="4/20 Min" semiBold color={colors.gray} size={wp(3.6)} />
                                </View>
                            </View>

                            <ImageBackground resizeMode='contain' source={images.chart} style={styles.goalItems} borderRadius={wp(2)}>
                                <View style={[styles.row, { justifyContent: 'flex-start', }]}>
                                    <Image source={images.icHeart} />
                                    <Spacer row={wp(1)} />
                                    <SuperText value="Heart Rate" medium color={colors.black2} size={wp(4)} />
                                </View>
                                <Spacer space={wp(1.5)} />
                                <View style={{ bottom: wp(2), left: wp(2), position: 'absolute', }}>
                                    <SuperText value="74" semiBold color={colors.black2} size={wp(3.6)} />
                                    <SuperText value="bpm" semiBold color={colors.black2} size={wp(3.6)} />
                                </View>
                            </ImageBackground>
                        </View>
                    </>
                    :
                    activeGroupPage == 0 ?
                        <Groups onDetail={() => { setActiveGroupPage(1) }} onEdit={() => { setActiveGroupPage(2) }} props={props} />
                        :
                        activeGroupPage == 1 ?
                            <GroupDetails onBack={() => { setActiveGroupPage(0); }} />
                            :
                            <EditGroup onBack={() => { setActiveGroupPage(0); }} />
                }
                <Spacer space={hp(2)} />
            </ScrollView>
        </SafeAreaView >
    )
}

export default Dashboard;