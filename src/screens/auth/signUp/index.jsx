import { TouchableOpacity, Image, ScrollView, View } from 'react-native'
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
import { fonts } from '../../../res/fonts'
import moment from 'moment'

const SignUp = (props) => {

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [birth, setBirth] = useState("Select date");
    const [check, setCheck] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: wp(4) }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                    <Image source={images.back} style={styles.back} />
                </TouchableOpacity>
                <Spacer space={wp(2)} />
                <View style={styles.row}>
                    <SuperText style={{ textTransform: 'capitalize' }} value={`Welcome to `} semiBold size={wp(6)} color={colors.black} />
                    <SuperText style={{ textTransform: 'capitalize' }} value={`FitExGo`} semiBold size={wp(6)} color={colors.primary} />
                </View>
                <Spacer space={wp(2)} />
                <Input label="Full Name" />
                <Input label="Email Address" />
                <Input rightPress={() => { setSecureTextEntry(!secureTextEntry) }} secureTextEntry={secureTextEntry} label="Password" rightIcon={images.eye} />
                <Input rightPress={() => { setSecureTextEntry(!secureTextEntry) }} secureTextEntry={secureTextEntry} label="Confirm Password" rightIcon={images.eye} />
                <Input value={birth} selectDate={(date) => { setBirth(moment(date).format("DD MMM, YYYY")); }} date rightIcon={images.date} label="Date of Birth" />

                <SuperText value="Age should be 18+?" regular color={colors.gray} size={wp(3.4)} />
                <Spacer space={wp(2)} />


                <TouchableOpacity onPress={() => { setCheck(!check) }} style={styles.row}>
                    <View style={[styles.checkBox, check && { backgroundColor: colors.primary }]}>
                        <Image source={images.checkWhite} />
                    </View>
                    <Spacer row={wp(1)} />
                    <SuperText value="I Agree to Terms & Conditions And Privacy Policy" regular color={colors.gray} size={wp(3.4)} />
                </TouchableOpacity>

                <Spacer space={wp(4)} />
                <Button onPress={() => { props.navigation.navigate("AppNavigation"); }} label="SIGN UP" color={colors.white} />
                <Spacer space={wp(2)} />
                <SuperText style={{ textAlign: 'center' }} value="Or Sign up with" color={colors.gray} size={wp(3.5)} medium />
                <Spacer space={wp(2)} />
                <Button textStyle={{ fontFamily: fonts.Regular }} btnStyle={{ padding: wp(3), }} leftIcon={images.apple} border label="Continue with Apple" color={colors.black2} />
                <Spacer space={wp(2)} />
                <Button textStyle={{ fontFamily: fonts.Regular }} btnStyle={{ padding: wp(3), }} leftIcon={images.google} border label="Continue with Google" color={colors.black2} />
                <Spacer space={wp(2)} />
                <Button textStyle={{ fontFamily: fonts.Regular }} btnStyle={{ padding: wp(3), }} leftIcon={images.fb} border label="Continue with Facebook" color={colors.black2} />
                <Spacer space={wp(2)} />
                <Button textStyle={{ fontFamily: fonts.Regular }} btnStyle={{ padding: wp(3), }} leftIcon={images.instagram} border label="Continue with Instagram" color={colors.black2} />

                <Spacer space={wp(2)} />

                <TouchableOpacity onPress={() => { props.navigation.navigate("Login") }} style={[styles.row, { alignSelf: 'center' }]}>
                    <SuperText value="Already have an account? " color={colors.gray2} semiBold size={wp(4)} />
                    <SuperText value="Login" color={colors.primary} size={wp(4)} bold />
                </TouchableOpacity>
                <Spacer space={wp(4)} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp