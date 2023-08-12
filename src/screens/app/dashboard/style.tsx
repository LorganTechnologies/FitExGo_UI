import { StyleSheet } from 'react-native';
import { colors } from '../../../res/colors';
import { wp } from '../../../res/constants';
import { fonts } from '../../../res/fonts';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profile: {
        width: wp(20),
        height: wp(20),
        borderRadius: wp(2),
    },
    pointsWrapper: {
        backgroundColor: colors.gray3,
        padding: wp(2),
        borderRadius: wp(2),
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    reward: {
        width: wp(14),
        height: wp(14)
    },
    switchWrapper: {
        backgroundColor: colors.primary,
        width: wp(45),
        height: wp(12),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp(2),
    },
    datesContainer: {
        height: wp(30),
        paddingVertical: wp('5%'),
        backgroundColor: colors.white,
    },
    dateHeader: {
        width: wp(80),
        marginBottom: wp(4),
        alignSelf: 'center',
    },
    dateHeaderText: {
        color: colors.black,
        fontSize: wp(4),
        fontFamily: fonts.Regular
    },
    dateIconContainer: {
        // padding: wp(2),
    },
    iconStyle: {
        width: wp('8%'),
        height: wp('8%'),
    },
    dates: {
        color: colors.black,
    },
    highlightDatesContainer: {
        backgroundColor: colors.primary,
    },
    highlightDateNumberStyle: {
        color: colors.white,
        // backgroundColor: colors.white,
        // padding: wp(1),
        borderRadius: wp(10)
    },
    dayContainerStyle: {
        backgroundColor: colors.gray3,
        // height: wp(16),
    },
    goalWrapper: {
        backgroundColor: colors.gray3,
        borderRadius: wp(2),
        padding: wp(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    goals: {
        width: wp(8),
        height: wp(8)
    },
    goalItems: {
        backgroundColor: colors.gray3,
        borderRadius: wp(2),
        padding: wp(4),
        width: wp(44),
        height: wp(30)
    }
})