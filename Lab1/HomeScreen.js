import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const imageSize = width * 0.25;

  const news = Array(3).fill({
    title: 'Подія дня',
    date: '16.04.2025',
    description: 'Це короткий опис важливої події. Вона змінила світ!',
    image: 'https://cdn-icons-png.flaticon.com/512/2721/2721274.png',
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={{ uri: item.image }} style={[styles.image, { width: imageSize, height: imageSize }]} />
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  card: {
    backgroundColor: '#eef2f7',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: { resizeMode: 'contain', marginVertical: 10 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  date: { fontSize: 12, color: '#666' },
  description: { fontSize: 14, textAlign: 'center', color: '#444' },
});
