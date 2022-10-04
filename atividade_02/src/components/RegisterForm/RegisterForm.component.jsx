import styles from '../Form/Form.module.css'


import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { REQUIRED, EMAIL } from '../../helpers/validation.helper';
import { userService } from '../../services/index'
import { useNavigate } from 'react-router-dom';
import { setCookie } from "nookies";
import { Button, Input, Layout, Spacing } from '@sicredi/react';


const schemaValidation = yup.object({
  name: yup.string().required(REQUIRED),
  email: yup.string().required(REQUIRED).email(EMAIL),
  password: yup.string().required(REQUIRED),
  driver_license: yup.string().required(REQUIRED)
});

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      driver_license: "",
    },
    resolver: yupResolver(schemaValidation),
  });

  
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async(form) => {
    
    try {
      await userService.saveUser(form);
      const {data} = await userService.login(form)
      setCookie(null, 'token', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
        })
      // sessionStorage.setItem("token", data.token)
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
        
        <Input name="name" required className={styles.input} label="Name" {...register('name')} errorMessage={errors.name && errors.name.message} />
        <Spacing appearance="small" />
        <Input name="email" required className={styles.input} label="Email" {...register('email')} errorMessage={errors.email && errors.email.message} />
        <Spacing appearance="small" />
        <Input name="password" type='password' required className={styles.input} label="Password" {...register('password')} errorMessage={errors.password && errors.password.message} />
        <Spacing appearance="small" />
        <Input name="driver_license" required className={styles.input} label="Driver License" {...register('driver_license')} errorMessage={errors.driver_license && errors.driver_license.message} />
        <Spacing appearance="medium" />
        <Button size="large" type='submit' appearance="primary">
          Register
        </Button>
      </form>
      </Layout>
  )
}