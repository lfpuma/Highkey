import React from 'react';
import {View} from 'react-native';
import NewPollScreen from './Containers/NewPoll';
import {styles} from './styles';

export default class App extends React.Component {
  renderApp = () => (
    <View style={styles.container}>
      <NewPollScreen />
    </View>
  );

  render = () => this.renderApp();
}
