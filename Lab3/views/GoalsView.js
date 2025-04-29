import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GoalItem from '../widgets/GoalItem';

export default function GoalsView({ route }) {
  const { progress } = route.params;
  const goals = [
    { id: '1', label: '10 кліків', done: progress.tap >= 10 },
    { id: '2', label: '5 подвійних кліків', done: progress.doubleTap >= 5 },
    { id: '3', label: 'Утримати 3 сек.', done: progress.hold },
    { id: '4', label: 'Перетягнути', done: progress.move },
    { id: '5', label: 'Свайп вліво', done: progress.flingLeft },
    { id: '6', label: 'Свайп вправо', done: progress.flingRight },
    { id: '7', label: 'Масштабувати', done: progress.zoom },
    { id: '8', label: 'Набрати 100 очок', done: progress.complete100 },
  ];

  return (
    <View style={styles.wrapper}>
      <FlatList data={goals} keyExtractor={item => item.id} renderItem={({ item }) => <GoalItem {...item} />} />
    </View>
  );
}

const styles = StyleSheet.create({ wrapper: { flex: 1, padding: 20 } });
