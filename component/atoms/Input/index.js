import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({judul, placeholder, ...rest}) => {
  return (
    <View>
      <Text style={styles.labelInput}>{judul}</Text>
      <TextInput style={styles.input} placeholder={placeholder} {...rest} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  labelInput: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C5C5C5',
    borderRadius: 10,
  },
});