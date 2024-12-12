import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {themeColors} from '../../styles/colors';

const {height} = Dimensions.get('window');

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
  container: {
    margin: 10,
    borderRadius: 5,
    padding: 5,
    backgroundColor: themeColors.GRAY,
    height: height * 0.1,
  },
  title: {
    fontSize: 18,
    color: themeColors.WHITE,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  textInput: {
    textAlignVertical: 'top',
    padding: 10,
    color: themeColors.WHITE,
    fontSize: 16,
    borderRadius: 5,
    paddingVertical: 15,
  },
  errorMsg: {marginTop: 15, color: themeColors.RED, fontSize: 16},
});
