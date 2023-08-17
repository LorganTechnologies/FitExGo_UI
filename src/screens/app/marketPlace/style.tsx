import { StyleSheet, } from 'react-native'
import { colors } from '../../../res/colors'
import { wp } from '../../../res/constants'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    back: {
        resizeMode: 'contain',
        width: wp(4),
        height: wp(4)
    },
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
    },
    btnStyle: {
        width: wp(83),
    }
})