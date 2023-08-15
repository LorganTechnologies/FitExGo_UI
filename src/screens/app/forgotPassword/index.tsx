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
import CodeInput from 'react-native-confirmation-code-input'

const ForgotPassword = (props: any) => {
    const [OTPCode, setOTPCode] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: wp(4) }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                    <Image source={images.back} style={styles.back} />
                </TouchableOpacity>
                <Spacer space={wp(2)} />
                <View style={styles.row}>
                    <SuperText value={`Forgot `} semiBold size={wp(6)} color={colors.black} />
                    <SuperText value={`Password`} semiBold size={wp(6)} color={colors.primary} />
                </View>
                <SuperText value={`Enter which Email details should we use to reset\nyour password.`} regular size={wp(3.4)} color={colors.gray} />
                <Spacer space={wp(2)} />
                <Input label="Email Address" />
                <Spacer space={wp(2)} />
                <View style={styles.row}>
                    <SuperText value={`OTP `} semiBold size={wp(5)} color={colors.black} />
                    <SuperText value={`Verification`} semiBold size={wp(5)} color={colors.primary} />
                </View>
                <Spacer space={wp(1)} />
                <SuperText value={`Enter the verification code we just sent on your\nemail address.`} regular size={wp(3.4)} color={colors.gray} />
                <Spacer space={wp(2)} />
                <CodeInput
                    ignoreCase={true}
                    codeLength={4}
                    keyboardType='number-pad'
                    inputPosition='center'
                    space={wp(6)}
                    activeColor={colors.gray}
                    onFulfill={setOTPCode}
                    containerStyle={{ flex: 0, marginVertical: wp(8), }}
                    codeInputStyle={styles.codeInput}
                />
                <Spacer space={wp(2)} />
                <TouchableOpacity style={[styles.row, { justifyContent: 'center', }]}>
                    <SuperText value={`Didn’t received code? `} regular size={wp(4)} color={colors.gray} />
                    <SuperText value={`Resend`} medium size={wp(4)} color={colors.primary} />
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.absolute}>
                <Button onPress={() => { props.navigation.navigate('ChangePassword') }} color={colors.white} label="COMPLETE" />
                <Spacer space={wp(1)} />
                <TouchableOpacity style={[styles.row, { justifyContent: 'center', }]}>
                    <SuperText value={`Remember Password? `} regular size={wp(4)} color={colors.gray} />
                    <SuperText value={`Sign In`} semiBold size={wp(4)} color={colors.primary} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword;