import React, {useCallback, useState, useEffect} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import {List} from './List'

export const UseCallback = () => {
  const [number, setNumber] = useState(1)
  const [dark,setDark] = useState(false)

  const getItems = useCallback(()  => {
    return [number, number + 1, number + 2]
  }, [number])

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
  }
  const fontColor = {
    color: dark ? '#fff' : '#333'
  }
  return(
    <View style={theme}>
      <TextInput style={styles.input} value={number} onChangeText={e => setNumber(+e)} />
      <Button title="Toggle theme" onPress={() => setDark(prevDark => !prevDark)} />
      <List fontColor={fontColor} getItems={getItems} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 30
  }
})

