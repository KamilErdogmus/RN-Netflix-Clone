import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyles';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

interface FormValues {
  id: number;
  title: string;
}

const AddNewList = () => {
  const dispatch = useDispatch();

  const initialValues: FormValues = {
    id: Date.now(),
    title: '',
  };

  const handleFormSubmit = (values: FormValues) => {};

  return (
    <View style={[defaultScreenStyle.container]}>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <Input
              error={errors.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              title="Email"
              placeholder="Please enter an email"
            />
            <Button status="success" fnc={handleSubmit} title="Save" />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewList;

const styles = StyleSheet.create({});
