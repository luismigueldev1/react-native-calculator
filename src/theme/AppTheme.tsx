import { StyleSheet } from "react-native"

export const Colors = {
  black: "#000",
  white: "#FFF",
  whiteT: "rgba(255,255,255,0.5)",
  gray: "#9B9B9B",
  orange: "#FF9427",
  grayDark: "#2D2D2D",
}

export const theme = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.black,
  },
})
