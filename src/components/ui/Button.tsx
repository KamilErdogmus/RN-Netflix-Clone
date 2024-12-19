import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../../styles/colors';
import {IBtnProps} from '../../utils/types';

const Button = (props: IBtnProps) => {
  const {status, title, fnc, fSize = 18} = props;
  const setColor = () => {
    switch (status) {
      case 'primary':
        return themeColors.RED;
      case 'secondary':
        return themeColors.BLUE;
      case 'warning':
        return themeColors.WHITE;
      case 'empty':
        return themeColors.BLACK;
      default:
        return themeColors.GRAY;
    }
  };

  return (
    <TouchableOpacity
      onPress={fnc}
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={[styles.title, {fontSize: fSize}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 15,
    borderRadius: 6,
    flex: 1,
    alignItems: 'center',
  },
  title: {fontSize: 18, fontWeight: '500', color: themeColors.WHITE},
});
