import {StyleSheet} from 'react-native';
import Constants from '../../Config/Constants';
import Colors from '../../Utils/Colors';
import {isIphoneX} from '../../Utils/extension';
import Fonts from '../../Utils/Fonts';
import {scale} from '../../Utils/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainWithBG: {
    marginTop: isIphoneX() ? scale(44) : scale(24),
    borderTopStartRadius: scale(25),
    borderTopRightRadius: scale(25),
    overflow: 'hidden',
  },
  mainContainer: {
    paddingHorizontal: Constants.appDefaultPadding,
  },

  // Label Container
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // Labels
  label: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: scale(12),
    color: Colors.text,
    marginVertical: scale(15),
    lineHeight: scale(22),
  },
  inputCount: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: scale(12),
    color: Colors.text,
    marginVertical: scale(15),
    lineHeight: scale(18),
  },

  // Extra
  votingContainer: {
    marginTop: scale(20),
  },
});
