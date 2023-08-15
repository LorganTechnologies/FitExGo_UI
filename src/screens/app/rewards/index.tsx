import { View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { hp, wp } from '../../../res/constants'
import Spacer from '../../../components/Spacer'
import SuperText from '../../../components/SuperText'
import { images } from '../../../res/images'
import { colors } from '../../../res/colors'
import { styles } from './style'
import WeekViewCalendar from '../../../customs/WeekViewCalendar'
import Button from '../../../components/Button'
import { groups, points } from '../../../utils/data'

const Rewards = (props: any) => {

    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.tableRow}>
                <SuperText style={{ width: wp(4) }} value="1" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(15), }} value="User 1" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(12) }} value="300" regular size={wp(3.5)} color={colors.black2} />
                <SuperText style={{ width: wp(10) }} value="4000" regular size={wp(3.5)} color={colors.black2} />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: wp(4) }} showsVerticalScrollIndicator={false}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                        <Image source={images.back} style={styles.back} />
                    </TouchableOpacity>
                    <Spacer row={wp(2)} />
                    <SuperText value={"Points Details"} medium size={wp(5)} color={colors.black} />
                </View>
                <Spacer space={wp(2)} />
                <WeekViewCalendar />
                <Spacer space={wp(2)} />
                <View style={styles.tableHeader}>
                    <SuperText style={{ width: wp(4) }} value="#" regular size={wp(3.5)} color={colors.black2} />
                    <SuperText style={{ width: wp(15), }} value="Date" regular size={wp(3.5)} color={colors.black2} />
                    <SuperText style={{ width: wp(12) }} value="Points" regular size={wp(3.5)} color={colors.black2} />
                    <SuperText style={{ width: wp(10) }} value="Type" regular size={wp(3.5)} color={colors.black2} />
                </View>
                <View style={{ backgroundColor: colors.gray3, borderBottomLeftRadius: wp(2), borderBottomRightRadius: wp(2) }}>
                    <Spacer space={wp(1)} />
                    <FlatList data={points} keyExtractor={(item: any) => item.id} showsVerticalScrollIndicator={false}
                        renderItem={renderItem}
                    />
                </View>
                <Spacer space={wp(2)} />
                <Button onPress={() => { props.navigation.navigate("MarketPlace") }} label="MARKET PLACE" color={colors.white} />
                <Spacer space={hp(4)} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Rewards;