import { StyleSheet } from 'react-native'
import { colors } from '../../../res/colors'
import { wp } from '../../../res/constants'
export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray3,
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
    },
    tableHeader: {
        backgroundColor: colors.bg2,
        borderTopWidth: 1,
        borderBottomWidth: 1,
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