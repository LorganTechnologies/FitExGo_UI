import { View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../../res/images'
import { styles } from './style'
import Spacer from '../../../components/Spacer'
import { wp } from '../../../res/constants'
import SuperText from '../../../components/SuperText'
import { colors } from '../../../res/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const ChangePassword = (props: any) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: wp(4) }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                    <Image source={images.back} style={styles.back} />
                </TouchableOpacity>
                <Spacer space={wp(2)} />
                <View style={styles.row}>
                    <SuperText value={`Create New `} semiBold size={wp(6)} color={colors.black} />
                    <SuperText value={`Password`} semiBold size={wp(6)} color={colors.primary} />
                </View>
                <SuperText value={`Your new password must be unique from those previously used.`} regular size={wp(3.4)} color={colors.gray} />
                <Spacer space={wp(2)} />
                <Input rightPress={() => { setSecureTextEntry(!secureTextEntry) }} secureTextEntry={secureTextEntry} label="Old Password" rightIcon={images.eye} />
                <Input rightPress={() => { setSecureTextEntry(!secureTextEntry) }} secureTextEntry={secureTextEntry} label="New Password" rightIcon={images.eye} />
                <Input rightPress={() => { setSecureTextEntry(!secureTextEntry) }} secureTextEntry={secureTextEntry} label="Confirm Password" rightIcon={images.eye} />
                <Spacer space={wp(2)} />
            </ScrollView>
            <Button absolute color={colors.white} label="CHANGE PASSWORD" />
        </SafeAreaView>
    )
}

export default ChangePassword;