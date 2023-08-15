import { StyleSheet } from 'react-native'
import { colors } from '../../../res/colors'
import { wp } from '../../../res/constants'
import { fonts } from '../../../res/fonts'
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
    absolute: {
        position: 'absolute',
        width: wp(90),
        alignSelf: 'center',
        bottom: wp(4)
    },
    codeInput: {
        width: wp(16),
        height: wp(14),
        backgroundColor: colors.bg,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: wp(3),
        fontFamily: fonts.Medium,
        color: colors.black,
        fontSize: wp(6),
    },
})