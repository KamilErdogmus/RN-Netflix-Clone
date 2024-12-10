import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../styles/colors';
interface IBtnProps {
  status: string;
  title: string;
  fnc: () => void;
}

const Button = (props: IBtnProps) => {
  const {status, title, fnc} = props;
  const setColor = () => {
    switch (status) {
      case 'primary':
        return themeColors.RED;
      case 'warning':
        return themeColors.RED;
      case 'info':
        return themeColors.RED;
      default:
        return themeColors.BLACK;
    }
  };

  return (
    <TouchableOpacity
      onPress={fnc}
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10,

    paddingVertical: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  title: {fontSize: 18, fontWeight: '500', color: themeColors.WHITE},
});
