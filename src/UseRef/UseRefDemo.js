import React, {useRef, useState, useEffect} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native';
import {styles} from './UseRefDemo.styles'

// using useRef()
export const UseRefDemo = () => {
  const [count, setCount] = useState(0)
  const intervalRef = useRef()

  // useEffect(() => {
  //   intervalRef.current = setInterval(
  //     () => setCount(count => count + 1),
  //     1000
  //   )
  //   return () => {
  //     clearInterval(intervalRef.current)
  //   }
  // }, [])

  const stop = () => {
    clearInterval(intervalRef.current)
  }
  const start = () => {
    intervalRef.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }
  const reset = () => {
    stop()
    setCount(0)
  }
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{count}</Text>
      </View>
      <View style={styles.buttonPanel}>
        <Button title="Stop" onPress={stop} />
        <Button title="Start" onPress={start} />
        <Button title="Reset" onPress={reset} />
      </View>
    </View>
  )
}
