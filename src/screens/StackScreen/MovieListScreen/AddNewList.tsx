import {
  StyleSheet,
  SafeAreaView,
  View,
  ImageSourcePropType,
  Text,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {getRandomImage} from '../../../utils/helpers';
import Input from '../../../components/ui/Input';
import {defaultScreenStyle} from '../../../styles/defaultScreenStyles';
import {addList} from '../../../store/slices/usersSlice';
import {Routes} from '../../../utils/Routes';
import {themeColors} from '../../../styles/colors';
import Button from '../../../components/ui/Button';
import {newUserSchema} from '../../../utils/validationSchema';
import {NavigationProp} from '../../../utils/types';

interface FormValues {
  id: number;
  title: string;
  image: ImageSourcePropType;
}

const AddNewList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();

  const initialValues: FormValues = {
    id: Date.now(),
    title: '',
    image: getRandomImage(),
  };

  const handleFormSubmit = (values: FormValues) => {
    const newUser = {
      ...values,
      image: getRandomImage(),
    };
    dispatch(addList(newUser));
    navigation.navigate(Routes.MOVIELIST);
  };

  return (
    <SafeAreaView style={[defaultScreenStyle.container]}>
      <Formik
        validationSchema={newUserSchema}
        initialValues={initialValues}
        onSubmit={handleFormSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <Text style={styles.text}>Ready to Watch?</Text>

            <Input
              error={touched.title && errors.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              title="Enter Watch list Name"
              placeholder="Please enter an email"
            />
            <View style={styles.btnArea}>
              <Button status="primary" fnc={handleSubmit} title="Create User" />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default AddNewList;

const styles = StyleSheet.create({
  container: {flex: 1},
  btnArea: {margin: 10, marginTop: 30},
  text: {
    color: themeColors.GRAY,
    fontSize: 26,
    textAlign: 'center',
    paddingVertical: 20,
  },
});
