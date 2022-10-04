import '../App.css'

import { Logo } from "../components/Logo/Logo.component"
import { RegisterForm } from '../components/RegisterForm/RegisterForm.component'

export const Register = () => {
  return (
    <div>
      <div className="Git-form">
        <div className='logo'>
          <Logo />
        </div>
        <p className='text-sign'>Sign up to GitHub</p>
        <div className='box'>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}