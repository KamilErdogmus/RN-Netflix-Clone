import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {themeColors} from '../../styles/colors';

const Input = (props: any) => {
  const {title, error} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.textInput} />
      {error && <Text style={styles.errorMsg}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {margin: 10},
  title: {
    fontSize: 18,
    color: themeColors.BLACK,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  textInput: {
    padding: 10,
    backgroundColor: themeColors.WHITE,
    fontSize: 16,
    borderWidth: 1,
    borderColor: themeColors.RED,
    borderRadius: 5,
    paddingVertical: 15,
  },
  errorMsg: {marginTop: 5, color: themeColors.BLACK},
});
