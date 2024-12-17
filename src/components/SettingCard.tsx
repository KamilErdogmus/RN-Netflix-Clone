import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ArrowRight2} from 'iconsax-react-native';
import {themeColors} from '../styles/colors';

interface ICardProps {
  item: {
    id: number;
    icon: Element;
    title: string;
  };
}

const SettingCard = ({item}: ICardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <View style={styles.left}>
        {item.icon}
        <Text style={styles.text}>{item.title}</Text>
      </View>
      <ArrowRight2 size="24" color={themeColors.WHITE} />
    </TouchableOpacity>
  );
};

export default SettingCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themeColors.DARKGRAY,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  left: {flexDirection: 'row', alignItems: 'center', gap: 8},
  text: {color: 'white', fontSize: 18, fontWeight: '700'},
});
