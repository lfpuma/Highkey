import React, {Component} from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';
import Fonts from '../Utils/Fonts';
import {scale} from '../Utils/scale';
import EIcons from 'react-native-vector-icons/Entypo';

export default class SwitchEx extends Component {
  focus() {
    this.inputRef.focus();
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.leftContainer}>
          <EIcons name={this.props.icon} size={scale(20)} color={'white'} />
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
        <Switch
          trackColor={{false: '#7E7A9A', true: '#1C6EF2'}}
          thumbColor={'#FFFFFF'}
          onValueChange={this.props.onValueChange}
          value={this.props.value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(15),
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.PoppinsMedium,
    color: 'white',
    fontSize: scale(14),
    lineHeight: scale(21),
    marginStart: scale(15),
  },
});
