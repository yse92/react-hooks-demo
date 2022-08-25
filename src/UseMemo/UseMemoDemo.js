import React, {useState, useMemo, useEffect} from 'react'
import {View, TextInput, Button, Text, StyleSheet} from 'react-native'

export const UseMemoDemo = () => {
  const [number, setNumber] = useState(10)
  const [dark, setDark] = useState(false)

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  //before
  // const themeStyles = {
  //   backgroundColor: dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black',
  //   fontSize: 24
  // }

  // after
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
      fontSize: 24,
    }
  }, [dark])

  useEffect(() => {
    console.log('theme changed')
  }, [themeStyles])

  return (
    <View>
      <TextInput onChangeText={num => setNumber(num)} value={number} style={styles.input} keyboardType="numeric" height={20}/>
      <Button onPress={() => setDark(isDark => !isDark)} title="Change Theme" />
      <Text style={themeStyles}>{doubleNumber}</Text>
    </View>
  )
}

const slowFunction = num => {
  console.log('slow function is called')
  for (let i = 0; i <= 1000100010; i++) {

  }
  return num * 2;
}

const styles = StyleSheet.create({
  input: {
    fontSize: 24,
    height: 24,
  }
})
