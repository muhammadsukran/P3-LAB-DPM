import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import SkillsList from '../components/SkillsList';

export default function PortfolioScreen() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileCard isLoaded={isLoaded} />
      <SkillsList isLoaded={isLoaded} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
});
