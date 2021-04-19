import React, {useState, useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Axios from 'axios';
import CardsUsers from '../../molecules/CardsUsers';
import Button from '../../atoms/Button';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  
    Axios.get('http://10.0.2.2:3004/users').then(res => setUsers(res.data));
  }, [users]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map(item => (
          <CardsUsers
            key={item.id}
            fullName={`${item.first_name} ${item.last_name}`}
            email={item.email}
            imageUrl={item.avatar}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 20,
  },
});