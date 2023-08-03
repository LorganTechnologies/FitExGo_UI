// noinspection JSUnresolvedReference

import { StyleSheet } from 'react-native';
import { fonts } from '../../res/fonts';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../res/colors';

export default StyleSheet.create({
  buttonsContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp(2)
  },
  headerContainerStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: wp('2.4%'),
  },
  buttonIconStyle: {
    resizeMode: 'contain',
    width: wp(5.5),
    height: wp(5.5),
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  yearTextStyle: {
    fontSize: wp('3.3%'),
    fontFamily: fonts.Regular,
    color: colors.black2,
    marginHorizontal: wp(2)
  },
  dayTextStyle: {
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.Medium,
    fontSize: wp('2.9%'),
    // backgroundColor: colors.primary,
    color: colors.white,
  },
  dayTextWrapper: {
    // flex: 1,
    marginHorizontal: wp(1),
    backgroundColor: colors.primary,
    paddingTop: wp(2),
    borderTopRightRadius: wp(2),
    borderTopLeftRadius: wp(2),
    width: wp(10.5),
  },
  dateContainerStyle: {
    backgroundColor: colors.primary,
    marginHorizontal: wp(1),
    padding: wp(2),
    borderBottomLeftRadius: wp(2),
    borderBottomRightRadius: wp(2),
    width: wp(10.5),
  },
  dateGradientStyle: {
    flex: 1,
  },
  dateGradientInnerStyle: {
    paddingTop: wp('1.5%'),
    borderRadius: 7,
    alignItems: 'center',
    justContent: 'center',
    margin: 1,
  },

  buttonContainerStyle: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: wp('9.5%'),
    marginHorizontal: wp('2%'),
  },
  dateTextStyle: {
    textAlign: 'center',
    fontFamily: fonts.Medium,
    fontSize: wp('3.3%'),
    color: colors.black,

  },
  weekDaysContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weekDatesContainerStyle: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dayContainer: {
    backgroundColor: colors.primary,
  }
});
