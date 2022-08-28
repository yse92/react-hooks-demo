import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const List = ({getItems, fontColor}) => {
  const [items, setItems]  = useState([])


  useEffect(() => {
    setItems(getItems())
    console.log('updating items')
  }, [getItems])

  return items.map(item => <Text style={[styles.item, fontColor]} key={item}>{item}</Text>)
}

const styles = StyleSheet.create({
  item: {
    fontSize: 30
  }
})
