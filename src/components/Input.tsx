import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { wp } from '../res/constants'
import SuperText from './SuperText'
import { colors } from '../res/colors'
import Spacer from './Spacer'
import { fonts } from '../res/fonts'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Input = ({ inputStyle, rightIconStyle, maxLength, multiline, value, label, placeholder, onChangeText, secureTextEntry, rightIcon, leftIcon, rightPress, containerStyle, visible, select, date, selectDate, keyboardType }: any) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        console.warn("A date has been picked: ", date);
        selectDate(date)
        hideDatePicker();
    };


    return (
        <View style={[styles.container, containerStyle && containerStyle]}>
            {label &&
                <>
                    <SuperText medium value={label} color={colors.gray} style={{ fontSize: wp(3.8) }} />
                    <Spacer space={wp(1)} />
                </>
            }

            <View style={styles.inputWrapper}>
                {leftIcon &&
                    <>
                        <Image source={leftIcon} />
                        <Spacer row={wp(1)} />
                    </>
                }
                {date ?
                    <TouchableOpacity onPress={() => { showDatePicker() }} >
                        <Text style={[styles.input, { textAlignVertical: 'center' }]}>{value}</Text>
                    </TouchableOpacity>
                    :
                    <TextInput maxLength={maxLength} multiline={multiline} keyboardType={keyboardType && keyboardType} editable={select ? false : true} value={value} placeholderTextColor={colors.gray} secureTextEntry={secureTextEntry} onChangeText={onChangeText} style={[styles.input, inputStyle && inputStyle, containerStyle && containerStyle, multiline && { height: wp(30), textAlignVertical: 'top' }]} placeholder={placeholder} />
                }
                {rightIcon &&
                    <TouchableOpacity style={{ padding: wp(2), }} onPress={rightPress}>
                        <Image source={rightIcon} style={[rightIconStyle, visible && { transform: [{ rotate: '180deg' }] }]} />
                    </TouchableOpacity>
                }
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        marginVertical: wp(1.5)
    },
    inputWrapper: {
        backgroundColor: colors.bg,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: wp(3),
        paddingHorizontal: wp(3),
        flexDirection: 'row',
        alignItems: "center",
    },
    input: {
        fontSize: wp(4),
        color: colors.black,
        fontFamily: fonts.Medium,
        height: wp(12.5),
        width: wp(78),
    },
    selectOptions: {
        backgroundColor: colors.gray2,
        borderRadius: wp(3),
        marginVertical: wp(2)
    },
    optionWrapper: {
        marginVertical: wp(1),
        padding: wp(2),
        borderBottomWidth: 1,
        borderColor: colors.gray3,
        borderRadius: wp(2)
    },
    option: {
        fontSize: wp(3.5),
        color: colors.black,
        fontFamily: fonts.Regular,
    }
})