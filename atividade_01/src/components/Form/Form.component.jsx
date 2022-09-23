import styles from './Form.module.css'

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { REQUIRED, EMAIL } from '../../helpers/validation.helper';
import { userService } from '../../services/index';
import { useNavigate } from 'react-router-dom';
import { setCookie } from "nookies";

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
    <div className={styles.body}>
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
        <div className={styles.section}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            id='email'
            className={styles.input}
            {...register('email')}
          />
          <span className={styles.errors}>{errors.email && errors.email.message}</span>
        </div>
        <div className={styles.section}>
          <div className={styles.labelDiv}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <a href="https://github.com/password_reset" className={styles.forgotLink}>Forgot password?</a>
          </div>
          <input
            id='password'
            className={styles.input}
            type='password'
            {...register('password')}
          />
          <span className={styles.errors}>{errors.password && errors.password.message}</span>
        </div>
        <button type='submit' className={styles.buttonSubmit}>Sign in</button>
      </form>
    </div>
  )
}

