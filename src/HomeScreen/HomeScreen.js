import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {homeStyles} from './HomeScreen.styles'
import ButtonGroup from './ButtonGroup';
import {screens} from '../screens'

export const HomeScreen = ({navigation}) => {

  const moveToScreen = screen => {
    navigation.navigate(screen)
  }
  return (
      <View style={homeStyles.container}>
        <Text>React tutorials</Text>
        <ButtonGroup
          onPress={moveToScreen}
          buttons={screens} />
      </View>
  )
}
