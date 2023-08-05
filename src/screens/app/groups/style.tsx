import { StyleSheet } from 'react-native'
import { colors } from '../../../res/colors'
import { wp } from '../../../res/constants'
export const styles = StyleSheet.create({
    container: {

    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    groupWrapper: {
        backgroundColor: colors.gray3,
        padding: wp(3),
        borderRadius: wp(1),
        marginVertical: wp(2)
    },
    profile: {
        width: wp(14),
        height: wp(14),
        borderRadius: wp(2),
    },
    membersImg: {
        width: wp(6),
        height: wp(6),
        borderRadius: wp(4),
    },
    membersWrapper: {
        borderWidth: 2,
        borderColor: colors.black,
        borderRadius: wp(4),
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkWrapper: {
        borderWidth: 1,
        borderColor: colors.border2,
        borderRadius: wp(4)
    },
    copy: {
        width: wp(8),
        height: wp(8),
        right: -2
    }
})