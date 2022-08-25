import React, {useEffect, useState} from 'react';
import {View, Button, StyleSheet, Text, ScrollView} from 'react-native';
import {styles} from './UseEffectDemo.styles'

export const UseEffectDemo = () => {
  const [resourceType, setResourceType] = useState('todos')
  const [items, setItems] = useState([])

  console.log("render ")

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headers}>
        <Button onPress={()=>setResourceType('todos')} title="Todos"/>
        <Button onPress={()=>setResourceType('users')} title="Users"/>
        <Button onPress={()=>setResourceType('comments')} title="Comments"/>
      </View>
      <View style={styles.descriptionText}>
        <Text style={styles.descriptionHeader}>{resourceType}</Text>
        {items.map(item => {return <Text style={styles.itemText}>{JSON.stringify(item)}</Text>})}
      </View>
    </ScrollView>

  )
}
