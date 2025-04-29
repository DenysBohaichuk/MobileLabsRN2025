import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GoalItem({ label, done }) {
  return (
    <View style={[styles.box, { backgroundColor: done ? '#a7f3d0' : '#f9fafb' }]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.status}>{done ? '✅' : '⬜'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  label: { fontSize: 16 },
  status: { fontSize: 18 },
});
