import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkillItem from './SkillItem';

export default function SkillsList({ isLoaded }) {
  const skills = [
    { name: 'HTML', icon: 'language-html5' },
    { name: 'CSS', icon: 'language-css3' },
    { name: 'JavaScript', icon: 'language-javascript' },
    { name: 'Python', icon: 'language-python' },
    { name: 'Linux', icon: 'linux' },
  ];

  return (
    <View style={styles.list}>
      {skills.map((skill) => (
        <SkillItem key={skill.name} name={skill.name} icon={skill.icon} isLoaded={isLoaded} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
