import {FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import CategoryItem from '../components/CategoryItem';

const Categories = () => {
  const {categories} = useSelector((state: RootState) => state.movies);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('');

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.categoryList}
      renderItem={({item}) => (
        <CategoryItem
          text={item.name}
          isSelected={selectedCategory === item.id}
          onPress={() => handleCategoryPress(item.id)}
        />
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  text: {color: 'white'},
  categoryList: {paddingHorizontal: 10},
});
