import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 35,
    paddingVertical: 4,
    fontSize: 21,
    color: colors.text,
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "justify"
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  }
})

export const TextItemThree = ({ text }) => {
  return (
    <Text style={styles.text}>
      {text}
    </Text>
  );
}

export const TextSeparator = () => <View style={styles.separator} />