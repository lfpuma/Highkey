import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Background(props) {
  const {style, children} = props;
  return (
    <LinearGradient
      colors={['#2467F4', '#14131B00', '#2467F4']}
      useAngle={true}
      angle={154}
      style={[styles.container, style]}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.2,
  },
});
