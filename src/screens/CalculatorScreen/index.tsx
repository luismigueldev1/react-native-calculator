import React, { useRef, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Button from "../../components/Button"
import { useCalculator } from "../../hooks/useCalculator"
import { Colors } from "../../theme/AppTheme"

export default function CalculatorScreen() {
  const {
    number,
    prevNumber,
    clear,
    buildNumber,
    deleteLastDigit,
    positiveNegative,
    division,
    multiply,
    substract,
    add,
    calculate,
  } = useCalculator()

  return (
    <View style={styles.calculator}>
      {prevNumber !== "0" && (
        <Text style={styles.previousResult}>{prevNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <Button text="C" color={Colors.gray} action={clear} />
        <Button text="+/-" color={Colors.gray} action={positiveNegative} />
        <Button text="del" color={Colors.gray} action={deleteLastDigit} />
        <Button text="/" color={Colors.orange} action={division} />
      </View>
      <View style={styles.row}>
        <Button text="7" action={buildNumber} />
        <Button text="8" action={buildNumber} />
        <Button text="9" action={buildNumber} />
        <Button text="X" color={Colors.orange} action={multiply} />
      </View>
      <View style={styles.row}>
        <Button text="4" action={buildNumber} />
        <Button text="5" action={buildNumber} />
        <Button text="6" action={buildNumber} />
        <Button text="-" color={Colors.orange} action={substract} />
      </View>
      <View style={styles.row}>
        <Button text="1" action={buildNumber} />
        <Button text="2" action={buildNumber} />
        <Button text="3" action={buildNumber} />
        <Button text="+" color={Colors.orange} action={add} />
      </View>
      <View style={styles.row}>
        <Button text="0" large action={buildNumber} />
        <Button text="." action={buildNumber} />
        <Button text="=" color={Colors.orange} action={calculate} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  result: {
    color: Colors.white,
    fontSize: 60,
    textAlign: "right",
    marginBottom: 10,
  },

  calculator: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "flex-end",
  },
  previousResult: {
    color: Colors.whiteT,
    fontSize: 30,
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
})
