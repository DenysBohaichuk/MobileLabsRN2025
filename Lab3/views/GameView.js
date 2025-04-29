import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import GestureTarget from '../widgets/GestureTarget';

export default function GameView({ navigation }) {
  const [points, setPoints] = useState(0);
  const [progress, setProgress] = useState({
    tap: 0,
    doubleTap: 0,
    hold: false,
    move: false,
    flingLeft: false,
    flingRight: false,
    zoom: false,
    complete100: false,
  });

  const handlePoints = (add) => {
    const total = points + add;
    setPoints(total);
    if (total >= 100) {
      setProgress(p => ({ ...p, complete100: true }));
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.points}>Балів: {points}</Text>
      <GestureTarget score={handlePoints} progress={progress} setProgress={setProgress} />
      <Pressable style={styles.button} onPress={() => navigation.navigate('Завдання', { progress })}>
        <Text style={styles.buttonText}>Перейти до завдань</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fefefe' },
  points: { fontSize: 32, marginBottom: 30 },
  button: { backgroundColor: '#444', padding: 12, borderRadius: 8, marginTop: 30 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
