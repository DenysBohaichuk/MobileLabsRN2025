import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', pass: '', repeat: '' });
  const handleChange = (field, val) => setForm({ ...form, [field]: val });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Профіль користувача</Text>
      {['Ім’я', 'Прізвище', 'Email', 'Пароль', 'Повторіть пароль'].map((placeholder, idx) => (
        <TextInput
          key={idx}
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={placeholder.toLowerCase().includes('пароль')}
          keyboardType={placeholder === 'Email' ? 'email-address' : 'default'}
          onChangeText={v => handleChange(['fname', 'lname', 'email', 'pass', 'repeat'][idx], v)}
        />
      ))}
      <Button title="Підтвердити" onPress={() => alert('Збережено!')} color="#3366cc" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 10 },
});
