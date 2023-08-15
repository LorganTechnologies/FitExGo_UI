import { View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { wp } from '../../../res/constants'
import { styles } from './style'
import { images } from '../../../res/images'
import Spacer from '../../../components/Spacer'
import SuperText from '../../../components/SuperText'
import { colors } from '../../../res/colors'
import Button from '../../../components/Button'
import { marketPlace } from '../../../utils/data'
import Input from '../../../components/Input'

const MarketPlace = (props: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: wp(4) }} showsVerticalScrollIndicator={false}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                        <Image source={images.back} style={styles.back} />
                    </TouchableOpacity>
                    <Spacer row={wp(2)} />
                    <SuperText value={"Market Place"} medium size={wp(5)} color={colors.black} />
                </View>
                <Spacer space={wp(4)} />
                <View style={{ alignItems: "center" }}>
                    <View style={styles.row}>
                        <SuperText value={"Total Points: "} semiBold size={wp(4)} color={colors.primary} />
                        <SuperText value={"12,000 (1000 Points = $1)"} semiBold size={wp(4)} color={colors.black} />
                    </View>
                    <Spacer space={wp(1)} />
                    <SuperText value={"Purchase Gift Card"} semiBold size={wp(4)} color={colors.primary} />
                </View>
                <Spacer space={wp(4)} />
                {marketPlace.map((item) => {
                    return (
                        <View style={[styles.row, { width: wp(30), marginVertical: wp(2) }]}>
                            <View style={styles.radioWrapper}>
                                {item.selected &&
                                    <View style={styles.radio} />}
                            </View>
                            <Spacer row={wp(2)} />
                            <Button color={item.selected ? colors.white : colors.primary} btnStyle={[styles.btnStyle, !item.selected && { backgroundColor: null, borderWidth: 1, borderColor: colors.primary }]} onPress={() => { }} label={item.name} />
                        </View>
                    )
                })}
                <Spacer space={wp(2)} />
                <View style={styles.row}>
                    <SuperText value={"Denomination:"} semiBold size={wp(4)} color={colors.primary} />
                    <Spacer row={wp(2)} />
                    <Input containerStyle={{ width: wp(59) }} placeholder="Enter $5 - $100" />
                </View>
                <Spacer space={wp(4)} />
                <Button onPress={() => { }} label="BUY" color={colors.white} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default MarketPlace;