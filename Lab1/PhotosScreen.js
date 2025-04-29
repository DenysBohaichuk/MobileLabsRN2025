import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

export default function PhotosScreen() {
  const images = [
    'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/501b/live/dcbb94e0-1a1d-11f0-9742-7bfd3ee821a0.jpg.webp',
    'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/66a1/live/ba7c7ab0-1537-11f0-a421-69fb502f5991.jpg.webp',
    'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/9182/live/773d40c0-1926-11f0-8122-0b29abf84eb2.jpg.webp',
    'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/df1c/live/9bfc30e0-156d-11f0-8606-af7fcf765860.jpg.webp',
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Моменти з життя</Text>
      {images.map((uri, index) => (
        <Image key={index} source={{ uri }} style={styles.image} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  header: { fontSize: 20, textAlign: 'center', marginVertical: 10 },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 15 },
});