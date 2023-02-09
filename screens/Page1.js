import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Page1 extends React.Component {
  state = {
    w: 200,
    h: 200,
  };

  _onPressIncrease = () => {
    // Animate the update
    LayoutAnimation.easeInEaseOut();
    this.setState({w: this.state.w + 15, h: this.state.h + 15});
  };

  _onPressDescrease = () => {
    // Animate the update
    LayoutAnimation.easeInEaseOut();
    this.setState({w: this.state.w - 15, h: this.state.h - 15});
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={[styles.box, {width: this.state.w, height: this.state.h}]}
        />
        <TouchableOpacity onPress={this._onPressIncrease}>
          <View style={styles.button}>
            <Text style={styles.buttonText}> Tăng kích cỡ </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._onPressDescrease}>
          <View style={styles.button}>
            <Text style={styles.buttonText}> Giảm kích cỡ </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Flex', {
              itemId: 2023,
              name: 'CP17306',
            });
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Go to Page2</Text>
          </View>
        </TouchableOpacity>

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
  box: {
    width: 300,
    height: 300,
    backgroundColor: 'violet',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});