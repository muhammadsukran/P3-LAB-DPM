import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Animated } from 'react-native';

export default function ProfileCard({ isLoaded }) {
  const fadeAnim = new Animated.Value(isLoaded ? 1 : 0);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [isLoaded]);

  return (
    <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
      <Image source={require('../assets/profile.png')} style={styles.image} />
      <Text style={styles.name}>MUHAMMAD SUKRAN</Text>
      <Text style={styles.title}>Full Stack Developer And Cyber Scurity</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginBottom: 24,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: 'gray',
  },
});
