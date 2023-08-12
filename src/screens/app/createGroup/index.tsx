import { TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../../res/images'
import SuperText from '../../../components/SuperText'
import { wp } from '../../../res/constants'
import { colors } from '../../../res/colors'
import Spacer from '../../../components/Spacer'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const CreateGroup = (props: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: wp(4) }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                    <Image source={images.back} style={styles.back} />
                </TouchableOpacity>
                <Spacer space={wp(2)} />
                <SuperText value={`Create Group`} medium size={wp(6)} color={colors.black} />
                <Spacer space={wp(0.5)} />
                <SuperText value={`Your new group must be unique from those previously used.`} regular size={wp(4)} color={colors.gray2} />
                <Spacer space={wp(2)} />

                <Input label="Group Name" placeholder="Enter Name" />
                <Input label="Group Type" placeholder="Enter Type" />
                <Input inputStyle={{ width: wp(75), fontSize: wp(3.2) }} rightIconStyle={{ width: wp(10), height: wp(10) }} rightIcon={images.copy} select label="Invitation Link" value="https://www.figma.com/filegOUIiPUQimoicqRJS4j9sjloim" />

            </ScrollView>
            <Button absolute onPress={() => { }} label="CREATE GROUP" color={colors.white} />
        </SafeAreaView>
    )
}

export default CreateGroup