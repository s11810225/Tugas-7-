import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CardsUsers = ({fullName, email, imageUrl}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{fullName}</Text>
      <Text style={styles.email}>{email}</Text>
      <Image style={styles.image} source={{uri: `${imageUrl}`}} />
    </View>
  );
};

export default CardsUsers;

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    alignItems: 'center',
    marginBottom: 25,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 10,
  },
});