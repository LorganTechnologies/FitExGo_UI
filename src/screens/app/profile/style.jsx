import { StyleSheet } from 'react-native'
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
    profile: {
        width: wp(24),
        height: wp(24),
        borderRadius: wp(2)
    },
    edit: {
        right: -wp(2),
        bottom: -wp(2),
        position: 'absolute',
        backgroundColor: colors.gray3,
        borderRadius: wp(10),
        width: wp(7),
        height: wp(7)
    },
    profileWrapper: {
        alignSelf: 'center',
    },

})