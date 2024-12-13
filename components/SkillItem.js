import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Animated } from 'react-native';

export default function SkillItem({ name, icon, isLoaded }) {
  const slideAnim = new Animated.Value(isLoaded ? 0 : -50);

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [isLoaded]);

  return (
    <Animated.View style={[styles.item, { transform: [{ translateY: slideAnim }] }]}>
      <MaterialCommunityIcons name={icon} size={40} color="#4CAF50" />
      <Text style={styles.name}>{name}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    margin: 16,
  },
  name: {
    marginTop: 8,
    fontSize: 16,
  },
});
