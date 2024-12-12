import * as Yup from 'yup';

export const newUserSchema = Yup.object().shape({
  title: Yup.string().required('Required Area'),
});
