import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 26,
    color: colors.text,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  }
})

export const TextItem = ({ text }) => {
  return (
    <Text style={styles.text}>
      {text}
    </Text>
  );
}

export const TextSeparator = () => <View style={styles.separator} />