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
    tableHeader: {
        backgroundColor: colors.bg2,
        borderWidth: 1,
        borderTopLeftRadius: wp(2),
        borderTopRightRadius: wp(2),
        borderColor: colors.primary,
        paddingVertical: wp(1),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(4),
        justifyContent: 'space-between'
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(4),
        justifyContent: 'space-between',
        paddingVertical: wp(2)
    }
})