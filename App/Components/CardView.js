import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../Utils/Colors';
import {scale} from '../Utils/scale';

export default function CardView(props) {
  const {style, children} = props;
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: scale(15),
    backgroundColor: Colors.itemBackground,
    borderRadius: scale(12),
  },
});
