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
    checkBox: {
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: wp(1),
        width: wp(5.5),
        height: wp(5.5),
        alignItems: "center",
        justifyContent: 'center',
    }
})