import React, {useEffect, useState} from 'react';
import {useLocalStorage, getSavedValue} from './useLocalStorage';
import {Text, TextInput, View} from 'react-native';

export const CustomHookDemo = () => {
  const [name, setName] = useLocalStorage('name', '')

  return (
    <View>
      <TextInput style={{fontSize: 30}}
                 value={name}
                 placeholder="type here"
                 onChangeText={(e) => setName(e)} />
                 <Text>Automatically updating local storage...</Text>
    </View>
  )
}
