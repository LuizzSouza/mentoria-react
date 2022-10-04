import styles from './Form.module.css'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { REQUIRED, EMAIL } from '../../helpers/validation.helper';
import { userService } from '../../services/index';
import { useNavigate } from 'react-router-dom';
import { setCookie } from "nookies";
import { Button, Input, Layout, Spacing } from '@sicredi/react';

const schemaValidation = yup.object({
  email: yup.string().required(REQUIRED).email(EMAIL),
  password: yup.string().required(REQUIRED)
});

export const FormComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schemaValidation),
  });

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async(form) => {


    try {
      const {data} = await userService.login(form);
      setCookie(null, 'token', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
        })
      navigate("/users")
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Layout className={styles.body}>  
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
        <Input name="email" required className={styles.input} label="Email" {...register('email')} errorMessage={errors.email && errors.email.message} />
        <Spacing appearance="medium" />
        <Input name="password" type='password' required className={styles.input} label="Password" {...register('password')} errorMessage={errors.password && errors.password.message} />
        <Spacing appearance="medium" />
        <Button size="large" type='submit' appearance="primary">
            Sign in
        </Button>
      </form>
      </Layout>
  )
}

