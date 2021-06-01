import React from "react"
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native"
import { Colors } from "../../theme/AppTheme"

interface Props {
  text: string
  color?: string
  large?: boolean
  action: (textNumber: string) => void
}

export default function Button({
  text,
  color = Colors.grayDark,
  large,
  action,
}: Props) {
  const { width } = Dimensions.get("window")
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        width: large ? width * 0.42 + 10 : width * 0.21,
        height: width * 0.21,
        backgroundColor: color,
      }}
      onPress={() => action(text)}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: color === Colors.gray ? Colors.black : Colors.white,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: Colors.grayDark,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 32,
    color: Colors.white,
  },
})
