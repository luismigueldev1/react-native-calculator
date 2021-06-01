import React, { useRef, useState } from "react"
import { Text, View } from "react-native"

enum Operators {
  add,
  substract,
  multiply,
  division,
}

export const useCalculator = () => {
  const [prevNumber, setPrevNumber] = useState("0")
  const [number, setNumber] = useState("0")

  const lastOperation = useRef<Operators>()

  const clear = () => {
    setNumber("0")
    setPrevNumber("0")
  }

  const buildNumber = (textNumber: string) => {
    //No aceptar doble punto
    if (number.includes(".") && textNumber === ".") return

    if (number.startsWith("0") || number.startsWith("-0")) {
      //punto decimal
      if (textNumber === ".") {
        setNumber(number + textNumber)

        //evaluar si es otro cero y si hay otro punto
      } else if (textNumber === "0" && number.includes(".")) {
        setNumber(number + textNumber)
        //evaluar si es diferente de cero y no tiene punto
      } else if (textNumber !== "0" && !number.includes(".")) {
        setNumber(textNumber)
        // evitar el 0000.0
      } else if (textNumber === "0" && !number.includes(".")) {
        setNumber(number)
      } else {
        setNumber(number + textNumber)
      }
    } else {
      setNumber(number + textNumber)
    }
  }

  const deleteLastDigit = () => {
    if (number.length === 0) {
      setNumber("0")
    } else {
      setNumber(number.slice(0, -1))
    }
  }

  const positiveNegative = () => {
    let negative = ""
    let tempNumber = number

    if (number.includes("-")) {
      negative = "-"
      tempNumber = number.substr(1)
    }

    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1))
    } else {
      setNumber("0")
    }
  }

  const changeNumberByPrev = () => {
    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1))
    } else {
      setPrevNumber(number)
    }

    setNumber("0")
  }

  const division = () => {
    changeNumberByPrev()
    lastOperation.current = Operators.division
  }
  const multiply = () => {
    changeNumberByPrev()
    lastOperation.current = Operators.multiply
  }
  const substract = () => {
    changeNumberByPrev()
    lastOperation.current = Operators.substract
  }
  const add = () => {
    changeNumberByPrev()
    lastOperation.current = Operators.add
  }

  const calculate = () => {
    const number1 = Number(number)
    const number2 = Number(prevNumber)

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${number1 + number2}`)
        break

      case Operators.substract:
        setNumber(`${number2 - number1}`)
        break
      case Operators.multiply:
        setNumber(`${number1 * number2}`)
        break
      case Operators.division:
        setNumber(`${number2 / number1}`)
        break
    }

    setPrevNumber("0")
  }
  return {
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
  }
}
