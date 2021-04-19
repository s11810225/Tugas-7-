import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Cards = ({fullName, username, email, address, phone}) => {
  return (
    <View style={styles.box}>
      <Text style={styles.textBold}>
        Name:<Text style={styles.text}> {fullName}</Text>
      </Text>
      <Text style={styles.textBold}>
        Username:<Text style={styles.text}> {username}</Text>
      </Text>
      <Text style={styles.textBold}>
        Email:<Text style={styles.text}> {email}</Text>
      </Text>
      <Text style={styles.textBold}>
        Address:<Text style={styles.text}> {address}</Text>
      </Text>
      <Text style={styles.textBold}>
        Phone:<Text style={styles.text}> {phone}</Text>
      </Text>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: '#C5C5C5',
    borderRadius: 10,
    paddingLeft: 26,
    marginBottom: 30,
    paddingTop: 13,
    paddingBottom: 11,
  },
  textBold: {
    fontWeight: 'bold',
  },
  text: {
    fontWeight: '300',
  },
});