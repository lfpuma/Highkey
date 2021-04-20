import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Colors from '../Utils/Colors';
import Fonts from '../Utils/Fonts';
import {scale} from '../Utils/scale';
import CardView from './CardView';

export default class QuestionInput extends Component {
  focus() {
    this.inputRef.focus();
  }

  render() {
    return (
      <CardView style={this.props.containerStyle}>
        <TextInput
          ref={ti => {
            this.inputRef = ti;
          }}
          placeholder={'Ask a question'}
          placeholderTextColor={Colors.text}
          style={styles.inputText}
          enablesReturnKeyAutomatically
          multiline={true}
          {...this.props}
        />
      </CardView>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    color: Colors.text,
    fontFamily: Fonts.PoppinsRegular,
    fontSize: scale(15),
    marginHorizontal: scale(20),
  },
});
