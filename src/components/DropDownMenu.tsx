import { Image, Platform, StyleSheet, View } from 'react-native'
import React from 'react'
import SuperText from './SuperText'
import Spacer from './Spacer'
import { hp, wp } from '../res/constants'
import { colors } from '../res/colors'
import { Dropdown } from 'react-native-element-dropdown'
import { fonts } from '../res/fonts'
import { images } from '../res/images'

const DropDownMenu = (props: any) => {
    return (
        <View style={[styles.container, props.containerStyle && props.containerStyle]}>
            <SuperText medium value={props.label} color={colors.gray} style={{ fontSize: wp(3.8) }} />
            <Spacer space={wp(1)} />
            <Dropdown
                style={[styles.inputWrapper, props.isFocus && { borderColor: 'blue' }]}
                containerStyle={{ backgroundColor: colors.white, borderRadius: wp(2.5), }}
                itemTextStyle={styles.itemTextStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={props.data}
                value={props.value}
                maxHeight={300}
                renderRightIcon={() => (<Image source={images.down} style={styles.iconStyle} />)}
                valueField="value"
                labelField="label"
                placeholder={props.placeholder}
                placeholderStyle={styles.placeholderStyle}
                searchPlaceholder="Search..."
                onChange={item => {
                    props.setValue(item.value);
                }}
            />

        </View>
    )
}

export default DropDownMenu

const styles = StyleSheet.create({
    container: {
        marginVertical: wp(2),
        width: wp(44),
    },
    inputWrapper: {
        backgroundColor: colors.bg,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: wp(3),
        paddingHorizontal: wp(4),
        height: wp(12.5),
    },
    iconStyle: {
        width: wp(6),
        height: wp(6)
    },
    itemTextStyle: {
        color: colors.black,
        fontFamily: fonts.Regular,
        fontSize: wp(3.5),
    },
    inputSearchStyle: {
        borderRadius: wp(2),
        color: colors.black
    },
    placeholderStyle: {
        color: colors.gray,
        fontSize: wp(4),
        fontFamily: fonts.Medium,
    },
    selectedTextStyle: {
        fontSize: wp(4),
        color: colors.black,
        fontFamily: fonts.Medium,
    }
})