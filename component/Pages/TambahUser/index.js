import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Gap from '../../atoms/Gap';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Axios from 'axios';

const AddUser = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('https://source.unsplash.com/random');

  const handleSubmit = () => {
    const TambahUser = {
      avatar: avatar,
      first_name: firstName,
      last_name: lastName,
      email: email,
    };
    Axios.post('http://10.0.2.2:3004/users', TambahUser);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.tambahUser}>Tambah User</Text>
        <Gap height={40} />
        <Input
          value={firstName}
          judul="First Name"
          placeholder="Masukkan nama depan anda"
          onChangeText={e => setFirstName(e)}
        />
        <Gap height={20} />
        <Input
          value={lastName}
          judul="Last Name"
          placeholder="Masukkan nama belakang anda"
          onChangeText={e => setLastName(e)}
        />
        <Gap height={20} />
        <Input
          value={email}
          judul="Email"
          placeholder="Masukkan email anda"
          onChangeText={e => setEmail(e)}
        />
        <Gap height={29} />
        <Button label="Tambah User" onSubmit={handleSubmit} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
  tambahUser: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default AddUser;