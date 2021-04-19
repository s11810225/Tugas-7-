import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Input from '../../atoms/Input';
import Gap from '../../atoms/Gap';
import Button from '../../atoms/Button';

const ScreenRegister = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    const data = {
      name: name,
      username: username,
      email: email,
      address: address,
      phone: phone,
    };
    console.log(data);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.registration}>Registration</Text>
        <Gap height={40} />
        <Input
          value={name}
          judul="Name"
          placeholder="Masukkan nama lengkap anda"
          onChangeText={e => setName(e)}
        />
        <Gap height={20} />
        <Input
          value={username}
          judul="Username"
          placeholder="Masukkan username anda"
          onChangeText={e => setUsername(e)}
        />
        <Gap height={20} />
        <Input
          value={email}
          judul="Email"
          placeholder="Masukkan email anda"
          onChangeText={e => setEmail(e)}
        />
        <Gap height={20} />
        <Input
          value={address}
          judul="Address"
          placeholder="Masukkan alamat anda"
          onChangeText={e => setAddress(e)}
        />
        <Gap height={20} />
        <Input
          value={phone}
          keyboardType="numeric"
          judul="Phone Number"
          placeholder="Masukkan Nomor telepon anda"
          onChangeText={e => setPhone(e)}
        />
        <Gap height={29} />
        <Button label="Register" onSubmit={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default ScreenRegister;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
  registration: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});