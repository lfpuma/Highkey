import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../Utils/Colors';
import Fonts from '../Utils/Fonts';
import {scale} from '../Utils/scale';
import CardView from './CardView';

export default class OptionEditor extends Component {
  focus() {
    this.inputRef.focus();
  }

  render() {
    return (
      <CardView style={this.props.containerStyle}>
        <TouchableOpacity>
          <Text style={styles.text}>Add an option</Text>
        </TouchableOpacity>
      </CardView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.PoppinsRegular,
    color: Colors.option,
    fontSize: scale(15),
    marginHorizontal: scale(20),
  },
});
