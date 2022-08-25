import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

// const App = () => {
//   const [time, setTime] = React.useState(new Date().toLocaleTimeString());
//   // console.log('Render!');
//   React.useEffect(() => {
//     setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
//   }, []);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.timeText}>{time}</Text>
//     </View>
//   );
// };

class Counter extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
    };
    //variant 2
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
    this.increment = () => this.setState({counter: this.state.counter + 1});
    this.decrement = () => this.setState({counter: this.state.counter - 1});
  }

  // increment() {
  //   this.setState(state => ({counter: this.state.counter + 1}));
  // }
  // decrement() {
  //   this.setState(state => ({counter: this.state.counter - 1}));
  // }

  //copy props into state
  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log('Component Did Mount');
    console.log('-------------------');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log('Component Should Update - DO NOT RENDER');
      return false;
    }
    console.log('Component Should Update - RENDER');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get Snapshot Before Update');
    return null;
  }

  render() {
    console.log('Render');
    return (
      <View style={styles.container}>
        <Button onPress={this.increment} title="Increment" />
        <Button onPress={this.decrement} title="Decrement" />
        <Text style={styles.timeText}>{this.state.counter}</Text>
      </View>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update');
    console.log('-------------------');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
    console.log('-------------------');
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#eeefff',
  },
  timeText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Counter;
