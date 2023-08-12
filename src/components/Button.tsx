import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../res/colors'
import { wp } from '../res/constants'
import SuperText from './SuperText'
import Spacer from './Spacer'

const Button = ({ colors, label, color, onPress, btnStyle, textStyle, leftIcon, iconStyle, absolute, loading, disable, border }: any) => {
    return (

        <TouchableOpacity disabled={disable} onPress={onPress} style={[styles.container, border && styles.border, absolute && { position: 'absolute', width: wp(90), alignSelf: 'center', bottom: wp(4) }, disable && { opacity: 0.5 }, btnStyle && btnStyle,]} >
            {leftIcon &&
                <View>
                    <Image source={leftIcon} style={[iconStyle && iconStyle]} />
                    <Spacer row={wp(5)} />
                </View>
            }
            {loading ?
                <ActivityIndicator color={colors.white} size='small' />
                :
                <SuperText medium style={[styles.font, textStyle && textStyle]} color={color} value={label} />
            }
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        padding: wp(4),
        borderRadius: wp(2),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    border: {
        backgroundColor: colors.transparent,
        borderWidth: 1,
        borderColor: colors.primary
    },
    font: {
        fontSize: wp(4.5),
    },
})