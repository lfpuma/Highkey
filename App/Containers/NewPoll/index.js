import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Background from '../../Components/Background';
import OptionEditor from '../../Components/OptionEditor';
import QuestionInput from '../../Components/QuestionInput';
import SwitchEx from '../../Components/SwitchEx';
import TopBar from '../../Components/TopBar';
import Constants from '../../Config/Constants';
import {styles} from './styles';

export default class NewPollScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      options: 0,

      voting: true,
      moreOptions: false,
    };
  }

  render() {
    const {question, options} = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.mainWithBG}>
          <Background />
          <View style={styles.mainContainer}>
            <TopBar />

            {/* Question */}
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Question</Text>
              <Text
                style={
                  styles.inputCount
                }>{`${question.length}/${Constants.questionLength}`}</Text>
            </View>
            <QuestionInput
              maxLength={Constants.questionLength}
              value={question}
              onChangeText={text => this.setState({question: text})}
            />

            {/* Options */}
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Options</Text>
              <Text
                style={
                  styles.inputCount
                }>{`${options}/${Constants.optionsLength}`}</Text>
            </View>
            <OptionEditor />

            {/* Extra */}
            <SwitchEx
              style={styles.votingContainer}
              icon={'colours'}
              text={'Anonymous voting'}
              value={this.state.voting}
              onValueChange={voting => this.setState({voting})}
            />
            <SwitchEx
              icon={'add-to-list'}
              text={'Ability to add more options'}
              value={this.state.moreOptions}
              onValueChange={moreOptions => this.setState({moreOptions})}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
