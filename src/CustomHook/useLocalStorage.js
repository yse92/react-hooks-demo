import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const getSavedValue = async (key, initialValue) => {
  const savedValue = await JSON.parse(AsyncStorage.getItem(key))
  if (savedValue) return savedValue

  if (initialValue instanceof Function) return initialValue()
  return initialValue
}


export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue)
  })

  useEffect(() => {
    const setData = async () => {
      const data = await AsyncStorage.setItem(key, JSON.stringify(value))
    }
    setData()
  },[value])

  return [value, setValue]
}
