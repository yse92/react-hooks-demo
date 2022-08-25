import React from 'react';
import LifecycleDemo from './src/Lifecycle/LifecycleDemo';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/HomeScreen/HomeScreen';
import {UseEffectDemo} from './src/UseEffect/UseEffectDemo';
import {UseMemoDemo} from './src/UseMemo/UseMemoDemo';
import {UseRefDemo} from './src/UseRef/UseRefDemo';

const Stack = createNativeStackNavigator()

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"Lifecycle example"} component={LifecycleDemo} />
        <Stack.Screen name={"useEffect example"} component={UseEffectDemo} />
        <Stack.Screen name={"useMemo example"} component={UseMemoDemo} />
        <Stack.Screen name={"useRef example"} component={UseRefDemo} />
      </Stack.Navigator>

    </NavigationContainer>);
  }
}

export default App;
