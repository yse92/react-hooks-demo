import React from 'react';
import Counter from './Counter';
import {View, StyleSheet, Button} from 'react-native';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
    };
    this.mountCounter = () => this.setState({mount: true});
    this.unmountCounter = () => this.setState({mount: false});

    this.ignoreProp = () => this.setState({ignoreProp: Math.random()});

    this.seedGenerator = () =>
      this.setState({seed: Number.parseInt(Math.random() * 100)});
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.mountCounter}
          disabled={this.state.mount}
          title="Mount Counter"
        />
        <Button
          onPress={this.unmountCounter}
          disabled={!this.state.mount}
          title="Unmount Counter"
        />
        <Button onPress={this.ignoreProp} title="Ignore Prop" />
        <Button onPress={this.seedGenerator} title="Generate Seed" />
        {this.state.mount && (
          <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LifecycleDemo;
