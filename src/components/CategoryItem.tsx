import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {themeColors} from '../styles/colors';

interface CategoryItemProps {
  text: string;
  isSelected: boolean;
  onPress: () => void;
}

const CategoryItem = ({text, isSelected, onPress}: CategoryItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isSelected && styles.selected]}>
      <Text style={[styles.name, isSelected && styles.selectedText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  selected: {
    backgroundColor: themeColors.RED,
  },
  name: {
    color: themeColors.WHITE,
    fontSize: 20,
  },
  selectedText: {
    fontWeight: 'bold',
  },
});
