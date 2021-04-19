import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Gap from '../../atoms/Gap';
import Cards from '../../molecules/Cards';
import Axios from 'axios';

const ScreenUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Axios
    Axios.get('https://jsonplaceholder.typicode.com/users').then(res =>
      setUsers(res.data),
    );
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.heading}>Users List</Text>
        <Gap height={31} />
        {users.map(item => (
          <Cards
            key={item.id}
            fullName={item.name}
            username={item.username}
            email={item.email}
            address={`${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`}
            phone={item.phone}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ScreenUserList;

const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  container: {
    marginVertical: 24,
    marginHorizontal: 24,
  },
});