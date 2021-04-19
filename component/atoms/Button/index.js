import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({label, onSubmit}) => {
  return (
    <View>
      <TouchableOpacity onPress={onSubmit} style={styles.submit}>
        <Text style={styles.labelButton}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  submit: {
    backgroundColor: '#C238CE',
    borderRadius: 20,
    alignItems: 'center',
    color: 'white',
    height: 50,
    paddingTop: 10,
    paddingBottom: 9,
  },
  labelButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Button;