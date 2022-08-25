import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {homeStyles} from './HomeScreen.styles'
import ButtonGroup from './ButtonGroup';
import {screens} from '../screens'

// export default class HomeScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedIndex: 1,
//       screens: ['Lifecycle example', 'useEffect example', 'useMemo example', 'useRef example']
//     }
//     this.moveToScreen = selectedIndex => {
//       const {screens} = this.state;
//       this.props.navigation.navigate(screens[selectedIndex])
//     }
//   }
//   render() {
//     const buttons = ['Lifecycle example', 'useEffect example', 'useMemo example', 'useRef example']
//     return (
//       <View style={homeStyles.container}>
//         <Text>React tutorials</Text>
//         <ButtonGroup
//           onPress={this.moveToScreen}
//           buttons={buttons} />
//       </View>
//     )
//   }
// }

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
