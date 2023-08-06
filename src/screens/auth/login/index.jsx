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
import { fonts } from '../../../res/fonts'

const Login = (props) => {

    const [secureTextEntry, setSecureTextEntry] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ padding: wp(4) }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity>
                    <Image source={images.back} style={styles.back} />
                </TouchableOpacity>
                <Spacer space={wp(2)} />
                <SuperText style={{ textTransform: 'capitalize' }} value={`Welcome back! Glad to\nsee you, Again!`} medium size={wp(6)} color={colors.black} />
                <Spacer space={wp(2)} />

                <Input label="Email Address" />
                <Input rightPress={() => { setSecureTextEntry(!secureTextEntry) }} secureTextEntry={secureTextEntry} label="Password" rightIcon={images.eye} />

                <TouchableOpacity style={{ alignSelf: 'flex-end', paddingVertical: wp(2) }}>
                    <SuperText value="Forgot Password?" mSemiBold color={colors.gray} />
                </TouchableOpacity>
                <Spacer space={wp(2)} />
                <Button onPress={() => { props.navigation.navigate("Dashboard"); }} label="LOGIN" color={colors.white} />
                <Spacer space={wp(2)} />
                <SuperText style={{ textAlign: 'center' }} value="Or Login with" color={colors.gray} size={wp(3.5)} medium />
                <Spacer space={wp(2)} />
                <Button textStyle={{ fontFamily: fonts.Regular }} btnStyle={{ padding: wp(3), }} leftIcon={images.apple} border label="Continue with Apple" color={colors.black2} />
                <Spacer space={wp(2)} />
                <Button textStyle={{ fontFamily: fonts.Regular }} btnStyle={{ padding: wp(3), }} leftIcon={images.google} border label="Continue with Google" color={colors.black2} />
                <Spacer space={wp(2)} />
                <Button textStyle={{ fontFamily: fonts.Regular }} btnStyle={{ padding: wp(3), }} leftIcon={images.fb} border label="Continue with Facebook" color={colors.black2} />
                <Spacer space={wp(2)} />
                <Button textStyle={{ fontFamily: fonts.Regular }} btnStyle={{ padding: wp(3), }} leftIcon={images.instagram} border label="Continue with Instagram" color={colors.black2} />

                <Spacer space={wp(2)} />

                <TouchableOpacity style={styles.row}>
                    <SuperText value="Don't have an account " color={colors.gray2} semiBold size={wp(4)} />
                    <SuperText value="Register!" color={colors.primary} size={wp(4)} bold />
                </TouchableOpacity>
                <Spacer space={wp(4)} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login