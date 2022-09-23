import styles from '../Form/Form.module.css'


import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { REQUIRED, EMAIL } from '../../helpers/validation.helper';
import { userService } from '../../services/index'
import { useNavigate } from 'react-router-dom';
import { setCookie } from "nookies";


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
    <div className={styles.body}>
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
         <div className={styles.section}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            id='name'
            className={styles.input}
            {...register('name')}
          />
          <span className={styles.errors}>{errors.name && errors.name.message}</span>
        </div>
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
            <label htmlFor="password" className={styles.label}>Password</label>
          <input
            id='password'
            className={styles.input}
            type='password'
            {...register('password')}
          />
          <span className={styles.errors}>{errors.password && errors.password.message}</span>
        </div>
        <div className={styles.section}>
          <label htmlFor="driver_license" className={styles.label}>Driver License</label>
          <input
            id='driver_license'
            className={styles.input}
            {...register('driver_license')}
          />
          <span className={styles.errors}>{errors.driver_license && errors.driver_license.message}</span>
        </div>
        <button type='submit' className={styles.buttonSubmit}>Register</button>
      </form>
    </div>
  )
}