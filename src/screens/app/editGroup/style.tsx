import { StyleSheet } from 'react-native'
import { colors } from '../../../res/colors'
import { wp } from '../../../res/constants'
export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray3,
        borderRadius: wp(2),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    linkWrapper: {
        flexDirection: 'row',
        alignItems: "center",
        borderWidth: 1,
        borderRadius: wp(8),
        borderColor: colors.border2,
        marginHorizontal: wp(4),
    },
    inviteLink: {
        backgroundColor: colors.primary,
        padding: wp(1.5),
        paddingHorizontal: wp(2.5),
        borderRadius: wp(8),
        left: -1
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