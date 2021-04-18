import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default (props) => (
  <View style={[styles.container, {backgroundColor: props.corFundo || '#000'}]}>
    <Text style={[styles.text, {color: props.corTexto || '#eee'}]}>
      {props.children}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
});
