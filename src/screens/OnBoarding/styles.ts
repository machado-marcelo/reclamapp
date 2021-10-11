import { COLORS, SIZES } from "../../constants";

import { StyleSheet } from "react-native";

export const ScreenStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  imageAndTextContainer: {
    width: SIZES.width,
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '20%' : '16%',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.padding,
    height: SIZES.padding,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    marginHorizontal: SIZES.radius / 2,
  },
});
