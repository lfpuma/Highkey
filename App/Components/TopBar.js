import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {scale} from '../Utils/scale';
import Fonts from '../Utils/Fonts';
import AIcons from 'react-native-vector-icons/AntDesign';
import Colors from '../Utils/Colors';

export default class TopBar extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>New Poll</Text>
        </View>
        <TouchableOpacity>
          <AIcons
            name="close"
            size={scale(22)}
            color={'white'}
            style={styles.close}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.create}>Create</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: scale(15),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  title: {
    fontFamily: Fonts.PoppinsSemiBold,
    color: 'white',
    fontSize: scale(16),
  },
  create: {
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.text,
    fontSize: scale(14),
  },
});
