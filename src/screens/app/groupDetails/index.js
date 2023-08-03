import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { WeekCalendar } from 'react-native-calendars';
import WeekViewCalendar from '../../../customs/WeekViewCalendar';
import { styles } from './style';
import { wp } from '../../../res/constants';
import { images } from '../../../res/images';
import SuperText from '../../../components/SuperText';
import { colors } from '../../../res/colors';
import Spacer from '../../../components/Spacer';
import { groups } from '../../../utils/data';

const GroupDetails = (props) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.tableRow}>
                <SuperText style={{ width: wp(4) }} value="1" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(12), }} value="User 1" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(10) }} value="300" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(10) }} value="4000" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(20) }} value="4000" regular size={wp(3.5)} color={colors.black2} />
            </View>
        )
    }

    return (
        <View>
            <WeekViewCalendar />
            <Spacer space={wp(3)} />
            <View style={styles.container}>
                <View style={[styles.row, { padding: wp(2) },]}>
                    <TouchableOpacity onPress={props.onBack} style={{ padding: wp(2) }}>
                        <Image source={images.left} />
                    </TouchableOpacity>
                    <View>
                        <SuperText value="Fitness Group 1" color={colors.black2} size={wp(4)} semiBold />
                        <SuperText value="5 members" color={colors.gray5} size={wp(3.5)} regular />
                    </View>
                </View>
                <Spacer space={wp(1)} />

                <SuperText value="Pending Requests" semiBold color={colors.black2} size={wp(4)} />
                <Spacer space={wp(2)} />
                <View style={styles.tableHeader}>
                    <SuperText style={{ width: wp(4) }} value="#" regular size={wp(3.5)} color={colors.black2} />
                    <SuperText style={{ width: wp(12), }} value="Name" regular size={wp(3.5)} color={colors.black2} />
                    <SuperText style={{ width: wp(10) }} value="Steps" regular size={wp(3.5)} color={colors.black2} />
                    <SuperText style={{ width: wp(10) }} value="Cal" regular size={wp(3.5)} color={colors.black2} />
                    <SuperText style={{ width: wp(20) }} value="Exercise" regular size={wp(3.5)} color={colors.black2} />
                </View>
                <Spacer space={wp(1)} />
                <FlatList data={groups} keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

export default GroupDetails;