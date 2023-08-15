import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SuperText from './SuperText'
import { colors } from '../res/colors'
import { wp } from '../res/constants'
import Spacer from './Spacer'

const RadioButton = (props: any) => {
    return (
        <View style={[styles.row, { justifyContent: 'space-between', marginVertical: wp(2) }]}>
            <SuperText regular value={props.title} color={colors.gray} style={{ fontSize: wp(3.5), width: wp(25) }} />
            {props.options.map((item: string) => {
                return (
                    <TouchableOpacity onPress={() => { props.onSelect(item) }} style={[styles.row, { width: wp(30), }]}>
                        <View style={styles.radioWrapper}>
                            {props.selected == item &&
                                <View style={styles.radio} />}
                        </View>
                        <Spacer row={wp(1)} />
                        <SuperText regular value={item} color={colors.gray} style={{ fontSize: wp(3.5) }} />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default RadioButton

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: "center",
    },
    radioWrapper: {
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: wp(10),
        padding: wp(1),
        width: wp(5),
        height: wp(5),
        alignItems: "center",
        justifyContent: 'center',
    },
    radio: {
        backgroundColor: colors.primary,
        width: wp(3),
        height: wp(3),
        borderRadius: wp(10),
    }
})